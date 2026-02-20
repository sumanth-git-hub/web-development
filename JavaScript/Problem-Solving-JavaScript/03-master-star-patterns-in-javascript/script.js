//1. Print Right-Angled Star Triangle

const rowCount = 5;

for (let i = 1; i <= rowCount; i++) {
  // console.log("Printed I", i);
  let starIcon = "";
  for (let j = 1; j <= i; j++) {
    // console.log("Printed J", j);
    starIcon += "*";
  }
  console.log(starIcon);
}

//2. Print Inverted Right-Angled Triangle

const rowCount2 = 5;

for (let i = rowCount2; i >= 1; i--) {
  // console.log(i);
  let starIcon = "";
  for (let j = 1; j <= i; j++) {
    // console.log("Printing J", j);
    starIcon += "*";
  }
  console.log(starIcon);
}

//3. Print Pyramid Pattern

const rowCount3 = 6;

for (let i = 1; i <= 2 * rowCount3 - 1; i += 2) {
  // console.log(i);
  let starIcon = "";
  const currentRow = (i + 1) / 2;
  for (let j = 1; j <= rowCount3 + currentRow - 1; j++) {
    // console.log("print J", j);
    if (j <= rowCount3 - currentRow) {
      // console.log(rowCount3 - currentRow);
      starIcon += " ";
    } else {
      starIcon += "*";
    }
  }
  console.log(starIcon);
}

//4. Print Inverted Pyramid Pattern

const rowCount4 = 6;

for (let i = rowCount4 * 2 - 1; i >= 1; i -= 2) {
  // console.log(i);
  let starIcon = "";
  const currentRow = (i + 1) / 2;
  for (let j = 1; j <= rowCount4 + currentRow - 1; j++) {
    // console.log("J value", j);
    if (j <= rowCount4 - currentRow) {
      starIcon += " ";
    } else {
      starIcon += "*";
    }
  }
  console.log(starIcon);
}

//5. Print Hollow Square Pattern

const rowCount5 = 5;

for (let i = 1; i <= rowCount5; i++) {
  // console.log(i);
  let starIcon = "";
  for (let j = 1; j <= rowCount5; j++) {
    starIcon += "*";
  }
  console.log(starIcon);
}

//6. Print Hollow Pyramid Pattern

const row6 = 5;

for (let i = 1; i <= 2 * row6 - 1; i += 2) {
  let str = "";
  const currentRow = (i + 1) / 2;

  for (let j = 1; j <= row6 + currentRow - 1; j++) {
    if (
      j <= row6 - currentRow ||
      (j > row6 - currentRow + 1 &&
        j < row6 + currentRow - 1 &&
        i !== 2 * row6 - 1)
    ) {
      str += " ";
    } else {
      str += "*";
    }
  }

  console.log(str);
}

//7. Print Alternating Binary Triangle

const rowCount7 = 5;

for (let i = 1; i <= rowCount7; i++) {
  let starIcon = "";
  for (let j = 1; j <= i; j++) {
    if (i % 2 === 1) {
      starIcon += j % 2;
    } else {
      starIcon += (j + 1) % 2;
    }
  }
  console.log(starIcon);
}
