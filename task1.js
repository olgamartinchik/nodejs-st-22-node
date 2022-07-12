function ask() {
  process.stdout.write(`\nWright something... > \n\n`);
}

process.stdin.on("data", (data) => {
  if (data.includes("exit")) {
    process.exit();
  }
  process.stdout.write(
    data.toString().trim().split("").reverse().join("") + "\n\n"
  );
});

ask();
