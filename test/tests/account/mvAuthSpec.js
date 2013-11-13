
describe('mvAuth', function() {

  beforeEach(module('app'));

  describe('authenticateUser', function() {

    beforeEach(function() {
      var that = this;
      this.mockIdentity = {};
      module(function($provide) {
        $provide.value('mvIdentity', that.mockIdentity);
      });
    });

    it('should set the currentIdentity to the returned user', inject(function($httpBackend, mvAuth) {
      $httpBackend.when('POST', '/login').respond({user:{a:true}})

      mvAuth.authenticateUser();
      $httpBackend.flush();

      expect(this.mockIdentity.currentUser.a).to.be.true;
    }));
  });
});