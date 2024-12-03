function readInput() {
  const input = Deno.readTextFileSync("./input.txt");
  return input;
}

function part1() {
  const input = readInput();

  const regex = /mul\(\d{1,3},\d{1,3}\)/g;

  const matches = input.match(regex);
  if (!matches) throw new Error("No matches found");

  let addedMult = 0;

  for (const match of matches) {
    const [a, b] = match.replace("mul(", "").replace(")", "").split(",").map((
      value,
    ) => parseInt(value));

    addedMult += a * b;
  }

  console.warn("Added mul numbers: ", addedMult);
}

function part2() {
  const input = readInput();

  const inputSplittedDont = input.split("don't()");

  const correctInputs = [];

  correctInputs.push(inputSplittedDont[0]);

  for (const inputWithoutDont of inputSplittedDont.slice(1)) {
    if (inputWithoutDont.includes("do()")) {
      correctInputs.push(...inputWithoutDont.split("do()").splice(1));
    }
  }

  const regex = /mul\(\d{1,3},\d{1,3}\)/g;

  const matches = correctInputs.join("").match(regex);
  if (!matches) throw new Error("No matches found");

  let addedMult = 0;

  for (const match of matches) {
    const [a, b] = match.replace("mul(", "").replace(")", "").split(",").map((
      value,
    ) => parseInt(value));

    addedMult += a * b;
  }

  console.warn("Added mul numbers with do/don't: ", addedMult);
}

part1();

part2();
