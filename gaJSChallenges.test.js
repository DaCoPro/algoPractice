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