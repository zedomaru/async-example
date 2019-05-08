const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
  async process01() {
    console.log("Process 1 started");
    throw new Error("Process 01 failed");
    console.time("Process 1 ended");
    await wait(5000);
    console.timeEnd("Process 1 Ended");
    console.log();
    return "Process01-value";
  },

  async process02() {
    console.log("Process 2 Started");
    console.time("Process 2 ended");
    await wait(3000);
    console.timeEnd("Process 2 ended");
    console.log();
    return "process02-value";
  }
};
