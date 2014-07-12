
        	
            el: '.page',
        initialize: function () {
    			 
        		console.log('Inside Init');
			
			this.render = _.wrap(this.render, function(render) {
				this.beforeRender();
				render();						
				this.afterRender();
			});						
			
//			this.render();
		},
		
		beforeRender: function () {
			console.log("Before render");
		},
		
		afterRender: function () {
			console.log("After render");
		},
            events: {
                'click .loginBtn': 'validateUser',
                'click .resetBtn': 'resetDetails',
              },
              validateUser: function (ev) {
            	 // validateUserDetails();
            	  var userName=$("#userName").val();
            	  var password=$("#passWord").val();
                  
              },              
              resetDetails: function (ev) {
            	  $("#userName").val("");
            	  $("#passWord").val("");
              },
            render: function () {
              var that = this;
              $.get("templates/home_template.html", function(html) { 
            	//  $(this.el).html(Mustache.render(html,{}));
                  var template = _.template(html, {});
                  that.$el.append(template);
              });


            },

          