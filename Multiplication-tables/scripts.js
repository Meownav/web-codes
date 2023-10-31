$(() => {
  const table_cont = $(".table-container");
  const table = document.createElement("table");
  table_cont.append(table);
  for (let num = 1; num < 11; num++) {
    tr = document.createElement("tr");
    table.append(tr);
    $(tr).attr(
      "style",
      "border:solid black 3px;color:rgb(" +
        Math.floor(Math.random() * 255) +
        " " +
        Math.floor(Math.random() * 255) +
        " " +
        Math.floor(Math.random() * 255) +
        ")"
    );
    for (let k = 1; k < 11; k++) {
      td = document.createElement("td");
      td.appendChild(document.createTextNode(`${num} X ${k} = ${num * k}`));
      $(td).attr("style", "border:solid pink 2px; padding:20px;");
      tr.append(td);
    }
  }
});
