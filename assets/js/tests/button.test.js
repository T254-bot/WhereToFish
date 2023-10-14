/**
 * @jest-environment jsdom
 */

const buttonClick = require("../scripts/button");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.button.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});