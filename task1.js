const os = require("os");
const endLine = os.EOL;
function ask() {
  process.stdout.write(`\nWright something... > ${endLine}${endLine}`);
}

process.stdin.on("data", (data) => {
  if (data.includes("exit")) {
    process.exit();
  }
  process.stdout.write(
    data.toString().trim().split("").reverse().join("") + endLine + endLine
  );
});

ask();
