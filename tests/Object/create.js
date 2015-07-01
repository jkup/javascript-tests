describe('Object#create()', function(){

  it('should return Persons name', function(){
    var Person = {
      name: 'Jon',
      age: 27
    };

    var jon = Object.create(Person);

    expect(jon.name).toEqual('Jon');
  });


});
