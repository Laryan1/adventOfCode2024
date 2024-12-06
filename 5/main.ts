function readInput() {
  const input = Deno.readTextFileSync("./input.txt");
  const inputSplitted = input.split("\n");
  const splitIndex = inputSplitted.findIndex((line) => line == "");
  const part1 = inputSplitted.slice(0, splitIndex);
  const part2 = inputSplitted.slice(splitIndex + 1);
  return [part1, part2];
}

function part1() {
  const [part1Strings, part2Strings] = readInput();

  const orderingRules: Record<number, number[]> = {};

  for (const ruleString of part1Strings) {
    const [pageBeforeString, pageAfterString] = ruleString.split("|");
    const pageBefore = parseInt(pageBeforeString);
    const pageAfter = parseInt(pageAfterString);

    if (orderingRules[pageBefore]) {
      orderingRules[pageBefore].push(pageAfter);
    } else {
      orderingRules[pageBefore] = [pageAfter];
    }
  }

  const validUpdates = [];

  for (const updateString of part2Strings) {
    const update = updateString.split(",").map((pageString) =>
      parseInt(pageString)
    );

    let updateValid = true;
    update.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        if (update.slice(0, index).some((page) => pageRules.includes(page))) {
          updateValid = false;
          return;
        }
      }
    });

    if (updateValid) {
      validUpdates.push(update);
    }
  }

  let middlePageSumOfValidUpdates = 0;
  for (const validUpdate of validUpdates) {
    middlePageSumOfValidUpdates +=
      validUpdate[Math.floor(validUpdate.length / 2)];
  }

  console.warn("Sum: ", middlePageSumOfValidUpdates);
}

function part2() {
  const [part1Strings, part2Strings] = readInput();

  const orderingRules: Record<number, number[]> = {};

  for (const ruleString of part1Strings) {
    const [pageBeforeString, pageAfterString] = ruleString.split("|");
    const pageBefore = parseInt(pageBeforeString);
    const pageAfter = parseInt(pageAfterString);

    if (orderingRules[pageBefore]) {
      orderingRules[pageBefore].push(pageAfter);
    } else {
      orderingRules[pageBefore] = [pageAfter];
    }
  }

  const validUpdates = [];
  const invalidUpdates = [];
  for (const updateString of part2Strings) {
    const update = updateString.split(",").map((pageString) =>
      parseInt(pageString)
    );

    let updateValid = true;
    update.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        if (update.slice(0, index).some((page) => pageRules.includes(page))) {
          updateValid = false;
          return;
        }
      }
    });

    if (updateValid) {
      validUpdates.push(update);
    } else {
      invalidUpdates.push(update);
    }
  }

  const fixedInvalidUpdates = [];

  for (let invalidUpdate of invalidUpdates) {
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });

    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });

    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });

    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });

    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });

    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });

    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });

    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });

    invalidUpdate.forEach((page, index) => {
      if (index !== 0) {
        const pageRules = orderingRules[page];
        if (!pageRules) return;

        // Fail condition
        const violatedRules = pageRules.filter((rule) =>
          invalidUpdate.slice(0, index).includes(rule)
        );

        for (const violatedRule of violatedRules) {
          const violatedRuleIndex = invalidUpdate.indexOf(violatedRule);
          invalidUpdate = invalidUpdate.slice(0, violatedRuleIndex).concat(
            invalidUpdate.slice(violatedRuleIndex + 1),
          );
          invalidUpdate = invalidUpdate.slice(0, index).concat(
            [violatedRule, ...invalidUpdate.slice(index)],
          );
        }
      }
    });
    fixedInvalidUpdates.push(invalidUpdate);
  }

  console.warn(fixedInvalidUpdates);

  let middlePageSumOfInvalidUpdates = 0;
  for (const invalidUpdate of fixedInvalidUpdates) {
    middlePageSumOfInvalidUpdates +=
      invalidUpdate[Math.floor(invalidUpdate.length / 2)];
  }

  console.warn("Sum: ", middlePageSumOfInvalidUpdates);
}

// part1();

part2();
