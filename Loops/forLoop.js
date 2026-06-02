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

// leftTriangle(5);

// Pyramid

function pyramid(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// pyramid(5);

function invertedPyramid(num) {
  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// invertedPyramid(5);

function butterflyPattern(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    for (let j = 1; j <= 2 * (num - i); j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }

  for (let i = num - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    for (let j = 1; j <= 2 * (num - i); j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// butterflyPattern(5);

function alphabeticPattern(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(64 + j);
    }
    console.log(row);
  }
}

// alphabeticPattern(5);

function alphabeticPatternV2(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(64 + i);
    }
    console.log(row);
  }
}

// alphabeticPatternV2(5);

function alphabeticPatternV3(num) {
  let n = 65;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(n) + " ";
      n++;
    }
    console.log(row);
  }
}

alphabeticPatternV3(5);
