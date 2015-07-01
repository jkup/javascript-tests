describe('#map()', function(){
  
  it('should return [2, 3, 4, 5, 6]', function(){
    var numbers = [1, 2, 3, 4, 5];
    expect(numbers.map(function(number) {
      return number + 1;
    })).toEqual([2, 3, 4, 5, 6]);
  });


});
