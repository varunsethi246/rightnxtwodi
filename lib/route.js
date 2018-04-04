import'./routegb.js';
import'./routekk.js';
import'./routeas.js';
import'./routeaa.js';
import'./routedn.js';


FlowRouter.route('/', {
    name: 'Home Page',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        // this.register('userProfile', Meteor.subscribe('userProfile'));  
        // this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        // this.register('state', Meteor.subscribe('allStates')); 
        this.register('city', Meteor.subscribe('allCity'));
        this.register('area', Meteor.subscribe('area'));
        this.register('userProfileS3OneUser', Meteor.subscribe('userProfileS3OneUser'));  
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('notification', Meteor.subscribe('notification'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
    },
    action: function() {
        BlazeLayout.render("anonymousUserLayout", {main:"homepage"} );
    }
});

FlowRouter.route('/LoginOTP', {
    name: 'Login OTP',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        // this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
    },
    action: function() {
        BlazeLayout.render("anonymousUserLayout", {main:"LoginOTP"} );
    }
});

FlowRouter.route('/:businessurl', {
    name: 'Business Page',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('imageCommentLike', Meteor.subscribe('imageCommentLike',params.businessurl));  
        this.register('area', Meteor.subscribe('area'));
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness',params.businessurl));  
        this.register('businessOffers', Meteor.subscribe('businessOffers',params.businessurl));  
        this.register('review', Meteor.subscribe('review',params.businessurl));  
        this.register('imageComment', Meteor.subscribe('imageComment',params.businessurl));  
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('userReviewS3', Meteor.subscribe('userReviewS3'));  
        this.register('offerImagesS3', Meteor.subscribe('offerImagesS3')); 
        this.register('businessOffers', Meteor.subscribe('businessOffers',params.businessurl));  
        this.register('bookmark', Meteor.subscribe('bookmark',params.businessurl));  
        this.register('beenThere', Meteor.subscribe('beenThere',params.businessurl));
        this.register('savedOffer', Meteor.subscribe('savedOffer',params.businessurl));
        this.register('allSavedOffer', Meteor.subscribe('allSavedOffer'));
        this.register('businessLikes', Meteor.subscribe('businessLikes',params.businessurl));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('businessMenu', Meteor.subscribe('businessMenu'));  
        this.register('businessVideo', Meteor.subscribe('businessVideo'));  
        this.register('review', Meteor.subscribe('review'));
        this.register('reviewCommentLikes', Meteor.subscribe('reviewCommentLikes',params.businessurl));
        this.register('businessVideo', Meteor.subscribe('businessVideo'));  
        this.register('followUser', Meteor.subscribe('followUser')); 
        this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry') );
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('allpayment', Meteor.subscribe('allpayment'));
        this.register('allreviews', Meteor.subscribe('allreviews'));
        this.register('userReviewS3', Meteor.subscribe('userReviewS3'));
        this.register('offers', Meteor.subscribe('offers'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        this.register('allStatistics', Meteor.subscribe('allStatistics'));  
        this.register('bussImgLikes', Meteor.subscribe('bussImgLikes'));  
        this.register('reviewCount', Meteor.subscribe('reviewCount'));  
        this.register('followerCounts', Meteor.subscribe('followerCounts')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
    },
    action: function() {
        BlazeLayout.render("vendorBusinessLayout");
    }
});

// FlowRouter.route('/vendorpage', {
//     name: 'vendor Page',
//     action: function() {
//         BlazeLayout.render("vendorpage");
//     }
// });

// FlowRouter.route('/vendorLoginForm', {
//     action: function() {
//         BlazeLayout.render("vendorLoginForm");
//     }
// });

// FlowRouter.route('/vendorSignUpForm', {
//     action: function() {
//         BlazeLayout.render("vendorSignUpForm");
//     }
// });
