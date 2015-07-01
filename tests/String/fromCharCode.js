describe('String#fromCharCode()', function(){

  it('should return [2, 3, 4, 5, 6]', function(){
    var string = String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33);

    expect(string).toEqual('Hello World!');
  });

});
