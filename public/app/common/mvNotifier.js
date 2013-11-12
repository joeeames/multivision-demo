
angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr) {
  return {
    notify: function(msg) {
      toastr.success(msg);
      console.log(msg);
    }
  }
})