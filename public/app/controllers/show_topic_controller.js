FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    // Toteuta kontrolleri tähän

    Api.getTopic($routeParams.id).success(function (data, status, headers, config) {
        $scope.topic = data;
        console.log(data);
        ;
    }).error(function (data) {
        console.log(data);
    });

    $scope.addMessage = function () {
        Api.addMessage({title: $scope.newMessage.title, content: $scope.newMessage.content}, $routeParams.id)
                .success(function (data, status, headers, config) {
                    $location.path('/messages/' + data.id)
                });

    };

});