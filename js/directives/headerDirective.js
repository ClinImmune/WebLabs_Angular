clinImmuneApp.directive('ng-header', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directive/headerDirective.html'
    };    
});

clinImmuneApp.directive('logo', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/logoDirective.html'
    };
});

clinImmuneApp.directive('login', function() {
    // Create an if statement to return a login form if not logged in
    // otherwise give the user a logout and profile page link
    return {
        restrict: 'E',
        templateUrl: 'views/directive/loginDirective'
    }; 
});
