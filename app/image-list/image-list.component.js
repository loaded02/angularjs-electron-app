'use strict';

angular.
  module('imageList').
  component('imageList', {
    templateUrl: 'image-list/image-list.template.html',
    controller: ['$http', function ImageListController($http) {
      var self = this;
      var images;
      self.searchStr = 'cats';
      self.submit = function submit() {
        self.$inject = ['$http'];
        var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + this.searchStr + '&tagmode=any&size=m&format=json&jsoncallback=JSON_CALLBACK';
        $http.jsonp(flickrAPI).success(function(data) {
            self.images = data.items;
        })
      }
    }]
  });
