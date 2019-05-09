const { process01, process02 } = require("./processes");

//we have 2 process and we want to run them in parallel

async function main() {
  try {
    console.time("Total time running");
    const data = await Promise.all([process01(), process02()]);

    console.log();

    console.log("Process 01 Returned: ", data[0]);
    console.log("Process 02 Returned: ", data[1]);

    console.log();

    console.timeEnd("Total time running");
  } catch (error) {
    console.error(error);
  }
}

main();
