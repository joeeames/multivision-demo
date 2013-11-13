describe('mvUserListCtrl', function() {
  beforeEach(module('app'));

  beforeEach(inject(function($controller) {
    this.$controller = $controller;
  }));

  describe('Constructor', function() {
    it('should set the users collection to the result of the User service query', function() {
      var mockUserSvc = sinon.stub({query: function() {}});
      var mockUsersCollection = [];
      mockUserSvc.query.returns(mockUsersCollection);
      var mockScope = {}

      this.$controller('mvUserListCtrl', {$scope: mockScope, mvUser: mockUserSvc});

      expect(mockScope.users).to.equal(mockUsersCollection);
    });
  });

});