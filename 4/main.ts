function readInput() {
  const input = Deno.readTextFileSync("./input.txt");
  return input;
}

function findMAS(
  xi: number,
  xj: number,
  matrix: string[][],
  xMax: number,
  yMax: number
) {
  let masFound = 0;
  for (let i = -1; i <= 1; i++) {
    if (xi + i < 0 || xi + i >= xMax) continue;
    for (let j = -1; j <= 1; j++) {
      if (xj + j < 0 || xj + j >= yMax) continue;
      if (!checkLetter(xi + i, xj + j, matrix, "M", xMax, yMax)) continue;
      if (!checkLetter(xi + 2 * i, xj + 2 * j, matrix, "A", xMax, yMax))
        continue;
      if (!checkLetter(xi + 3 * i, xj + 3 * j, matrix, "S", xMax, yMax))
        continue;
      masFound++;
    }
  }
  return masFound;
}

function checkLetter(
  x: number,
  y: number,
  matrix: string[][],
  letterSearched: string,
  xMax: number,
  yMax: number
) {
  if (x < 0 || x >= xMax || y < 0 || y >= yMax) return false;
  return matrix[x][y] === letterSearched;
}

function part1() {
  const input = readInput();

  const matrix = input.split("\n").map((line) => line.split(""));

  let xmasFound = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== "X") continue;
      xmasFound += findMAS(i, j, matrix, matrix.length, matrix[i].length);
    }
  }

  console.warn("Total 'XMAS' found: ", xmasFound);
}

function findX_MAS(
  xi: number,
  xj: number,
  matrix: string[][],
  xMax: number,
  yMax: number
) {
  if (xi - 1 < 0 || xi + 1 >= xMax || xj - 1 < 0 || xj + 1 >= yMax)
    return false;
  if (
    ((matrix[xi - 1][xj - 1] === "M" && matrix[xi + 1][xj + 1] === "S") ||
      (matrix[xi - 1][xj - 1] === "S" && matrix[xi + 1][xj + 1] === "M")) &&
    ((matrix[xi - 1][xj + 1] === "M" && matrix[xi + 1][xj - 1] === "S") ||
      (matrix[xi - 1][xj + 1] === "S" && matrix[xi + 1][xj - 1] === "M"))
  )
    return true;
}

function part2() {
  const input = readInput();

  const matrix = input.split("\n").map((line) => line.split(""));

  let x_MASFound = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== "A") continue;
      if (findX_MAS(i, j, matrix, matrix.length, matrix[i].length))
        x_MASFound++;
    }
  }

  console.warn('Total "X-MAS" found: ', x_MASFound);
}

part1();

part2();
