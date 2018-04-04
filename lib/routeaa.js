//edit business means about business
FlowRouter.route('/aboutBusiness/:businessLink', {
    name: 'About Business',
    subscriptions: function(params, queryParams) {
        this.register('configSettings', Meteor.subscribe('configSettings')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('oneBusiness', Meteor.subscribe('oneBusiness'));
        this.register('business', Meteor.subscribe('vendorBusiness'));    
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('businessVideo', Meteor.subscribe('businessVideo'));  
        this.register('businessMenu', Meteor.subscribe('businessMenu'));  
        this.register('state', Meteor.subscribe('allStates')); 
        this.register('city', Meteor.subscribe('allCity'));
        this.register('area', Meteor.subscribe('area'));
        // this.register('businessReports', Meteor.subscribe('businessReports',params.businessLink));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        // this.register('review', Meteor.subscribe('review',params.businessLink));
        this.register('businessOffers', Meteor.subscribe('businessOffers'),params.businessurl); 

        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));

        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));



     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"aboutBusiness"} );
    }
});


FlowRouter.route('/viewVendorNotification', {
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
    },
    action: function() {
        BlazeLayout.render("vendorLayout",{main:'ViewAllNotif'});

    }
});

FlowRouter.route('/businessLikes/:businessLink', {
    name: 'Business Likes',
   subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness')); 
        // this.register('businessLikesCount', Meteor.subscribe('businessLikesCount')); 
        // this.register('businessLikes', Meteor.subscribe('businessLikes',params.businessLink)); 
        // this.register('businessReports', Meteor.subscribe('businessReports',params.businessLink));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness'));

        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));
        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));

        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('followUser', Meteor.subscribe('followUser'));  
        
        // For count Only
        this.register('businessReports', Meteor.subscribe('businessReports',params.businessLink));
        this.register('review', Meteor.subscribe('review',params.businessLink));
        this.register('businessOffers', Meteor.subscribe('businessOffers'),params.businessLink);
        this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry'));

     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"VendorGotLikes"} );
    }
});

FlowRouter.route('/businessBeenThere/:businessLink', {
    name: 'Business Likes',
   subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness')); 
        // this.register('businessLikesCount', Meteor.subscribe('businessLikesCount')); 
        // this.register('businessLikes', Meteor.subscribe('businessLikes',params.businessLink)); 
        // this.register('businessReports', Meteor.subscribe('businessReports',params.businessLink));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness'));

        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));
        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));

        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('followUser', Meteor.subscribe('followUser'));  
        
        // For count Only
        this.register('businessReports', Meteor.subscribe('businessReports',params.businessLink));
        this.register('review', Meteor.subscribe('review',params.businessLink));
        this.register('businessOffers', Meteor.subscribe('businessOffers'),params.businessLink);
        this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry'));

     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"VendorBeenThere"} );
    }
});

FlowRouter.route('/businessReports/:businessLink', {
    name: 'Business Report',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness'));
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));

        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
        this.register('reviewCount', Meteor.subscribe('reviewCount'));  


     
     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorReport"} );
    }
});

FlowRouter.route('/vendorComments/:businessLink', {
    name: 'Vendor Comments',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessLink));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness',params.businessLink));
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('followUser', Meteor.subscribe('followUser'));
        this.register('review', Meteor.subscribe('reviewUser'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('review', Meteor.subscribe('review',params.businessLink));
   
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));
        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));  

        // new Subscriptions from business page
        this.register('imageCommentLike', Meteor.subscribe('imageCommentLike',params.businessLink));  
        this.register('area', Meteor.subscribe('area'));
        this.register('imageComment', Meteor.subscribe('imageComment',params.businessLink));  
        this.register('userReviewS3', Meteor.subscribe('userReviewS3'));  
        this.register('businessLikes', Meteor.subscribe('businessLikes',params.businessLink));  
        this.register('reviewCommentLikes', Meteor.subscribe('reviewCommentLikes',params.businessLink));
        this.register('allreviews', Meteor.subscribe('allreviews'));
        this.register('bussImgLikes', Meteor.subscribe('bussImgLikes'));  
        this.register('reviewCount', Meteor.subscribe('reviewCount'));  
        this.register('followerCounts', Meteor.subscribe('followerCounts'));  

     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorComments"} );
    }
});

