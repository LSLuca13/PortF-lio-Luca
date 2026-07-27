import { spawn } from "node:child_process";
import path from "node:path";

const nextCli = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
const build = spawn(process.execPath, [nextCli, "build"], {
  env: {
    ...process.env,
    PORTFOLIO_STATIC_EXPORT: "true"
  },
  stdio: "inherit"
});

build.on("error", (error) => {
  console.error("Não foi possível iniciar o build estático:", error);
  process.exit(1);
});

build.on("exit", (code) => {
  process.exit(code ?? 1);
});
