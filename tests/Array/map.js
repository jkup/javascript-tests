var assert = require("assert")

describe('Array', function(){
  describe('#map()', function(){
    it('should return [2, 3, 4, 5, 6]', function(){
      var numbers = [1, 2, 3, 4, 5];
      assert.deepEqual([2, 3, 4, 5, 6], numbers.map(function(number) { return number + 1; }));
    })
  })
})
