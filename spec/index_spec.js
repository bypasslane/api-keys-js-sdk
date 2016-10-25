var index = require("../lib/index");
var apiHelpers = require("../lib/api_key_helpers");

describe("index", function() {
  it("exports helpers from package", function() {
    expect(index).toEqual(apiHelpers);
  });

});
