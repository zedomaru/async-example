const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
  async process01() {
    console.log("Process 1 started");
    console.time("Process 1 ended");
    await wait(5000);
    console.timeEnd("Process 1 Ended");
    return "Process01-value";
  },

  async process02() {
    console.log("Process 2 Started\n");
    console.time("Process 2 ended");
    await wait(3000);
    console.timeEnd("Process 2 ended");
    return "process02-value";
  }
};
