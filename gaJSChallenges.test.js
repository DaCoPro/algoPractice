const gaJSChallenges = require("./gaJSChallenges.js");

//say hello
test("Says hello.", () => {
  expect(gaJSChallenges.sayHello()).toBe("Hello");
});

//add one
test('Adds one.', () => {
  expect(gaJSChallenges.addOne(1)).toBe(2);
})

//add two numbers
test('Adds two numbers.', () => {
  expect(gaJSChallenges.addTwoNumbers(5, 10)).toBe(15);
})
test('Returns NaN when appropriate.', () => {
  expect(gaJSChallenges.addTwoNumbers('Hello', 10)).toBe(NaN);
})

//sumNumbers
test('sumNumbers: handles two num arr', () => {
  expect(gaJSChallenges.sumNumbers([5, 10])).toBe(15);
})
test('sumNumbers: handles three num arr', () => {
  expect(gaJSChallenges.sumNumbers([5, 10, -6])).toBe(9);
})
test('sumNumbers: handles one num arr', () => {
  expect(gaJSChallenges.sumNumbers([5])).toBe(5);
})
test('sumNumbers: returns 0 if arr empty', () => {
  expect(gaJSChallenges.sumNumbers([])).toBe(0);
})


//addList
test('addList: echoes value when one input', () => {
  expect(gaJSChallenges.addList(1)).toBe(1);
})
test('addList: adds more than one input', () => {
  expect(gaJSChallenges.addList(1, 50, 1.23)).toBe(52.23);
})
test('addList: handles negative numbers', () => {
  expect(gaJSChallenges.addList(7. -12)).toBe(-5);
})

//computeRemainder 
test('computeRemainder: computes remainder of two nums', () => {
  expect(gaJSChallenges.computeRemainder(10, 2)).toBe(0);
})
test('computeRemainder: if 0 for divisor, returns infinity', () => {
  expect(gaJSChallenges.computeRemainder(4, 0)).toBe(Infinity);
})
test('computeRemainder: works with decimals', () => {
  expect(gaJSChallenges.computeRemainder(10.5, 3)).toBe(1.5);
})

//range
test('range: simple case', () => {
  expect(gaJSChallenges.range(1,4)).toBe([1,2,3])
})