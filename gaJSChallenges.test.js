const gaJSChallenges = require("./gaJSChallenges.js");

test("Says hello.", () => {
  expect(gaJSChallenges.sayHello()).toBe("Hello");
});
