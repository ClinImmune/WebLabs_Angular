var clinImmuneApp = angular.module('clinImmuneApp', []);

clinImmuneApp.config( function($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        }).
        when('/tools', {
            controller: 'ToolController',
            templateUrl: 'views/toolList.html',
        }).
        when('/csv', {
            controller: 'CsvController',
            templateUrl: 'views/csv.html'
        })./*
        when('/tools/:tool_name', {
            controller: 'ToolDetailContoller',
            templateUrl: 'views/toolDetail.html',
            pageKey: 'ToolList'
        }).
        when('/jobs', {
            controller: 'JobListController',
            templateUrl: 'views/jobList.html',
            pageKey: 'JobsList'
        }).
        when('/jobs/:job_id', {
            controller: 'JobDetailController',
            templateUrl: 'views/jobdetail.html',
            pageKey: 'JobsList'
        }).
        when('/blog', {
            controller: 'BlogListController',
            templateUrl: 'views/blogList.html',
            pageKey: 'BlogList'
        }).
        when('/blog/:blog_title', {
            controller: 'BlogDetailContoller',
            templateUrl: 'views/blogDetail.html',
            pageKey: 'BlogList'
        }).
        when('/docs', {
            controller: 'DocListContoller',
            templateUrl: 'docList.html',
            pageKey: 'DocList'
        }).
        when('/about', {
            controller: 'AboutControler',
            templateUrl: 'views/about.html',
            pageKey: 'AboutList'
        }).
        when('/about/:about_page', {
            controller: 'AboutPageContoller',
            templateUrl: 'views/funding.html',
            pageKey: 'AboutList'
        }).
        when('/legal', {
            controller: 'LegalController',
            templateUrl: 'views/legal.html'
        }).
        when('/developer', {
            controller: 'DeveloperController',
            templateUrl: 'views/developer.html'
        }). */
        otherwise({
            templateUrl: 'views/404.html'
        });
    
    //$locationProvider.hashPrefix("!");  
});
