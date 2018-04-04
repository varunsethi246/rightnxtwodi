FlowRouter.route('/reset-password/:token', {
    name: 'resetpassword',
    subscriptions: function(params, queryParams) { 
        this.register('userfunction', Meteor.subscribe('userfunction')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    action: function() {
        BlazeLayout.render('anonymousUserLayout', { main: 'ResetPassword'});
    }
});

FlowRouter.route('/viewNotification', {
    name: 'ViewAllNotification',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('area', Meteor.subscribe('area'));
        this.register('city', Meteor.subscribe('allCity'));
        
    },
    action: function() {
        BlazeLayout.render("userLayout",{content:'ViewAllNotif'});

    }
});


FlowRouter.route('/userProfile',{
 name:'userProfile',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('configSettings', Meteor.subscribe('configSettings')); 
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));
        this.register('reviewCommLikes', Meteor.subscribe('reviewCommLikes'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));  
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
 },
 action(){
  BlazeLayout.render('userLayout', { content: 'userTimelinePage'});

  var url = FlowRouter.current().path;
  var checkIdExists = url.split('/');
  if(checkIdExists.length<2){
    Session.set("updateUserTimeline",true);
  }else{
    Session.set("updateUserTimeline",false);
  }
 }
});

FlowRouter.route('/userLike',{
 name:'userLike',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));  
        this.register('userBusinessLikes', Meteor.subscribe('userBusinessLikes'));
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));   
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));
        this.register('area', Meteor.subscribe('area'));
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
 },
 action(){
  BlazeLayout.render('userLayout', { content: 'userLike'});
 }
});

FlowRouter.route('/userLike/:userName',{
 name:'userLike',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));  
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('allBookmark', Meteor.subscribe('allBookmark'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('alluserBeenThere', Meteor.subscribe('alluserBeenThere'));  
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));
        this.register('area', Meteor.subscribe('area'));
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('allreviews', Meteor.subscribe('allreviews'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
 },
 action(){
  BlazeLayout.render('userLayout', { content: 'userLike'});
 }
});


FlowRouter.route('/userReview', {
    name:'User Review',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('reviewUser', Meteor.subscribe('reviewUser'));  
        this.register('userfunction', Meteor.subscribe('userfunction')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3'));
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('reviewCommLikes', Meteor.subscribe('reviewCommLikes'));
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userReviewPage"} );
    }
});

FlowRouter.route('/userReview/:userName', {
    name:'User Review',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('allBookmark', Meteor.subscribe('allBookmark'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('alluserBeenThere', Meteor.subscribe('alluserBeenThere'));
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl)); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('reviewCommLikes', Meteor.subscribe('reviewCommLikes'));
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userReviewPage"} );
    }
});


FlowRouter.route('/userPhotos', {
    name:'User Photos',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('business', Meteor.subscribe('vendorBusiness'));
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('userImgLikes', Meteor.subscribe('userImgLikes'));
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userPhotos"} );
    }
});
FlowRouter.route('/userPhotos/:userName', {
    name:'User Photos',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('allBookmark', Meteor.subscribe('allBookmark'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('alluserBeenThere', Meteor.subscribe('alluserBeenThere'));
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl)); 
        this.register('userImgLikes', Meteor.subscribe('userImgLikes')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userPhotos"} );
    }
});

FlowRouter.route('/userFollowers', {
    name:'User Followers',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userFollowers"} );
    }
});

FlowRouter.route('/userFollowers/:userName', {
    name:'User Followers',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('allBookmark', Meteor.subscribe('allBookmark'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('alluserBeenThere', Meteor.subscribe('alluserBeenThere'));
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl)); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userFollowers"} );
    }
});

FlowRouter.route('/userBookmarks', {
    name:'User Bookmarks',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3'));  
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userBookmarks"} );
    }
});

FlowRouter.route('/userBookmarks/:userName', {
    name:'User Bookmarks',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('allBookmark', Meteor.subscribe('allBookmark'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('alluserBeenThere', Meteor.subscribe('alluserBeenThere'));
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('allreviews', Meteor.subscribe('allreviews'));
        this.register('notification', Meteor.subscribe('notification'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl)); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 

     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userBookmarks"} );
    }
});

FlowRouter.route('/userBeenThere', {
    name:'User Been There',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userBeenThere"} );
    }
});

FlowRouter.route('/userBeenThere/:userName', {
    name:'User Been There',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('allBookmark', Meteor.subscribe('allBookmark'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('alluserBeenThere', Meteor.subscribe('alluserBeenThere'));
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  

     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userBeenThere"} );
    }
});

FlowRouter.route('/userRatings', {
    name:'User Ratings',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userRatings"} );
    }
});

FlowRouter.route('/userRatings/:userName', {
    name:'User Ratings',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('allBookmark', Meteor.subscribe('allBookmark'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('alluserBeenThere', Meteor.subscribe('alluserBeenThere'));
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userRatings"} );
    }
});

FlowRouter.route('/userOffers', {
    name:'User Offers',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('Categories', Meteor.subscribe('Categories'));
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('offers', Meteor.subscribe('offers'));
        this.register('userOffers', Meteor.subscribe('userOffers'));  
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('offerImagesS3', Meteor.subscribe('offerImagesS3'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userOffers"} );
    }
});

FlowRouter.route('/userOffers/:userName', {
    name:'User Offers',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('allBookmark', Meteor.subscribe('allBookmark'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('alluserBeenThere', Meteor.subscribe('alluserBeenThere'));
        this.register('userProfile', Meteor.subscribe('userProfile',params.userId));  
        this.register('followUser', Meteor.subscribe('followUser'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('allreviews', Meteor.subscribe('allreviews')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));     
        this.register('offerImagesS3', Meteor.subscribe('offerImagesS3'));
        this.register('offers', Meteor.subscribe('offers'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userOffers"} );
    }
});

FlowRouter.route('/userEnquiry', {
    name:'User Enquiry',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('likes', Meteor.subscribe('userBusinessLikes'));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer')); 
        this.register('userBookmark', Meteor.subscribe('userBookmark'));
        this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('userBeenThere', Meteor.subscribe('userBeenThere'));
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('business', Meteor.subscribe('vendorBusiness')); 
        this.register('notification', Meteor.subscribe('notification'));  
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl)); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    action: function() {
        BlazeLayout.render("userLayout", {content:"userEnquiryPage"} );
    }
});

FlowRouter.route('/profileSetting', {
    name:'Profile Setting',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('userProfile', Meteor.subscribe('userProfile'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
    },
    action: function() {
        BlazeLayout.render("profileSettingLayout", {profileSettings:"profileSetting"} );
    }
});

FlowRouter.route('/editProfile', {
    name:'Edit Profile',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));
        this.register('allStates', Meteor.subscribe('allStates')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        this.register('allCity', Meteor.subscribe('allCity'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
     },
    action: function() {
        BlazeLayout.render("profileSettingLayout", {profileSettings:"editProfile"} );
    }
});
/*
FlowRouter.route('/vendorBusinessDetails', {
    // subscriptions: function(params, queryParams) {
      
    //     this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
     
    //  },
    action: function() {
        BlazeLayout.render("vendorBusinessLayout");

    }
});*/

function activateSidebarLink(){
    var currentURL = FlowRouter.current().path;
    var actualURL = currentURL.substring(1);
    $('.sidebarlink').removeClass('active');
    $('.'+actualURL).addClass('active');
}


