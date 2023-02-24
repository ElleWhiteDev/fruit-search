describe("Checking search function", () => {
  it("Should return empty array if matching string not found in fruit list", function () {
    expect(search("zz").length).toEqual(0);
  });

  it("Should return empty list if matching string empty", function () {
    expect(search("").length).toEqual(0);
  });

  it("Should return same value regardless of letter case", function () {
    expect(search("A")).toEqual(search("a"));
  });
});


