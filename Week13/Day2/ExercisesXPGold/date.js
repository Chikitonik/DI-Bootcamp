const today = new Date();
const date = require("date-and-time");
const holidays = require("date-holidays");
const hd = new holidays("IL");

// console.log("hd :>> ", hd.getHolidays(2022));
// type: 'public',
function nearestHoliday() {
  let nearestHoliday;
  let diff = 0;
  let index = 365;
  hd.getHolidays(2022).forEach((e) => {
    diff = date.subtract(new Date(e.date), new Date(today)).toDays();
    if (e.type === "public") {
      if (diff > 0 && diff < index) {
        index = diff;
        nearestHoliday = new Date(e.date);
      }
    }
  });
  if (!nearestHoliday) {
    hd.getHolidays(2023).forEach((e) => {
      diff = date.subtract(new Date(e.date), new Date(today)).toDays();
      if (e.type === "public") {
        if (diff > 0 && diff < index) {
          index = diff;
          nearestHoliday = new Date(e.date);
        }
      }
    });
  }
  const diffDays = Math.floor(date.subtract(nearestHoliday, today).toDays());
  const diffHrs = Math.floor(
    date.subtract(nearestHoliday, today).toHours() % 24
  );
  const diffMins = Math.floor(
    date.subtract(nearestHoliday, today).toMinutes() % 60
  );
  console.log(
    `the next holiday is in ${diffDays} days, ${diffHrs} hours and ${diffMins} minutes`
  );
}

const newYear = new Date(new Date().getFullYear() + 1, 0, 1);

const diffDays = Math.floor(date.subtract(newYear, today).toDays());
const diffHrs = Math.floor(date.subtract(newYear, today).toHours() % 24);
const diffMins = Math.floor(date.subtract(newYear, today).toMinutes() % 60);

function liveInMinutes(birthday) {
  return Math.round(date.subtract(today, new Date(birthday)).toMinutes());
}

module.exports = {
  daysToFirstJan: diffDays,
  hoursToFirstJan: diffHrs,
  minutesToFirstJan: diffMins,
  liveInMinutes: liveInMinutes,
  nearestHoliday: nearestHoliday,
};
