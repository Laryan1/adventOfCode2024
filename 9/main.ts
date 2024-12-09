function readInput() {
  const input = Deno.readTextFileSync("./input.txt");
  return input;
}

function permutValues(arr: number[], index1: number, index2: number) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function part1() {
  const input = readInput();
  const chars = input.split("");
  console.warn(chars.length);

  let id = 0;
  let blocks: (number | null)[] = [];
  for (let index = 0; index < chars.length; index++) {
    if (index % 2 === 0) {
      // Is block file
      for (let j = 0; j < Number(chars[index]); j++) {
        blocks.push(id);
      }
      id++;
    } else {
      // Free Space
      for (let j = 0; j < Number(chars[index]); j++) {
        blocks.push(null);
      }
    }
  }
  console.warn(blocks);

  let start = 0;
  let end = blocks.length - 1;
  while (start < end) {
    if (blocks[start] !== null) {
      start++;
      continue;
    }
    if (blocks[end] === null) {
      end--;
      continue;
    }
    blocks[start] = blocks[end];
    blocks[end] = null;
    start++;
    end--;
  }

  const blocksFirstFreeIndex = blocks.indexOf(null);
  blocks = blocks.slice(0, blocksFirstFreeIndex);
  //   console.warn(blocks.join("."));

  const checksum = blocks.reduce((acc, val, currIndex) => {
    if (val === null) return acc;
    return acc! + val * currIndex;
  }, 0);

  console.warn("Checksum: ", checksum);
}

function part2() {
  const input = readInput();
}

part1();

// part2();
