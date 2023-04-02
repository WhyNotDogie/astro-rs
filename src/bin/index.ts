import * as cp from 'node:child_process'

const cgv = cp.spawnSync("cargo -V")
if (!cgv.stdout) {
   process.stderr.write("Cargo and Rust need to be installed to run astro.\n")
   process.exit(1)
}