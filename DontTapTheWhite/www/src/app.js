// Don't Tap The White -
// author: Piotr Machowski
// www: http://machowski.co

angular.module('dttw', [
  //libs
  'ionic',
  'ui.router',
  //project specific includes
  'dttw.menu',
  'dttw.game',

  ])

.config(['$urlRouterProvider', function($urlRouterProvider) {
  //set default view
  $urlRouterProvider.otherwise('/menu');
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
  });
});
