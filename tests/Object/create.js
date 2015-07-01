describe('Object#create()', function(){

  it('should return [2, 3, 4, 5, 6]', function(){
    var Person = {
      name: 'Jon',
      age: 27
    };

    var jon = Object.create(Person);

    expect(jon.name).toEqual('Jon');
  });


});
