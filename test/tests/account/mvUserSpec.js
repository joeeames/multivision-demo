
describe('userData', function() {
  var userDataSvc, mockUserResource;

  beforeEach(module('app'));

  beforeEach(inject(function(/*userData, userResource*/) {
//    mockUserResource = userResource;
//    userResource.get = sinon.stub();
//    userResource.save = sinon.stub();
//    userDataSvc = userData;
  }));

  describe('getUser', function() {

    it('should run', inject(function() {

      expect(1).toEqual(1);
    }));
  });
});