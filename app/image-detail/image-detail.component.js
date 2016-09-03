/**
 * Created by moritz on 02.09.16.
 */
'use strict';

angular.
    module('imageDetail').
    component('imageDetail', {
        templateUrl: 'image-detail/image-detail.template.html',
        controller: ['$http', '$location', function ($http, $location) {
            var search = $location.search();
            this.media = search.media;
            this.title = search.title;
            this.date = search.date;
            this.tags = search.tags;
        }]
});