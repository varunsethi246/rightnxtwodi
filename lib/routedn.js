FlowRouter.route('/findYourFriends',{
 name:'findYourFriends',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
 
        this.register('configSettings', Meteor.subscribe('configSettings')); 
        this.register('reviewCommLikes', Meteor.subscribe('reviewCommLikes'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl)); 
 },
 action(){
  BlazeLayout.render('userLayout', { content: 'findYourFriends'});
 }
});


FlowRouter.route('/createEmailTemplate', {
    name: 'createEmailTemplate',
    subscriptions: function(params, queryParams) {
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userfunction', Meteor.subscribe('userfunction')); 
        this.register('rolefunction', Meteor.subscribe('rolefunction'));
        this.register('notification', Meteor.subscribe('notification'));  
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'createEmailTemplate'});
    }
});

FlowRouter.route('/createEmailTemplate/:id', {
    name: 'createEmailTemplate',
    subscriptions: function(params, queryParams) {
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userfunction', Meteor.subscribe('userfunction')); 
        this.register('rolefunction', Meteor.subscribe('rolefunction'));
        this.register('notification', Meteor.subscribe('notification'));  
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'editTemplate'});
    }
});

FlowRouter.route('/userDefinedTemplate', {
    name: 'userDefinedTemplate',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userfunction', Meteor.subscribe('userfunction')); 
        this.register('rolefunction', Meteor.subscribe('rolefunction'));
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'userDefinedTemplate'});
    }
});

FlowRouter.route('/notificationConfiguration', {
    name: 'notificationConfig',
    subscriptions: function(params, queryParams) {
        this.register('userfunction', Meteor.subscribe('userfunction')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('rolefunction', Meteor.subscribe('rolefunction')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('city', Meteor.subscribe('allCity'));
    },
    action: function() {
        BlazeLayout.render("profileSettingLayout", {profileSettings:'notificationConfig'});
    }
});


FlowRouter.route('/viewTemplate', {
    name: 'viewTemplate',
    subscriptions: function(params, queryParams) {
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('notification', Meteor.subscribe('notification')); 
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'viewTemplate'});
    }
});

FlowRouter.route('/ViewAllNotification', {
    name: 'ViewAllNotification',
    subscriptions: function(params, queryParams) {
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('notification', Meteor.subscribe('notification') );
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'ViewAllNotif'});
    }
});

FlowRouter.route('/mailTemplate', {
    name: 'mailTemplate',
    subscriptions: function(params, queryParams) {
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userfunction', Meteor.subscribe('userfunction') );
        this.register('notification', Meteor.subscribe('notification')); 
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'mailTemplate'});
    }
});


FlowRouter.route('/sendMailnNotification', {
    name: 'sendMailnNotification',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry') );
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('allpayment', Meteor.subscribe('allpayment'));
        this.register('allreviews', Meteor.subscribe('allreviews'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('userfunction', Meteor.subscribe('userfunction') );
        this.register('followUser', Meteor.subscribe('followUser')); 
    },
    action: function() {
        BlazeLayout.render('sendMailnNotification');
    }
});

FlowRouter.route('/vendorDashboard', {
    name: 'vendorDashboard',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('chartBusiness', Meteor.subscribe('chartBusiness'));
        this.register('area', Meteor.subscribe('area'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('allLatLng', Meteor.subscribe('allLatLng'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));
        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorDashboard"} );
    }
});

FlowRouter.route('/discountManagement', {
    name: 'discountManagement',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('discounts', Meteor.subscribe('discounts') );
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'discountManagement'});
    }
});

FlowRouter.route('/positionManagement', {
    name: 'positionManagement',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('position', Meteor.subscribe('position') );
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'positionManagement'});
    }
});


FlowRouter.route( '/verify-email/:token', {
  name: 'verify-email',
  action( params ) {
    Accounts.verifyEmail( params.token, ( error ) =>{
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        var loggedInUser = Meteor.userId();
        if(loggedInUser){
            FlowRouter.go('/');
            Meteor.call('sendWelcomeMail',
             function(error, result){
                if(error){
                    console.log("Error is" +error.reason);
                }else{
                    Bert.alert( 'Welcome to RightNxt!!!!', 'success', 'growl-top-right' );
                }
            });           
        }
      }
    });
  }
});


