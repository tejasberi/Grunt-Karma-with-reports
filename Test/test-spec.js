describe('sample unit test', function(){

  beforeEach(module('app'));

  it('should test the message', inject(function($controller) {
    var scope = {},
    ctrl = $controller('controller', {$scope:scope});
    expect(scope.message).toEqual('grunt karma');
  }));

});