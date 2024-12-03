import data from "../../data/courses.json";

const numItems = data.length;

describe("Number test", () => {
  // First test: Check if the number of items equals 12
  test("Number of items = 12", () => {
    expect(numItems).toBe(12);
  });

  // Second test: Check if the number of items is greater than or equal to 12
  test("Number of items is greater than or equal to 12", () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;

describe("String tests", () => {
  // Third test: Check if the title contains "JS"
  test("There is a JS in this title", () => {
    expect(dataTest).toMatch(/JS/);
  });

  // Fourth test: Check if the title contains "React"
  test("The title contains React", () => {
    expect(dataTest).toContain("React");
  });
});

const data2 = ["React Native", "React"];

// Arrays & Objects

describe("Arrays and Objects tests", () => {
  // Arrays
  test("The list of courses contains React Native and React", () => {
    expect(["React Native", "React", "MeteorJS"]).toEqual(
      expect.arrayContaining(data2)
    );
  });

  // Objects

  test("The first course to have a proterty title", () => {
    expect(data[0]).toHaveProperty("title");
  });

  test("The first course to have a proterty title and value of 31,266", () => {
    expect(data[0]).toHaveProperty("views", "31,266");
  });
});