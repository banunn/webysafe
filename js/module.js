var app = angular.module('webysafe', ['ui.router', 'dndLists']);

 app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/profile');
  $stateProvider
  .state('profile', {
    url: '/profile',
    templateUrl: 'js/templates/pages/profile.html',
    controller: 'profileCtrl',
    activetab: 'profile'
  })

    .state('credentials', {
    url: '/credentials',
    templateUrl: 'js/templates/pages/credentials.html',
    controller: 'credCtrl',
    activetab: 'credentials'
  })

    .state('documents', {
    url: '/documents',
    templateUrl: 'js/templates/pages/documents.html',
    controller: 'docCtrl',
    activetab: 'documents',
    reload: true 
  })

    .state('family', {
    url: '/family',
    templateUrl: 'js/templates/pages/family.html',
    controller: 'famCtrl',
    activetab: 'family',
    reload: true 
  })

    .state('delegation', {
    url: '/delegation',
    templateUrl: 'js/templates/pages/delegation.html',
    controller: 'delegationCtrl',
    activetab: 'delegation'
  })

  .state('delegate', {
    url: '/delegate',
    templateUrl: 'js/templates/pages/person.html',
    controller: 'delegateCtrl',
    activetab: 'delegation',
    data : {
           cssClassnames : 'page-delegate'
    }
  })
  // configure html5 to get links working on jsfiddle
});
