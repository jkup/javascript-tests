var assert = require("assert")

describe('Array', function(){
  describe('#isArray()', function(){
    it('should return true for an empty array', function(){
      assert(Array.isArray([]));
    })
  })
})

