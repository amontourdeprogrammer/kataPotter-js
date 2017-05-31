describe("Potter", function() {

  it("one book should cost 8€", function() {
    expect(countBasket(["tome1"])).toEqual(8);
  });

  it("no book should cost 0€", function() {
    expect(countBasket([])).toEqual(0);
  });
});