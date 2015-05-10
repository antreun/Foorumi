FoorumApp.controller('UsersController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
    $scope.register = function () {
        Api.register({username: $scope.newUser.username, password: $scope.newUser.password})
                .success(function (user) {
                    console.log('Uuden käyttäjän luominen onnistui!');
                    console.log(user);
                    $location.path('/');
                })
                .error(function () {
                    console.log('Uuden käyttäjän luominen ei onnistunut.');
                    $scope.errorMessageRegister = 'Käyttäjänimi jo varattu.';
                });
    };

    $scope.login = function () {
        console.log($scope.user.username);
        console.log($scope.user.password);
        Api.login({username: $scope.user.username, password: $scope.user.password})
                .success(function (user) {
                    console.log('Kirjautuminen onnistui.');
                    $location.path('/');
                })
                .error(function () {
                    $scope.errorMessageLogin = 'Väärä käyttäjätunnus / salasana.';
                    console.log('Kirjautuminen epäonnistui.');
                });
    }

});
