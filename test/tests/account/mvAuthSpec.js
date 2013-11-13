
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

    beforeEach(inject(function($httpBackend, mvAuth, $rootScope) {
        this.$httpBackend = $httpBackend;
        this.mvAuth = mvAuth;
        this.$rootScope = $rootScope;
    }));

    it('should set the currentIdentity to the returned user', function() {
      var responseUser = {a:true}
      this.$httpBackend.when('POST', '/login').respond({user:responseUser})

      this.mvAuth.authenticateUser();
      this.$httpBackend.flush();
      this.$rootScope.$apply();

      expect(this.mockIdentity.currentUser.a).to.be.true;
    });
  });
});