FlowRouter.route('/vendorPhotos/:businessLink', {
    name: 'Vendor Photos',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness'));
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));
        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('reviewCount', Meteor.subscribe('reviewCount'));  

     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorPhotos"} );
    }
});

FlowRouter.route('/businessOffers/:businessLink', {
    name: 'Vendor offers',
    subscriptions: function(params, queryParams) {
       this.register('companySettings', Meteor.subscribe('companySettings'));
        this.register('business', Meteor.subscribe('vendorBusiness'));
        this.register('payment', Meteor.subscribe('payment')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('offerImagesS3', Meteor.subscribe('offerImagesS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness'));
        this.register('userfunction', Meteor.subscribe('userfunction')); 

        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));

        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );

       
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorMyOffers"} );
    }
});

FlowRouter.route('/vendorEnquiry/:businessLink', {
    name: 'Vendor Enquiry',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness')); 
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));

        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorEnquiry"} );
    }
});

FlowRouter.route('/vendorAds/:businessLink', {
    name: 'Vendor Ads',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness')); 
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));

        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorAds"} );
    }
});

FlowRouter.route('/vendorbanner/:businessLink', {
    name: 'Vendor Banner',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('oneBusiness', Meteor.subscribe('oneBusiness')); 
        this.register('businessLikesCount', Meteor.subscribe('businessLikesCount'));
        this.register('businessBeenThereCount', Meteor.subscribe('businessBeenThereCount'));

        this.register('businessReportsCount', Meteor.subscribe('businessReportsCount'));
        this.register('businessReviewsCount', Meteor.subscribe('businessReviewsCount'));
        this.register('businessOffersCount', Meteor.subscribe('businessOffersCount'));
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
     },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorbanners"} );
    }
});

FlowRouter.route('/VendorPayments', {
    name: 'Vendor Payments',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('payment', Meteor.subscribe('payment')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('review', Meteor.subscribe('review',params.businessLink));
        this.register('oneBusiness', Meteor.subscribe('oneBusiness')); 
        this.register('businessOffers', Meteor.subscribe('businessOffers'),params.businessurl);

    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorPayments"} );
    }
});

FlowRouter.route('/bannerInvoice/:businessLink', {
    name: 'Vendor Banner Payments',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('payment', Meteor.subscribe('payment')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('review', Meteor.subscribe('review',params.businessLink));
        this.register('oneBusiness', Meteor.subscribe('oneBusiness')); 
        this.register('businessOffers', Meteor.subscribe('businessOffers'),params.businessurl);
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        this.register('discounts', Meteor.subscribe('discounts')); 
        this.register('position', Meteor.subscribe('position')); 
        this.register('companySettings', Meteor.subscribe('companySettings'));
        
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorBannerInvoice"} );
    }
});

FlowRouter.route('/adsInvoice/:businessLink', {
    name: 'Vendor Ads Payments',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('payment', Meteor.subscribe('payment')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('review', Meteor.subscribe('review',params.businessLink));
        this.register('oneBusiness', Meteor.subscribe('oneBusiness')); 
        this.register('businessOffers', Meteor.subscribe('businessOffers'),params.businessurl);
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
        this.register('adsDiscount', Meteor.subscribe('adsDiscount')); 
        this.register('adsPosition', Meteor.subscribe('adsPosition')); 
        
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"vendorAdsInvoice"} );
    }
});


