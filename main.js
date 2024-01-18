fetch("tables.html")
  .then((response) => response.text())
  .then((content) => {
    const tableContainer = document.getElementById("tables");
    tableContainer.innerHTML = content;
  });
