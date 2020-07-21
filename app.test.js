const app = require("./app.js")

test("should return 10 when passed 1, 2, 3 and 4", () => {
    expect(app.arrSum([1, 2, 3, 4])).toBe(10);

});