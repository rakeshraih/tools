    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
      options.url = 'http://localhost:8080/toolProject/' + options.url;
    });

//    var Users = Backbone.Collection.extend({
//      url: '/users'
//    });