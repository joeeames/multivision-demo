angular.module('app').value('mvNotifier', {
  notify: function(msg) {
    console.log(msg);
  }
});