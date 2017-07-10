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

  it("three same books should cost 24€", function() {
    expect(countNbItemBasket(["tome1","tome1","tome1"])).toEqual(24);
  });

  it("3  books, 2 same+1 different should cost 22.8€", function() {
    expect(countNbItemBasket(["tome1","tome1","tome2"])).toEqual(22.8);
  });

  // it("3  books, 3 different should cost 21.6€", function() {
  //   expect(countNbItemBasket(["tome1","tome2","tome3"])).toEqual(21.6);
  // });

});
