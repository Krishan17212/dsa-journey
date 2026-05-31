// Square Pattern

function squarePatter(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// squarePatter(5);

// Right Triangle

function rightTriangle(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// rightTriangle(5);

function invertedRightTriangle(num) {
  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// invertedRightTriangle(5);

function leftTriangle(num) {
  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i - 1; j++) {
      row += " ";
    }
    for (let j = 1; j <= num - i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

leftTriangle(5);
