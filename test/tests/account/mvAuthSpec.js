
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

    it('should set the currentIdentity to the returned user when success is true', inject(function($httpBackend, mvAuth) {
      $httpBackend.when('POST', '/login').respond({success:true,user:{a:true}})

      mvAuth.authenticateUser();
      $httpBackend.flush();

      expect(this.mockIdentity.currentUser.a).to.be.true;
    }));

    it('should NOT set the currentIdentity to the returned user when success is false', inject(function($httpBackend, mvAuth) {
      $httpBackend.when('POST', '/login').respond({success:false})

      mvAuth.authenticateUser();
      $httpBackend.flush();

      expect(this.mockIdentity.currentUser).to.be.undefined;
    }));
  });
});