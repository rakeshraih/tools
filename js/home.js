
    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
      options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
    });

    var Users = Backbone.Collection.extend({
      url: '/users'
    });


    var UserListView = Backbone.View.extend({
      el: '.page',
      render: function () {
        var that = this;
        var users = new Users();
        users.fetch({
          success: function (users) {
            var template = _.template($('#user-list-template').html(), {users: users.models});
            that.$el.html(template);
          }
        });
      }
    });

    var userListView = new UserListView();



    var Router = Backbone.Router.extend({
        routes: {
          "": "home", 
          "new": "editUser"
        }
    });

    var router = new Router;
    router.on('route:home', function() {
      userListView.render();
    });
    
    router.on('route:editUser', function() {
        userListView.render();
      });
    Backbone.history.start();
