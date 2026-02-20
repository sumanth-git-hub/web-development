## 1. Print Right-Angled Star Triangle

```js
const numOfRows = 8;

for (let i = 1; i <= numOfRows; i++) {
  let star = "";
  // star += "*";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  // console.log(star);
}
```

## 2. Print Inverted Right-Angled Triangle

```js
const numOfRows2 = 5;

for (let i = numOfRows2; i >= 1; i--) {
  let star2 = "";
  for (let j = i; j >= 1; j--) {
    star2 += "*";
  }
  // console.log(star2);
}
```

## 3. Print Pyramid Pattern

```js
const row = 5;

for (let i = 1; i <= 2 * row - 1; i += 2) {
  let str = "";
  const currentRow = (i + 1) / 2;

  for (let j = 1; j <= row + currentRow - 1; j++) {
    if (j <= row - currentRow) {
      str += " ";
    } else {
      str += "*";
    }
  }

  // console.log(str);
}
```

## 4. Print Inverted Pyramid Pattern

```js
const row2 = 5;

for (let i = 2 * row2 - 1; i >= 1; i -= 2) {
  let str = "";
  const currentRow = (i + 1) / 2;

  for (let j = 1; j <= row2 + currentRow - 1; j++) {
    if (j <= row2 - currentRow) {
      str += " ";
    } else {
      str += "*";
    }
  }

  // console.log(str);
}
```

## 5. Print Hollow Square Pattern

```js
const squareRow = 6;

for (let i = 1; i <= squareRow; i++) {
  let star = "";
  // console.log(i, "I value");

  for (let j = 1; j <= squareRow; j++) {
    // console.log(j, "J value");
    if (i === 1 || i === squareRow || j === 1 || j === squareRow) {
      star += "*";
    } else {
      star += " ";
    }
  }
  // console.log(star);
}
```

## 6. Print Hollow Pyramid Pattern

```js
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

  // console.log(str);
}
```

## 7. Print Alternating Binary Triangle

```js
const row7 = 5;

for (let i = 1; i <= row7; i++) {
  let star = "";
  // console.log(i);
  for (let j = 1; j <= i; j++) {
    // console.log(j);
    // star += j % 2;
    star = star + (i % 2 === 1 ? j % 2 : (j + 1) % 2);
  }
  console.log(star);
}
```
