FoorumApp.controller('ShowMessageController', function ($scope, $routeParams, Api) {
    // Toteuta kontrolleri tähän
    Api.getMessage($routeParams.id).success(function (data) {
        $scope.message = data;
    });

    $scope.addReply = function () {
        Api.addReply({content: $scope.reply.content}, $routeParams.id).success(function (data) {
            Api.getMessage($routeParams.id).success(function (data) {
                $scope.message = data;
            });
            $scope.reply.content = '';
        });
    };
});