
    var Router = Backbone.Router.extend({
        routes: {
          "home": "home", 
          "create": "createEdit",
           "login":"userLogin",
           'edit':"createEdit",
           'search':"search",
           'reports':"reports",
           "":"userLogin",
           "other":"other",


        }
    });

    var router = new Router;
    router.on('route:reports', function() {
    	 $("#pageHeader").show();
    	$("#pageHeader div").removeClass("selectedView");
    	$("#reportBtn").addClass("selectedView");
        var reportView = new ReportView();
        reportView.render();
    });
    
    router.on('route:other', function() {
    	 $("#pageHeader").show();
    	$("#pageHeader div").removeClass("selectedView");
    	$("#otherBtn").addClass("selectedView");
        var otherView = new OtherUser();
        otherView.render();
    });
    
    router.on('route:home', function() {
    	$("#pageHeader").show();
    	$("#pageHeader div").removeClass("selectedView");
    	$("#homeBtn").addClass("selectedView");
        var homePage = new HomePage();
        homePage.render();
        
       // homePage.afterRender();
    });
    router.on('route:createEdit', function() {
    	 $("#pageHeader").show();
    	$("#pageHeader div").removeClass("selectedView");
    	$("#createBtn").addClass("selectedView");
        var createView = new CreateView();
        createView.render();
    });
    
    router.on('route:search', function() {
    	 $("#pageHeader").show();
    	$("#pageHeader div").removeClass("selectedView");
    	$("#searchBtn").addClass("selectedView");
        var searchView = new SearchView();
        searchView.render();
    });
    
    router.on('route:userLogin', function() {
        $("#pageHeader").hide();
		$("#loggedInUser").text("");
        var loginUserView = new LoginUser();
    	loginUserView.render();
    });