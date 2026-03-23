import $ from "@david/dax";
import * as semver from "@std/semver";
import * as path from "node:path";

const versions = await getTypeScriptVersionsToInstall();
await npmInstallTypeScriptVersions([...versions, "next"]);

async function npmInstallTypeScriptVersions(versions: string[]) {
  const packages = versions.map((version) => `typescript-${version}@npm:typescript@${version}`);
  console.log(`Installing Typescript ${versions.join(", ")}...`);
  // Use the currently running Deno executable so this works even when `deno`
  // is not available on PATH (for example when launched from a local npm package binary).
  await $`${Deno.execPath()} install ${packages}`
    .cwd(path.resolve(import.meta.dirname!, "../"));
}

async function getTypeScriptVersionsToInstall() {
  const versions = await getAllTypeScriptVersions();
  const highestMinors: { [minor: string]: semver.SemVer } = {};
  // get the highest version for each minor
  for (const version of versions) {
    if (
      version == null ||
      (version.prerelease?.length ?? 0) > 0 ||
      (version.build?.length ?? 0) > 0
    ) {
      continue;
    }
    const majorMinor = version.major + "." + version.minor;
    if (highestMinors[majorMinor] == null || semver.compare(highestMinors[majorMinor], version) < 0) {
      highestMinors[majorMinor] = version;
    }
  }
  const finalVersions = Object.values(highestMinors).sort(semver.compare);
  // select the most recent 9 versions
  return finalVersions.slice(-9).map((v) => semver.format(v));
}

async function getAllTypeScriptVersions() {
  // { "x.x.x": "time", ... }
  const data = await $`npm show typescript time --json`.json();
  const versions = Object.keys(data);
  return versions.filter((v) => semver.canParse(v)).map((v) => semver.parse(v)).sort(semver.compare);
}
