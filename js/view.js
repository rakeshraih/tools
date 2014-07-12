    var UserListView = Backbone.View.extend({
      el: '.holder',
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
    
    	
        var CreateView = Backbone.View.extend({
            el: '.holder',
    		render: function () {
                var that = this;
                $.get("templates/createnew_template.html", function(html) { 
              	//  $(this.el).html(Mustache.render(html,{}));
                    var template = _.template(html, {});
                    that.$el.html(template);
//                    return this;
                    that.afterRender();
                });
    		},
    		
    		beforeRender: function () {
    			validateSession();
    		},
    		
            afterRender: function() { 
            	$("#raisedDate").datepicker();
            	$("#resolvedDate").datepicker();
            }
          });
        
    	
        var SearchView = Backbone.View.extend({
            el: '.holder',
    		render: function () {
                var that = this;
                $.get("templates/search_template.html", function(html) { 
              	//  $(this.el).html(Mustache.render(html,{}));
                    var template = _.template(html, {});
                    that.$el.html(template);
//                    return this;
                    that.afterRender();
                });
    		},
    		
    		beforeRender: function () {
    			validateSession();
    		},
    		
            afterRender: function() { 
                $('#searchResultTable').dataTable( {
            		"bJQueryUI" : true,
            		"bSort": true,
            		"bPaginate": true,
            		"bAutoWidth": false,
            		"bFilter": true,
            		"iDisplayLength": 5,
            		"oLanguage": {
            		"sEmptyTable": "No messages for action",
            		"sSearch": "",
            		"sLengthMenu": '' 
            	},
            	"bInfo": true,
            	"sInfoEmpty": '',
            	"aaData": [ ],
            	"aoColumns": [ { "sTitle": "Id "}, {"sTitle":"Title" }, {"sTitle":"Status" }, {"sTitle":"Created Date" }]
            	} );
            }
          });
        
        var ReportView = Backbone.View.extend({
            el: '.holder',
    		render: function () {
                var that = this;
                $.get("templates/report_template.html", function(html) { 
              	//  $(this.el).html(Mustache.render(html,{}));
                    var template = _.template(html, {});
                    that.$el.html(template);
//                    return this;
                    that.afterRender();
                });
    		},
    		
    		beforeRender: function () {
    			validateSession();
    		},
    		
            afterRender: function() { 
            	
            }
          });
        var LoginUser = Backbone.View.extend({
            el: '.holder',
            events: {
                'click .loginBtn': 'validateUser',
                'click .resetBtn': 'resetDetails'

              },
              validateUser: function (ev) {
            	 // validateUserDetails();
            	  var userName=$("#userName").val();
            	  var password=$("#passWord").val();
            	  
            	  if(!isEmpty(userName) && !isEmpty(password)){
//            	       $.ajax({
//            	           type: 'POST',
//            	           url: window.location + "Home/InsertRecord",
//            	           data: {ID : userName, PassWord:password},
//            	           success: function(data) {
//            	            	  router.navigate("home", true);
//
//            	           },
//            	             error: function(){
//            	             alert("error");
//            	             }
//            	          });
            		  $("#loggedInUser").text(userName);
                	  router.navigate("home", true);

            	  }else{
            		  alert("No Data");
            	  }
            	  
              },              
              resetDetails: function (ev) {
            	  $("#userName").val("");
            	  $("#passWord").val("");
            	  $("#userName").focus();
              },
            render: function () {
              var that = this;
              $.get("templates/login_template.html", function(html) { 
            	//  $(this.el).html(Mustache.render(html,{}));
                  var template = _.template(html, {});
                  that.$el.html(template);
              });


            }
          });
        
        var OtherUser = Backbone.View.extend({
            el: '.holder',
            events: {},
            render: function () {
              var that = this;
//              $.get("templates/login_template.html", function(html) { 
//            	//  $(this.el).html(Mustache.render(html,{}));
//                  var template = _.template(html, {});
//                  that.$el.html(template);
//              });
              that.$el.html("");

            }
          });
        
        
        var HomePage = Backbone.View.extend({
        	
    		el: '.holder',
    		 
//    		initialize: function () {
//     
//            		console.log('Inside Init');
//    			
//    			this.render = _.wrap(this.render, function(render) {
//    				this.beforeRender();
//    				render();						
//    				this.afterRender();
//    			});						
//    			
//    		},
     
    		render: function () {
                var that = this;
                $.get("templates/home_template.html", function(html) { 
              	//  $(this.el).html(Mustache.render(html,{}));
                    var template = _.template(html, {});
                    that.$el.html(template);
//                    return this;
                    that.afterRender();
                });
    		},
    		
    		beforeRender: function () {
    			validateSession();
    		},
    		
            afterRender: function() { 
            	
                $('#tableRecentlyCreated,#tableRecentlyResolved,#tableRecentlyUpdated').dataTable( {
            		"bJQueryUI" : true,
            		"bSort": true,
            		"bPaginate": true,
            		"bAutoWidth": false,
            		"bFilter": true,
            		"iDisplayLength": 5,
            		"oLanguage": {
            		"sEmptyTable": "No messages for action",
            		"sSearch": "",
            		"sLengthMenu": '' 
            	},
            	"bInfo": true,
            	"sInfoEmpty": '',
            	"aaData": [ ],
            	"aoColumns": [ { "sTitle": "Id "}, {"sTitle":"Title" }, {"sTitle":"Status" }, {"sTitle":"Created Date" }]
            	} );	
            } 
        });