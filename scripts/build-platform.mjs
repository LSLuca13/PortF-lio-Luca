import { spawn } from "node:child_process";

const isRender =
  process.env.RENDER === "true" ||
  process.env.RENDER_SERVICE_TYPE === "static" ||
  Boolean(process.env.RENDER_SERVICE_ID);

const buildTarget = isRender ? "build:render" : "build:sites";
const npmCli = process.env.npm_execpath;

if (!npmCli) {
  console.error("Não foi possível localizar o npm para iniciar o build.");
  process.exit(1);
}

console.log(
  isRender
    ? "Render detectado: gerando exportação estática em out/."
    : "Ambiente local/Sites detectado: gerando build vinext em dist/."
);

const build = spawn(process.execPath, [npmCli, "run", buildTarget], {
  env: process.env,
  stdio: "inherit"
});

build.on("error", (error) => {
  console.error(`Não foi possível iniciar ${buildTarget}:`, error);
  process.exit(1);
});

build.on("exit", (code) => {
  process.exit(code ?? 1);
});
