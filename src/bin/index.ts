import * as cp from 'node:child_process'

const cv = cp.spawnSync("cargo -V")
if (!cv.stdout) {
   process.stderr.write("Cargo and Rust need to be installed to run astro.\n")
   process.exit(1)
}

const cgv = cp.spawnSync("cargo-generate -V")