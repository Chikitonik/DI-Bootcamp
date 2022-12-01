const myDate = require("./date.js");

console.log(
  `the 1st January is in ${myDate.daysToFirstJan} days, ${myDate.hoursToFirstJan} hours and ${myDate.minutesToFirstJan} minutes`
);

myDate.nearestHoliday();

const prompt = require("prompt");
prompt.get("birthday in format 2022/12/30", function (err, result) {
  console.log(
    `You live ${myDate.liveInMinutes(
      result["birthday in format 2022/12/30"]
    )} minutes`
  );
});
