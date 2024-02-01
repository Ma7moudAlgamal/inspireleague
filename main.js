// fetch("tables.html")
//   .then((response) => response.text())
//   .then((content) => {
//     const tableContainer = document.getElementById("tables");
//     tableContainer.innerHTML = content;
//   });
fetch("brackets.html")
  .then((response) => response.text())
  .then((content) => {
    const tableContainer = document.getElementById("brackets");
    tableContainer.innerHTML = content;
  });
