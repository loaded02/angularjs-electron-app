/**
 * Created by moritz on 02.09.16.
 */
'use strict';

angular.
    module('flickrSearchApp').
    config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/images', {
                    template: '<image-list></image-list>'
            }).
                when('/images/image', {
                    template: '<image-detail></image-detail>'
            }).
                otherwise('/images');
}
]);