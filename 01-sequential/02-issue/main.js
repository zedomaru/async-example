const { process01, process02 } = require("./processes");

async function main() {
  try {
    console.time("Total Running Time");
    let value1 = await process01();
    let value2 = await process02();

    console.log("Process 01 Returned ", value1);
    console.log("Process 02 Returnes ", value2);

    console.log();

    console.timeEnd("Total Running Time");
  } catch (error) {
    console.error("Error", error);
  }
}

main();
