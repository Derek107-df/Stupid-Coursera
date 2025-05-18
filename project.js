const drivers = [
  { name: "Ники Лауда", file: "lauda.html" },
  { name: "Михаэль Шумахер", file: "schumacher.html" },
  { name: "Макс Ферстаппен", file: "verstappen.html" },
  { name: "Айртон Сенна", file: "senna.html" },
  { name: "Льюис Хэмильтон", file: "hamilton.html" },
  { name: "Фернандо Алонсо", file: "alonso.html" },
  { name: "Алан Прост", file: "prost.html" },
  { name: "Кими Райкконен", file: "raikkonen.html" },
];

// Перемешать гонщиков
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateGrid() {
  shuffle(drivers);
  const table = document.getElementById("driver-grid");

  for (let i = 0; i < drivers.length; i += 2) {
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      const cell = document.createElement("td");
      const index = i + j;

      if (index < drivers.length) {
        const link = document.createElement("a");
        link.href = `drivers/${drivers[index].file}`;
        link.textContent = drivers[index].name;
        cell.appendChild(link);
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

generateGrid();
