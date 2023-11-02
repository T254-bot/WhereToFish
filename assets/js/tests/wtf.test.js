const grabUsersData = require("../scripts/wtf");

describe("getUserData", () => {
    describe("getUsername function", () => {
        test("should return value of userName variable", () => {
            expect(getUsername(userName)).toBe("fishguy124");
        })
    })
})