app.controller('navCtrl', ['$scope', function($scope)  {
    $scope.items = [
        {item: 'Profile', icon: 'person'},
        {item: 'Credentials', icon: 'vpn_key'},
        {item: 'Documents', icon: 'folder'},
        {item: 'Family', icon: 'favorite'},
        {item: 'Delegation', icon: 'people'}
    ]
}]); 

app.controller('profileCtrl', ['$scope', '$http', function($scope, $http)  {
    $http.get("js/data/profile.json")
        .then(function(response) {
            //First function handles success
            $scope.profile = response.data[0];
            // console.log($scope.profile);
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
    });
}]); 

app.controller('credCtrl', ['$scope', '$http', function($scope, $http)  {
        $http.get("js/data/credentials.json")
        .then(function(response) {
            //First function handles success
            $scope.creds = response.data;
            console.log($scope.creds);
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
        });

        $scope.createItem = function(name, user, pass) {
            console.log(name, user, pass);
            var item = {"account": name, "username": user, "password": pass}
            $scope.creds.push(item)
        };

        $scope.clearSearch = function () {
            $scope.newName = "";
            $scope.newUser = "";
            $scope.newPass = "";
        };

      $scope.selectItem = function(item) {
      if(item.selected == undefined || item.selected == false) {
        $scope.selected = $scope.selected + 1;
        item.selected = true;
      } else {
        $scope.selected = $scope.selected - 1;
        item.selected = false;
      }
     }
$scope.selected = 0;
    $scope.deleteItems = function(items) {
        var deleteSelected = function(list) {
        $scope.selected = 0;
        for (var i = list.length - 1; i >= 0; i--) {
                if (list[i].selected == true) { 
                    list.splice(i, 1);
                }
            }
        }
        deleteSelected(items);
    }

        return $scope.$on('dragToReorder.reordered', function($event, reordered) {
        return console.log("Moved " + reordered.item + " from " + reordered.from + " to " + reordered.to);
    });
}]); 

app.controller('docCtrl', ['$scope', '$http', '$state', function($scope, $http, $state)  {
        $http.get("js/data/documents.json")
        .then(function(response) {
            //First function handles success
            $scope.documents =  angular.copy(response.data);
            // console.log($scope.documents);
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
    });

    $scope.newItem = function(list, name) {
        if(!list) {list = $scope.documents[0]}
        var item =  { "name": name, "modified": Date.now(), "path": "../path/to/document"};  
        list.content.push(item);
        $scope.itemName = '';
    }

    $scope.deleteItems = function(items) {
        var deleteSelected = function(list) {
        var content = list.content;
        $scope.selected = 0;
        for (var i = list.content.length - 1; i >= 0; i--) {
                if (list.content[i].selected == true) { 
                            list.content.splice(i, 1);
                }
            }
        }
        // Iterate through sub list and delete all selected items
         for (var i = 0; i < items.length; i++) {
            deleteSelected(items[i])
        }
    }
}]); 

app.controller('famCtrl', ['$scope', '$http', function($scope, $http)  {
    $http.get("js/data/family.json")
        .then(function(response) {
            //First function handles success
            $scope.family = angular.copy(response.data);
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
    });

    $scope.newItem = function(list, name) {
        if(!list) {list = $scope.family[0]}
        var item =  { "name": name, "modified": Date.now(), "path": "../path/to/document"};  
        list.content.push(item);
        $scope.itemName = '';
    }

    $scope.deleteItems = function(items) {
        var deleteSelected = function(list) {
        var content = list.content;
        $scope.selected = 0;
        for (var i = list.content.length - 1; i >= 0; i--) {
                if (list.content[i].selected == true) { 
                            list.content.splice(i, 1);
                }
            }
        }
        // Iterate through sub list and delete all selected items
         for (var i = 0; i < items.length; i++) {
            deleteSelected(items[i])
        }
    }
}]); 


app.controller('delegationCtrl', ['$scope', '$http', function($scope, $http)  {

}]); 

app.controller('delegateCtrl', ['$scope', '$http', function($scope, $http)  {
    $http.get("js/data/documents.json")
        .then(function(response) {
            //First function handles success
            $scope.documents =  angular.copy(response.data);
            // console.log($scope.documents);
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
    });

    $http.get("js/data/family.json")
        .then(function(response) {
            //First function handles success
            $scope.family = angular.copy(response.data);
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
    });

    $http.get("js/data/credentials.json")
        .then(function(response) {
            //First function handles success
            $scope.creds = response.data;
            console.log($scope.creds);
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
    });

}]); 




app.filter('spaceless',function() {
    return function(input) {
        if (input) {
            return input.replace(/\s+/g, '-');    
        }
    }
});