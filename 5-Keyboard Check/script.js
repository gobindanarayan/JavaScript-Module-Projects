const insert = document.getElementById("insert");

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  insert.innerText = `
  <table>
      <tr>
        <th>Key</th>
        <th>Code</th>
        <th>Key Code</th>
      </tr>
      <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.code}</td>
        <td>${e.keyCode || "Deprecated"}</td>
      </tr>
    </table>
  `;
});
