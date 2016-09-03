'use strict';

angular.
  module('imageList').
  component('imageList', {
    templateUrl: 'image-list/image-list.template.html',
    controller: ['$http', function ($http) {
      var self = this;
      var _http = $http;
      self.searchStr = 'kittens';
      self.submit = function submit() {
        var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + self.searchStr + '&tagmode=any&size=m&format=json&jsoncallback=JSON_CALLBACK';
        _http.jsonp(flickrAPI).success(function(data) {
            self.title = data.title;
            self.modified = data.modified;
            self.images = data.items;
        })
      }
    }]
  });