FlowRouter.route('/addNewBusiness/businessInfo', {
    name: 'Vendor - Business Information',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('state', Meteor.subscribe('allStates')); 
        this.register('city', Meteor.subscribe('allCity'));
        this.register('area', Meteor.subscribe('area'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));
        this.register('userProfile', Meteor.subscribe('userProfile'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userReviewS3', Meteor.subscribe('userReviewS3',params.businessurl));  
        this.register('review', Meteor.subscribe('review',params.businessLink));
        this.register('oneBusiness', Meteor.subscribe('oneBusiness'));
        this.register('businessOffers', Meteor.subscribe('businessOffers'),params.businessurl);
        this.register('offers', Meteor.subscribe('offers'));
        this.register('userfunction', Meteor.subscribe('userfunction'));

    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"addVendorBusInfo"} );
    }
});


// FlowRouter.route('/addNewBusiness/openingAndClosingDays', {
//     name: 'Vendor - Opening and Closing Days',
//     subscriptions: function(params, queryParams) {
//       this.register('business', Meteor.subscribe('vendorBusiness'));  
//     },
//     action: function() {
//         BlazeLayout.render("vendorLayout", {main:"addvendorOpeningAndClosing"} );
//     }
// });

FlowRouter.route('/addNewBusiness/openingAndClosingDays/:businessLink', {
    name: 'Vendor - Opening and Closing Days',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
        this.register('business', Meteor.subscribe('vendorBusiness'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"addvendorOpeningAndClosing"} );
    }
});


// FlowRouter.route('/addNewBusiness/aboutOwner', {
//     name: 'Vendor - About Owner',
//     action: function() {
//         BlazeLayout.render("vendorLayout", {main:"addvendorAboutOwner"} );
//     }
// });

FlowRouter.route('/addNewBusiness/aboutOwner/:businessLink', {
    name: 'Vendor - About Owner',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 

    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"addvendorAboutOwner"} );
        
    }
});


// FlowRouter.route('/addNewBusiness/imagesAndVideos', {
//     name: 'Vendor Images and Videos',
//     action: function() {
//         BlazeLayout.render("vendorLayout", {main:"addvendorImagesVideos"} );
//     }
// });

FlowRouter.route('/addNewBusiness/imagesAndVideos/:businessLink', {
    name: 'Vendor Images and Videos',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('businessMenu', Meteor.subscribe('businessMenu'));  
        this.register('businessVideo', Meteor.subscribe('businessVideo'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
          
          
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"addvendorImagesVideos"} );
    }
});
// FlowRouter.route('/search/:city/:area/:category/:searchText', {
//     name: 'Business List',
//     subscriptions: function(params, queryParams) {
//         this.register('userfunction', Meteor.subscribe('userfunction'));  
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
//         this.register('notification', Meteor.subscribe('notification')); 
//         this.register('adminfunction', Meteor.subscribe('adminfunction')); 
//         this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
//         this.register('businessListSearch', Meteor.subscribe('businessListSearch'));  
//         this.register('offersListSearch', Meteor.subscribe('offersListSearch'));
//         this.register('businessListReview', Meteor.subscribe('businessListReview'));
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
//         this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
//         this.register('areaListSearch', Meteor.subscribe('areaListSearch'));
//         this.register('categoriesListSearch', Meteor.subscribe('categoriesListSearch'));  
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        
//      },
//     action: function() {
//         BlazeLayout.render("businessList");
//     }
// });

