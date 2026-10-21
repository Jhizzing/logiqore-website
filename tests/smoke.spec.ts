import { expect, test, type Page } from "@playwright/test";
import { REPORTER_APP_URL, REPORTER_HEALTH_PATH } from "../src/lib/reporter";

const PAGES = [
  { path: "/", heading: /Modern software for/ },
  { path: "/products/reporter", heading: /LogiQore Reporter/ },
  { path: "/services", heading: /QAQC/ },
  { path: "/utilities/truethick", heading: /TrueThick/ },
  { path: "/privacy", heading: /Privacy Policy/ },
  { path: "/terms", heading: /Terms of Service/ },
];

const HEALTH_URL = `${REPORTER_APP_URL}${REPORTER_HEALTH_PATH}`;

function collectCspViolations(page: Page) {
  const violations: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" && /Content Security Policy/i.test(msg.text())) {
      violations.push(msg.text());
    }
  });
  return violations;
}

/** Alpha channel of a computed CSS colour (rgb/rgba/oklab/oklch/color()). */
function alphaOf(color: string) {
  if (color === "transparent") return 0;
  const slash = color.match(/\/\s*([\d.]+)(%?)\s*\)$/);
  if (slash) return Number(slash[1]) / (slash[2] ? 100 : 1);
  const rgba = color.match(/^rgba\((?:[^,]+,){3}\s*([\d.]+)\)$/);
  return rgba ? Number(rgba[1]) : 1;
}

test.describe("routes", () => {
  for (const { path, heading } of PAGES) {
    test(`${path} renders`, async ({ page }) => {
      const violations = collectCspViolations(page);
      await page.route(HEALTH_URL, (route) => route.abort());
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
      await expect(page.locator("header")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
      expect(violations).toEqual([]);
    });
  }

  test("robots.txt and sitemap.xml are served", async ({ request }) => {
    const robots = await request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("Sitemap:");

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain("/utilities/truethick");
  });

  test("unknown routes return 404", async ({ page }) => {
    const response = await page.goto("/definitely-not-a-page");
    expect(response?.status()).toBe(404);
  });
});

test.describe("mobile menu at 390px", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens with an opaque background and closes on Escape and outside click", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Open menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");

    const background = await menu.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(alphaOf(background), `menu background ${background}`).toBeGreaterThanOrEqual(0.9);
    await expect(menu.getByRole("link", { name: "Utilities" })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(menu).toBeVisible();
    await page.mouse.click(195, 800);
    await expect(menu).toBeHidden();
  });

  test("closes after navigating", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.locator("#mobile-menu").getByRole("link", { name: "Utilities" }).click();
    await expect(page).toHaveURL(/\/utilities\/truethick$/);
    await expect(page.locator("#mobile-menu")).toBeHidden();
  });
});

test.describe("TrueThick", () => {
  async function openTool(page: Page) {
    await page.goto("/utilities/truethick");
    const iframe = page.locator("iframe[title='TrueThick Utility App']");
    await iframe.scrollIntoViewIfNeeded();
    return page.frameLocator("iframe[title='TrueThick Utility App']");
  }

  test("intercept analysis default case: 7.04 m true thickness at alpha 44.7°", async ({ page }) => {
    const tool = await openTool(page);
    await tool.locator(".tab-btn[data-tab='intercept']").click();
    await tool.locator("label[for='method-struct']").click();

    await expect(tool.locator("#t2-hole-az")).toHaveValue("240");
    await expect(tool.locator("#t2-hole-dip")).toHaveValue("-60");
    await expect(tool.locator("#t2-length")).toHaveValue("10");
    await expect(tool.locator("#t2-dip")).toHaveValue("45");
    await expect(tool.locator("#t2-dipdir")).toHaveValue("135");

    await tool.locator("#btn-analyze").click();
    const metrics = tool.locator("#intercept-metrics");
    await expect(metrics).toContainText("7.04 m");
    await expect(metrics).toContainText("44.7°");
  });

  test("orientation solver dip/dip-direction default case gives alpha 44.7°", async ({ page }) => {
    const tool = await openTool(page);
    await tool.locator("label[for='mode-dd']").click();
    await tool.locator("#btn-solve").click();
    await expect(tool.locator("#orient-metrics .metric").first()).toContainText("44.7°");
  });
});

test.describe("Reporter launch button", () => {
  test("shows the offline state when the health check fails", async ({ page }) => {
    await page.route(HEALTH_URL, (route) => route.abort("internetdisconnected"));
    await page.goto("/products/reporter");

    await expect(page.getByText("Beta temporarily unavailable")).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact us for access" })).toHaveAttribute(
      "href",
      "/?interest=reporter#contact",
    );
    await expect(page.getByRole("link", { name: "Launch Reporter Beta" })).toHaveCount(0);
  });

  test("shows the offline state when the health check returns an error", async ({ page }) => {
    await page.route(HEALTH_URL, (route) =>
      route.fulfill({
        status: 503,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: "unavailable",
      }),
    );
    await page.goto("/products/reporter");
    await expect(page.getByText("Beta temporarily unavailable")).toBeVisible();
  });

  test("keeps the Launch link when Reporter is healthy", async ({ page }) => {
    let probed = false;
    await page.route(HEALTH_URL, (route) => {
      probed = true;
      return route.fulfill({
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({ status: "healthy" }),
      });
    });
    await page.goto("/products/reporter");

    await expect.poll(() => probed).toBe(true);
    await page.waitForLoadState("networkidle");
    const launch = page.getByRole("link", { name: "Launch Reporter Beta" });
    await expect(launch).toBeVisible();
    await expect(launch).toHaveAttribute("href", REPORTER_APP_URL);
    await expect(page.getByText("Beta temporarily unavailable")).toHaveCount(0);
  });
});
