// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table,
// where a week is <tr>,
// and a day is <td>.
// The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.
function createCalendar(year, month) {
  // create calendar array
  var d = new Date(year, month);
  var monthArr = [["SU", "MO", "TU", "WE", "TH", "FR", "SA"]];
  var monthLine = [..."......."];
  while (d.getMonth() == month) {
    if (monthLine[6] != ".") {
      monthArr.push(monthLine);
      monthLine = [..."......."];
    }
    monthLine[d.getDay()] = d.getDate();
    d.setDate(d.getDate() + 1);
  }
  monthArr.push(monthLine);
  // add calendar to html
  table = document.createElement("table");
  table.border = 1;
  table.style.borderCollapse = "collapse";
  document.body.appendChild(table);
  tbody = document.createElement("tbody");
  table.appendChild(tbody);
  tr = document.createElement("tr");
  // header
  monthArr[0].forEach((e) => {
    th = document.createElement("th");
    th.textContent = e;
    tr.appendChild(th);
  });
  tbody.appendChild(tr);
  // dates
  for (var i = 1; i < monthArr.length; i++) {
    tr = document.createElement("tr");
    monthArr[i].forEach((e) => {
      td = document.createElement("td");
      td.textContent = e;
      tr.appendChild(td);
      if (i % 2 != 0) tr.style.backgroundColor = "rgb(192,192,192)";
      tbody.appendChild(tr);
    });
  }
}
createCalendar(2022, 9);
