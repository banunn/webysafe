app.directive('navigation', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'js/templates/navigation.html',
    scope: {
        data: '='
    },
    link: function(scope, elem, attrs) {
    }
  };
});

app.directive('webTabs', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    templateUrl: 'js/templates/directive/tabs.html',
    scope: {
        data: '=',
        current: '=?',
        selected: '=?'
    },
    link: function(scope, elem, attrs) {
      var start = 0;
      scope.selected = 0;
      if(scope.data) {
        scope.current = scope.data[start];
      }
      scope.$watch("data",function( newValue, oldValue, scope ) {
        if(angular.isDefined(newValue)) {
            scope.activeTab = scope.activeTab || newValue[start].parent || scope.data[0].parent;
            scope.current =  newValue[start] || scope.data[0];
        }
      }, true);


     scope.selectItem = function(item) {
      if(item.selected == undefined || item.selected == false) {
        scope.selected = scope.selected + 1;
        item.selected = true;
      } else {
        scope.selected = scope.selected - 1;
        item.selected = false;
      }
     }

      scope.addNewTab = function(tab) {
          var newTab = { "parent": tab, "content":  []};  
          scope.data.push(newTab)
          scope.newTab = '';
          scope.addTab = false;
      }
      
      scope.sugModal = function(name) {
          scope.itemName = name;
          scope.showModal = true;
          scope.modal = 'upload'
      }

      scope.deleteItem = function(name) {
            for (var i = scope.current.content.length - 1; i >= 0; i--) {
                 if (scope.current.content[i].name == name) { 
                     scope.current.content.splice(i, 1);
                } 
            }
      }
      
      scope.newItem = function(list, name) {
        if(!list) {list = scope.data[0]}
        scope.deleteItem(name);
        var item =  { "name": name, "modified": Date.now(), "path": "../path/to/document"};  
        list.content.push(item);
        scope.itemName = '';
        scope.showModal = false;
      }
      scope.deleteTab = function (tab) {
          for (var i = scope.data.length - 1; i >= 0; i--) {
                if (scope.data[i].parent == tab.parent) { 
                    scope.data.splice(i, 1);
                     scope.activeTab = scope.data[0].parent;
                     scope.current = scope.data[0];
                }
            }
        }


    }
  };
}]);

(function () {
    'use strict';

    app.directive('routeCssClassnames', routeCssClassnames);

    function routeCssClassnames($rootScope) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, elem, attr, ctrl) {

                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.cssClassnames) ? fromState.data.cssClassnames : null;
                    var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.cssClassnames) ? toState.data.cssClassnames : null;

                    // don't do anything if they are the same
                    if (fromClassnames != toClassnames) {
                        if (fromClassnames) {
                            elem.removeClass(fromClassnames);
                        }

                        if (toClassnames) {
                            elem.addClass(toClassnames);
                        }
                    }
                });
            }
        }
    }
}());