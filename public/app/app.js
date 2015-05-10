var FoorumApp = angular.module('FoorumApp', ['ngRoute']);

FoorumApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'TopicsListController',
                templateUrl: 'app/views/topics/index.html',
                resolve: {
                    userLoggedIn: function ($rootScope, Api) {
                        return Api.getUserLoggedIn().success(function (user) {
                            $rootScope.userLoggedIn = user.username ? user : null;
                        });
                    }
                }
            })
            .when('/topics/:id', {
                controller: 'ShowTopicController',
                templateUrl: 'app/views/topics/show.html', resolve: {
                    userLoggedIn: function ($rootScope, Api) {
                        return Api.getUserLoggedIn().success(function (user) {
                            $rootScope.userLoggedIn = user.username ? user : null;
                        });
                    }
                }
            })
            .when('/messages/:id', {
                controller: 'ShowMessageController',
                templateUrl: 'app/views/messages/show.html', resolve: {
                    userLoggedIn: function ($rootScope, Api) {
                        return Api.getUserLoggedIn().success(function (user) {
                            $rootScope.userLoggedIn = user.username ? user : null;
                        });
                    }
                }
            })
            .when('/login', {
                controller: 'UsersController',
                templateUrl: 'app/views/users/login.html', resolve: {
                    userLoggedIn: function ($rootScope, Api) {
                        return Api.getUserLoggedIn().success(function (user) {
                            $rootScope.userLoggedIn = user.username ? user : null;
                        });
                    }
                }
            })
            .when('/register', {
                controller: 'UsersController',
                templateUrl: 'app/views/users/register.html', resolve: {
                    userLoggedIn: function ($rootScope, Api) {
                        return Api.getUserLoggedIn().success(function (user) {
                            $rootScope.userLoggedIn = user.username ? user : null;
                        });
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
});

FoorumApp.run(function ($rootScope, $location, Api) {
    $rootScope.logOut = function () {
        Api.logout().success(function () {
            $location.path('/login');
            $rootScope.userLoggedIn = null;
        });
    }
});