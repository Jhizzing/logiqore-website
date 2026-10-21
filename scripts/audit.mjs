// `npm audit` that fails on every advisory except those allowlisted below.
// Only allowlist advisories with no patched release that affect dev tooling only,
// and remove the entry as soon as a fix ships (the script fails once one exists).
import { execFileSync } from "node:child_process";

const ALLOWLIST = {
  "GHSA-vfj7-8cjw-p6xm": {
    package: "braces",
    reason:
      "No patched release (all versions <= 3.0.3). Reached only via eslint-config-next -> fast-glob -> micromatch at lint time, on glob patterns from our own config.",
  },
};

function runAudit() {
  try {
    return execFileSync("npm", ["audit", "--json"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  } catch (error) {
    // npm audit exits non-zero when it finds anything; the JSON is still on stdout.
    if (error.stdout) return error.stdout;
    throw error;
  }
}

const report = JSON.parse(runAudit());
const advisories = new Map();
for (const vuln of Object.values(report.vulnerabilities ?? {})) {
  for (const via of vuln.via) {
    if (typeof via !== "object") continue;
    const id = via.url?.split("/").pop();
    advisories.set(id, { ...via, id, fixAvailable: vuln.fixAvailable });
  }
}

const blocking = [];
for (const advisory of advisories.values()) {
  const allowed = ALLOWLIST[advisory.id];
  if (!allowed) {
    blocking.push(`${advisory.severity} ${advisory.name}: ${advisory.title} (${advisory.url})`);
  } else if (advisory.fixAvailable === true) {
    blocking.push(`${advisory.id} (${advisory.name}) now has a fix: run npm audit fix and remove it from the allowlist`);
  } else {
    console.log(`allowlisted ${advisory.id} (${advisory.name}): ${allowed.reason}`);
  }
}

const stale = Object.keys(ALLOWLIST).filter((id) => !advisories.has(id));
for (const id of stale) console.log(`note: allowlisted ${id} no longer reported; remove it from scripts/audit.mjs`);

if (blocking.length) {
  console.error(`npm audit: ${blocking.length} blocking advisor${blocking.length === 1 ? "y" : "ies"}`);
  for (const line of blocking) console.error(`  - ${line}`);
  process.exit(1);
}
console.log(`npm audit: no blocking advisories (${advisories.size} total, ${advisories.size - blocking.length} allowlisted)`);
