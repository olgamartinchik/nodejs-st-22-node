const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");

const csvFile = path.join(__dirname, "nodejs-hw1-ex1-csv.csv");
const txtFile = path.join(__dirname, "nodejs-hw1-ex1-csv.txt");

const writeTxt = fs.createWriteStream(txtFile, "utf-8");
const readCsv = fs.createReadStream(csvFile, "utf-8");

readCsv.on("data", (data) => {
  console.log("++", data);
});

const handleError = () => {
  console.log("Error");
  readCsv.destroy();
  writeTxt.end("Finished with error...");
};
readCsv.on("error", handleError);
writeTxt.on("error", handleError);

csv()
  .fromStream(readCsv)
  .subscribe((line) => {
    console.log("++", line);
    let obj = {};
    for (const key in line) {
      obj[key.toLowerCase()] = +line[key] || line[key];
    }

    writeTxt.write(JSON.stringify(obj) + "\n");
  });
