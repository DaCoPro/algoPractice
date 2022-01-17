const { TestWatcher } = require("jest");
const gaJSChallenges = require("./gaJSChallenges.js");

//say hello
test("Says hello.", () => {
  expect(gaJSChallenges.sayHello()).toBe("Hello");
});

//add one
test("Adds one.", () => {
  expect(gaJSChallenges.addOne(1)).toBe(2);
});

//add two numbers
test("Adds two numbers.", () => {
  expect(gaJSChallenges.addTwoNumbers(5, 10)).toBe(15);
});
test("Returns NaN when appropriate.", () => {
  expect(gaJSChallenges.addTwoNumbers("Hello", 10)).toBe(NaN);
});

//sumNumbers
test("sumNumbers: handles two num arr", () => {
  expect(gaJSChallenges.sumNumbers([5, 10])).toBe(15);
});
test("sumNumbers: handles three num arr", () => {
  expect(gaJSChallenges.sumNumbers([5, 10, -6])).toBe(9);
});
test("sumNumbers: handles one num arr", () => {
  expect(gaJSChallenges.sumNumbers([5])).toBe(5);
});
test("sumNumbers: returns 0 if arr empty", () => {
  expect(gaJSChallenges.sumNumbers([])).toBe(0);
});

//addList
test("addList: echoes value when one input", () => {
  expect(gaJSChallenges.addList(1)).toBe(1);
});
test("addList: adds more than one input", () => {
  expect(gaJSChallenges.addList(1, 50, 1.23)).toBe(52.23);
});
test("addList: handles negative numbers", () => {
  expect(gaJSChallenges.addList(7 - 12)).toBe(-5);
});

//computeRemainder
test("computeRemainder: computes remainder of two nums", () => {
  expect(gaJSChallenges.computeRemainder(10, 2)).toBe(0);
});
test("computeRemainder: if 0 for divisor, returns infinity", () => {
  expect(gaJSChallenges.computeRemainder(4, 0)).toBe(Infinity);
});
test("computeRemainder: works with decimals", () => {
  expect(gaJSChallenges.computeRemainder(10.5, 3)).toBe(1.5);
});

//range
test("range: simple case", () => {
  expect(gaJSChallenges.range(1, 4)).toStrictEqual([1, 2, 3]);
});
test("range: handles negatives", () => {
  expect(gaJSChallenges.range(-2, 2)).toStrictEqual([-2, -1, 0, 1]);
});
test("range: returns empty array if range is 0", () => {
  expect(gaJSChallenges.range(1, 1)).toStrictEqual([]);
});
test("range: doesnt accept backward inputs", () => {
  expect(gaJSChallenges.range(5, 2)).toStrictEqual(
    "First argument must be less than second"
  );
});

//reverseUpcaseString
test("reverseUpcaseString: simple case", () => {
  expect(gaJSChallenges.reverseUpcaseString("SEI Rocks!")).toBe("!SKCOR IES");
});

//removeEnds
test("removeEnds: base case", () => {
  expect(gaJSChallenges.removeEnds("SEI Rocks!")).toBe("EI Rocks");
});
test("removeEnds: < 3 chars, returns empty string", () => {
  expect(gaJSChallenges.removeEnds("a")).toBe("");
});


//charCount
test('charCount: lower case only', () => {
  expect(gaJSChallenges.charCount('hello')).toStrictEqual({h: 1, e: 1, l: 2, o: 1 })
})
test('charCount: lower, upper, and special chars case', () => {
  expect(gaJSChallenges.charCount('Today is fantastic!')).toStrictEqual({T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1  })
})

//formatWithPadding
test('formatWithPadding: base case', () => {
  expect(gaJSChallenges.formatWithPadding(123, '0', 5)).toBe("00123")
})
test('formatWithPadding: special char', () => {
  expect(gaJSChallenges.formatWithPadding(42, '*', 10)).toBe("********42")
})
test('formatWithPadding: no padding', () => {
  expect(gaJSChallenges.formatWithPadding(1234, '*', 3)).toBe("1234")
})

