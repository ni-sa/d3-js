(function () {
    "use strict";
 
    angular.module("myApp")
        .service("exampleService", ExampleService);
 
    ExampleService.$inject = ["$http", "$location"];
 
    function ExampleService($http, $location) {

        return {
            getExample: function (onSuccess, onError) {
                return $http({
                    method: "GET"
                    , url: "https://controllerdata.lacity.org/resource/3r39-vfgk.json"
                }).then(onSuccess, onError);
            }
        }

    }
})();