FlowRouter.route('/search/:city/:area/:searchText', {
    name: 'Business List',
    subscriptions: function(params, queryParams) {
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('adminfunction', Meteor.subscribe('adminfunction')); 
        this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
        this.register('businessListSearch', Meteor.subscribe('businessListSearch'));  
        this.register('offersListSearch', Meteor.subscribe('offersListSearch'));
        this.register('businessListReview', Meteor.subscribe('businessListReview'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
        this.register('areaListSearch', Meteor.subscribe('areaListSearch'));
        this.register('categoriesListSearch', Meteor.subscribe('categoriesListSearch'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        
     },
    action: function() {
        BlazeLayout.render("businessList");
    }
});
FlowRouter.route('/search/:city/:area', {
    name: 'Business List',
    subscriptions: function(params, queryParams) {
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('adminfunction', Meteor.subscribe('adminfunction')); 
        this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
        this.register('businessListSearch', Meteor.subscribe('businessListSearch'));  
        this.register('offersListSearch', Meteor.subscribe('offersListSearch'));
        this.register('businessListReview', Meteor.subscribe('businessListReview'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
        this.register('areaListSearch', Meteor.subscribe('areaListSearch'));
        this.register('categoriesListSearch', Meteor.subscribe('categoriesListSearch'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        
     },
    action: function() {
        BlazeLayout.render("businessList");
    }
});


// FlowRouter.route('/searchMap/:city/:area/:category/:searchText/:currentMap', {
//     name: 'Business List',
//     subscriptions: function(params, queryParams) {
//         this.register('userfunction', Meteor.subscribe('userfunction'));  
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
//         this.register('notification', Meteor.subscribe('notification')); 
//         this.register('adminfunction', Meteor.subscribe('adminfunction')); 
//         this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
//         this.register('businessListSearch', Meteor.subscribe('businessListSearch'));  
//         this.register('offersListSearch', Meteor.subscribe('offersListSearch'));
//         this.register('businessListReview', Meteor.subscribe('businessListReview'));
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
//         this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
//         this.register('areaListSearch', Meteor.subscribe('areaListSearch'));
//         this.register('categoriesListSearch', Meteor.subscribe('categoriesListSearch'));  
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        
//      },
//     action: function() {
//         BlazeLayout.render("businessList");
//     }
// });

FlowRouter.route('/searchMap/:city/:area/:searchText/:currentMap', {
    name: 'Business List',
    subscriptions: function(params, queryParams) {
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('adminfunction', Meteor.subscribe('adminfunction')); 
        this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
        this.register('businessListSearch', Meteor.subscribe('businessListSearch'));  
        this.register('offersListSearch', Meteor.subscribe('offersListSearch'));
        this.register('businessListReview', Meteor.subscribe('businessListReview'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
        this.register('areaListSearch', Meteor.subscribe('areaListSearch'));
        this.register('categoriesListSearch', Meteor.subscribe('categoriesListSearch'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
    },
    action: function() {
        BlazeLayout.render("businessList");
    }
});

// FlowRouter.route('/searchMap/:city/:area/:searchText/:currentMap', {
//     name: 'Business List',
//     subscriptions: function(params, queryParams) {
//         this.register('userfunction', Meteor.subscribe('userfunction'));  
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
//         this.register('notification', Meteor.subscribe('notification')); 
//         this.register('adminfunction', Meteor.subscribe('adminfunction')); 
//         this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
//         this.register('businessListSearch', Meteor.subscribe('businessListSearch'));  
//         this.register('offersListSearch', Meteor.subscribe('offersListSearch'));
//         this.register('businessListReview', Meteor.subscribe('businessListReview'));
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
//         this.register('businessEnquiryCount', Meteor.subscribe('businessEnquiryCount'));
//         this.register('areaListSearch', Meteor.subscribe('areaListSearch'));
//         this.register('categoriesListSearch', Meteor.subscribe('categoriesListSearch'));  
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        
//      },
//     action: function() {
//         BlazeLayout.render("businessList");
//     }
// });


// FlowRouter.route('/businessList/:searchText', {
//     name: 'Business List',
//     subscriptions: function(params, queryParams) {
//         this.register('business', Meteor.subscribe('vendorBusiness'));  
//         this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
//         this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
//      },
//     action: function() {
//         BlazeLayout.render("businessList");
//     }
// });

// FlowRouter.route('/businessMapView', {
//      name: 'Business List',
//     subscriptions: function(params, queryParams) {
//         this.register('business', Meteor.subscribe('vendorBusiness'));  
//         this.register('enquiry', Meteor.subscribe('vendorBusinessEnquiry'));
//         this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
//         this.register('area', Meteor.subscribe('area'));
//         this.register('review', Meteor.subscribe('reviewUser'));
//     },
//     action: function() {
//         BlazeLayout.render("businessMapView");
//     }
// });



