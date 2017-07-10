describe("Potter", function() {

  it("one book should cost 8€", function() {
    expect(countNbItemBasket(["tome1"])).toEqual(8);
  });

  it("no book should cost 0€", function() {
    expect(countNbItemBasket([])).toEqual(0);
  });

  it("two different books should cost 15.20€", function() {
    expect(countNbItemBasket(["tome1","tome2"])).toEqual(15.20);
  });
  it("two same books should cost 16€", function() {
    expect(countNbItemBasket(["tome1","tome1"])).toEqual(16);
  });
});
