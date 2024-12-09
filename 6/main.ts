function readInput() {
  const input = Deno.readTextFileSync("./input.txt");
  return input;
}
enum PositionType {
  EMPTY,
  OBSTACLE,
}

interface Position {
  visited: Direction | null;
  type: PositionType;
}
type WorldMap = Position[][];

enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

interface Guard {
  x: number;
  y: number;
  direction: Direction;
}

function stepGuard(guard: Guard) {
  switch (guard.direction) {
    case Direction.NORTH:
      guard.y--;
      break;
    case Direction.EAST:
      guard.x++;
      break;
    case Direction.SOUTH:
      guard.y++;
      break;
    case Direction.WEST:
      guard.x--;
      break;
  }
}

function checkObstacleAndChangeDirection(guard: Guard, worldMap: WorldMap) {
  switch (guard.direction) {
    case Direction.NORTH:
      if (worldMap?.[guard.y - 1]?.[guard.x]?.type === PositionType.OBSTACLE) {
        guard.direction = Direction.EAST;
      }
      break;
    case Direction.EAST:
      if (worldMap?.[guard.y]?.[guard.x + 1]?.type === PositionType.OBSTACLE) {
        guard.direction = Direction.SOUTH;
      }
      break;
    case Direction.SOUTH:
      if (worldMap?.[guard.y + 1]?.[guard.x]?.type === PositionType.OBSTACLE) {
        guard.direction = Direction.WEST;
      }
      break;
    case Direction.WEST:
      if (worldMap?.[guard.y]?.[guard.x - 1]?.type === PositionType.OBSTACLE) {
        guard.direction = Direction.NORTH;
      }
      break;
  }
}

function part1() {
  //Initialisation
  const input = readInput();
  const lines = input.split("\n");

  const yMax = lines.length;
  const xMax = lines[0]?.length;

  const guard: Guard = { x: 0, y: 0, direction: Direction.NORTH };
  const worldMap: WorldMap = [];

  for (let y = 0; y < yMax; y++) {
    worldMap[y] = [];

    const line = lines[y];
    for (let x = 0; x < xMax; x++) {
      worldMap[y][x] = {
        type: line[x] === "#" ? PositionType.OBSTACLE : PositionType.EMPTY,
        visited: null,
      };

      if (line[x] === "^") {
        guard.y = y;
        guard.x = x;
      }
    }
  }

  //Loop
  while (guard.y >= 0 && guard.y < yMax && guard.x >= 0 && guard.x < xMax) {
    worldMap[guard.y][guard.x].visited = guard.direction;

    checkObstacleAndChangeDirection(guard, worldMap);

    stepGuard(guard);
  }

  const visitedPositionsCount = worldMap.reduce((acc, line) => {
    return acc + line.filter((position) => position.visited).length;
  }, 0);

  console.warn("Visited positions: ", visitedPositionsCount);
}

function checkLooped(guard: Guard, worldMap: WorldMap) {
  if (guard.x === 0 && guard.y === 0) return true;
  return worldMap?.[guard.y]?.[guard.x]?.visited === guard.direction;
}

function part2() {
  //Initialisation
  const input = readInput();
  const lines = input.split("\n");

  const yMax = lines.length;
  const xMax = lines[0]?.length;

  const initialGuardPosition: Guard = {
    x: 0,
    y: 0,
    direction: Direction.NORTH,
  };
  const initialWorldMap: WorldMap = [];

  for (let y = 0; y < yMax; y++) {
    initialWorldMap[y] = [];

    const line = lines[y];
    for (let x = 0; x < xMax; x++) {
      initialWorldMap[y][x] = {
        type: line[x] === "#" ? PositionType.OBSTACLE : PositionType.EMPTY,
        visited: null,
      };

      if (line[x] === "^") {
        initialGuardPosition.y = y;
        initialGuardPosition.x = x;
      }
    }
  }

  const analysisGuard: Guard = JSON.parse(JSON.stringify(initialGuardPosition));
  const analysisWorldMap: WorldMap = JSON.parse(
    JSON.stringify(initialWorldMap)
  );

  //Loop
  while (
    analysisGuard.y >= 0 &&
    analysisGuard.y < yMax &&
    analysisGuard.x >= 0 &&
    analysisGuard.x < xMax
  ) {
    analysisWorldMap[analysisGuard.y][analysisGuard.x].visited =
      analysisGuard.direction;

    checkObstacleAndChangeDirection(analysisGuard, analysisWorldMap);

    stepGuard(analysisGuard);
  }

  const visitedPositions: { x: number; y: number }[] = analysisWorldMap
    .reduce((acc, line, y, matrix) => {
      return acc.concat(
        line
          .map((position, x) => ({ x: x, y: y, position: position }))
          .filter((position) => position.position.visited)
          .map((position) => ({
            x: position.x,
            y: position.y,
          }))
      );
    }, [] as { x: number; y: number }[])
    .filter(
      (position) =>
        !(
          position.x == initialGuardPosition.x &&
          position.y == initialGuardPosition.y
        )
    );

  let loopings = 0;
  let loopCount = 1;
  // console.warn(visitedPositions.length);
  // console.warn(
  //   analysisWorldMap.reduce((acc, line) => {
  //     return acc + line.filter((position) => position.visited).length;
  //   }, 0)
  // );

  for (const visitedPosition of visitedPositions) {
    console.warn("Loop #", loopCount);

    const worldMap: WorldMap = JSON.parse(JSON.stringify(initialWorldMap));
    const guard: Guard = JSON.parse(JSON.stringify(initialGuardPosition));

    worldMap[visitedPosition.y][visitedPosition.x] = {
      visited: null,
      type: PositionType.OBSTACLE,
    };

    while (guard.y >= 0 && guard.y < yMax && guard.x >= 0 && guard.x < xMax) {
      checkObstacleAndChangeDirection(guard, worldMap);

      worldMap[guard.y][guard.x].visited = guard.direction;
      stepGuard(guard);

      if (checkLooped(guard, worldMap)) {
        loopings++;
        console.warn("LOOPING");
        break;
      }
    }
    loopCount++;
  }

  console.warn("Loopings: ", loopings);
}

// part1();

part2();
