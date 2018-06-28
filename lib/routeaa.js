//edit business means about business
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/aboutBusiness/:businessLink', {
    name: 'About Business',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('configSettings'), 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('oneBusiness',params.businessLink),
                    Meteor.subscribe('vendorBusiness'),    
                    Meteor.subscribe('businessImgS3'),  
                    Meteor.subscribe('businessVideo'),  
                    Meteor.subscribe('businessMenu'),  
                    Meteor.subscribe('allStates'), 
                    Meteor.subscribe('allCity'),
                    Meteor.subscribe('area'),
                    Meteor.subscribe('businessReports',params.businessLink),
                    Meteor.subscribe('userProfileS3'),  
                    Meteor.subscribe('review',params.businessLink),
                    Meteor.subscribe('businessOffers',params.businessLink), 
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"aboutBusiness"} );
        aboutBusinessFunc();
    }
});


FlowRouter.route('/viewVendorNotification', {
    name: 'ViewAllNotification',
    waitOn(params) {        
        return [ 
                        Meteor.subscribe('notification'),
                        Meteor.subscribe('userfunction'),
                        Meteor.subscribe('notificationTemplate') ,
                        Meteor.subscribe('userProfileS3'), 
                        Meteor.subscribe('followUser'),  
                        Meteor.subscribe('userBusinessLikes'),
                        Meteor.subscribe('userBookmark'),
                        Meteor.subscribe('userBeenThere'),  
                        Meteor.subscribe('businessImgS3'),
                        Meteor.subscribe('vendorBusinessEnquiry'),
                        Meteor.subscribe('allSavedOffer'), 
                        Meteor.subscribe('reviewUser'),
               ];   
    }, 
    // subscriptions: function(params, queryParams) {
    //     // using Fast Render
   
    // },
    action: function() {
        // BlazeLayout.render("vendorLayout",{main:'ViewAllNotif'});
        ViewAllNotifFunc();
    }
});

FlowRouter.route('/businessLikes/:businessLink', {
    name: 'Business Likes',
    waitOn(params) {        
        return [ 
                        Meteor.subscribe('notification'), 
                        Meteor.subscribe('userfunction'),  
                        Meteor.subscribe('notificationTemplate') ,
                        Meteor.subscribe('vendorBusiness'), 
                        Meteor.subscribe('businessLikesCount'), 
                        Meteor.subscribe('businessLikes',params.businessLink), 
                        Meteor.subscribe('businessReports',params.businessLink),
                        Meteor.subscribe('userProfileS3'), 
                        Meteor.subscribe('userfunction'),  
                        Meteor.subscribe('businessImgS3'), 
                        Meteor.subscribe('userReviewS3',params.businessurl),  
                        Meteor.subscribe('oneBusiness'),
                        Meteor.subscribe('businessLikesCount'),
                        Meteor.subscribe('businessBeenThereCount'),
                        Meteor.subscribe('businessReportsCount'),
                        Meteor.subscribe('businessReviewsCount'),
                        Meteor.subscribe('businessOffersCount'),
                        Meteor.subscribe('businessEnquiryCount'),
                        Meteor.subscribe('reviewUser'),
                        Meteor.subscribe('followUser'),  
                        
                   //      // For count Only
                        Meteor.subscribe('businessReports',params.businessLink),
                        Meteor.subscribe('review',params.businessLink),
                        Meteor.subscribe('businessOffers'),params.businessLink,
                        Meteor.subscribe('vendorBusinessEnquiry'),
               ];   
    }, 
   // subscriptions: function(params, queryParams) {
        

   //   },
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"VendorGotLikes"} );
        VendorGotLikesFunc();
    }
});

FlowRouter.route('/businessBeenThere/:businessLink', {
    name: 'Business Been There',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'), 
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('oneBusiness'),
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),
                    Meteor.subscribe('reviewUser'),
                    Meteor.subscribe('followUser'),  

                    // For count Only
                    Meteor.subscribe('businessReports',params.businessLink),
                    Meteor.subscribe('review',params.businessLink),
                    Meteor.subscribe('businessOffers'),params.businessLink,
                    Meteor.subscribe('vendorBusinessEnquiry'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"VendorBeenThere"} );
        VendorBeenThereFunc();
    }
});

FlowRouter.route('/businessReports/:businessLink', {
    name: 'Business Report',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') , 
                    Meteor.subscribe('userProfileS3'),  
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('oneBusiness'),
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('vendorBusiness'),  
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),
                    Meteor.subscribe('reviewCount'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorReport"} );
        vendorReportFunc();
    }
});

FlowRouter.route('/vendorComments/:businessLink', {
    name: 'Vendor Comments',
    waitOn(params) {    
        console.log('params: ',params);    
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('businessImgS3'),
                    Meteor.subscribe('allreviews'),
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('userReviewS3',params.businessLink),
                    
                    Meteor.subscribe('vendorBusiness'),  
                    Meteor.subscribe('followUser'),
                    Meteor.subscribe('reviewUser'),
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('review',params.businessLink),
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),  
                
                       // new Subscriptions from business page
                
                    Meteor.subscribe('imageCommentLike',params.businessLink),  
                    Meteor.subscribe('area'),
                    Meteor.subscribe('imageComment',params.businessLink),  
                    Meteor.subscribe('userReviewS3'),  
                    Meteor.subscribe('businessLikes',params.businessLink),  
                    Meteor.subscribe('reviewCommentLikes',params.businessLink),
                    
                    Meteor.subscribe('bussImgLikes'),  
                    Meteor.subscribe('reviewCount'),  
                    Meteor.subscribe('followerCounts'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorComments"} );
        vendorCommentsFunc();
    }
});

FlowRouter.route('/vendorPhotos/:businessLink', {
    name: 'Vendor Photos',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'),
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('oneBusiness'),
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('reviewCount'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorPhotos"} );
        vendorPhotosFunc();
    }
});

FlowRouter.route('/businessOffers/:businessLink', {
    name: 'Vendor offers',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('companySettings'),
                    Meteor.subscribe('vendorBusiness'),
                    Meteor.subscribe('payment'), 
                    Meteor.subscribe('userProfileS3'),
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('offerImagesS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('oneBusiness'),
                    Meteor.subscribe('userfunction'), 
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorMyOffers"} );
        vendorMyOffersFunc();
    }
});

FlowRouter.route('/vendorEnquiry/:businessLink', {
    name: 'Vendor Enquiry',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'),  
                    Meteor.subscribe('enquiryImgS3'),
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('oneBusiness'), 
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorEnquiry"} );
        vendorEnquiryFunc();
    }
});

FlowRouter.route('/vendorAds/:businessLink', {
    name: 'Vendor Ads',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'),  
                    Meteor.subscribe('enquiryImgS3'),
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('oneBusiness'), 
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorAds"} );
        vendorAdsFunc();
    }
});

FlowRouter.route('/vendorbanner/:businessLink', {
    name: 'Vendor Banner',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'),  
                    Meteor.subscribe('enquiryImgS3'),
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('oneBusiness'), 
                    Meteor.subscribe('businessLikesCount'),
                    Meteor.subscribe('businessBeenThereCount'),
                    Meteor.subscribe('businessReportsCount'),
                    Meteor.subscribe('businessReviewsCount'),
                    Meteor.subscribe('businessOffersCount'),
                    Meteor.subscribe('businessEnquiryCount'),
                    Meteor.subscribe('allpayment'), 
               ];   
    },
    // subscriptions: function(params, queryParams) {

    //  },
    action: function() {
        console.log('in route');
        // BlazeLayout.render("vendorLayout", {main:"vendorbanners"} );
        vendorbannersFunc();
    }
});

FlowRouter.route('/VendorPayments', {
    name: 'Vendor Payments',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'),    
                    Meteor.subscribe('userfunction'),     
                    Meteor.subscribe('notificationTemplate') ,  
                    Meteor.subscribe('vendorBusiness'), 
                    Meteor.subscribe('payment'),     
                    Meteor.subscribe('userProfileS3'),   
                    Meteor.subscribe('businessImgS3'),   
                    Meteor.subscribe('userReviewS3',params.businessurl),      
                    Meteor.subscribe('review',params.businessLink), 
                    Meteor.subscribe('oneBusiness'),     
                    Meteor.subscribe('businessOffers'),params.businessurl,  
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorPayments"} );
        vendorPaymentsFunc();
    }
});

FlowRouter.route('/bannerInvoice/:businessLink', {
    name: 'Vendor Banner Payments',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') , 
                    Meteor.subscribe('vendorBusiness'),
                    Meteor.subscribe('payment'), 
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('review',params.businessLink),
                    Meteor.subscribe('oneBusiness'), 
                    Meteor.subscribe('businessOffers'),params.businessurl,
                    // Meteor.subscribe('Categories'), 
                    Meteor.subscribe('allbusinessBanner'), 
                    Meteor.subscribe('discounts'), 
                    Meteor.subscribe('position'), 
                    Meteor.subscribe('companySettings'),
                    Meteor.subscribe('allpayment'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorBannerInvoice"} );
        vendorBannerInvoiceFunc();
    }
});

FlowRouter.route('/adsInvoice/:businessLink', {
    name: 'Vendor Ads Payments',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'),
                    Meteor.subscribe('payment'), 
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('review',params.businessLink),
                    Meteor.subscribe('oneBusiness'), 
                    Meteor.subscribe('businessOffers'),params.businessurl,
                    // Meteor.subscribe('Categories'), 
                    Meteor.subscribe('allBusinessAds'), 
                    Meteor.subscribe('adsDiscount'), 
                    Meteor.subscribe('adsPosition'), 
                    Meteor.subscribe('allpayment'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"vendorAdsInvoice"} );
        console.log('in ads invoice');
        vendorAdsInvoiceFunc();
    }
});


FlowRouter.route('/addNewBusiness/businessInfo', {
    name: 'Vendor - Business Information',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'),  
                    Meteor.subscribe('allStates'), 
                    Meteor.subscribe('allCity'),
                    Meteor.subscribe('area'),
                    Meteor.subscribe('userProfileS3'),
                    Meteor.subscribe('userProfile'),
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userReviewS3',params.businessurl),  
                    Meteor.subscribe('review',params.businessLink),
                    Meteor.subscribe('oneBusiness'),
                    Meteor.subscribe('businessOffers'),params.businessurl,
                    Meteor.subscribe('offers'),
                    Meteor.subscribe('userfunction'), 
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"addVendorBusInfo"} );
        addVendorBusInfoFunc();
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
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') , 
                    Meteor.subscribe('vendorBusiness'),
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('businessImgS3'),
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"addvendorOpeningAndClosing"} );
        addvendorOpeningAndClosingFunc();
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
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'),  
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('userProfileS3'), 
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"addvendorAboutOwner"} );
        addvendorAboutOwnerFunc();
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
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('vendorBusiness'),  
                    Meteor.subscribe('businessImgS3'),  
                    Meteor.subscribe('businessMenu'),  
                    Meteor.subscribe('businessVideo'),
                    Meteor.subscribe('userProfileS3'), 
               ];   
    }, 
    action: function() {
        // BlazeLayout.render("vendorLayout", {main:"addvendorImagesVideos"} );
        addvendorImagesVideosFunc();
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
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('adminfunction'), 
                    Meteor.subscribe('allBusinessAds'), 
                    Meteor.subscribe('businessListSearch'),  
                    Meteor.subscribe('offersListSearch'),
                    Meteor.subscribe('businessListReview'),
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('businessEnquiryCount'),
                    Meteor.subscribe('areaListSearch'),
                    Meteor.subscribe('categoriesListSearch'),  
                    Meteor.subscribe('businessImgS3'),  
                    Meteor.subscribe('allbusinessBanner'), 
               ];   
    }, 
    action: function() {
        // console.log('fdsaa');
        // BlazeLayout.render("businessList");
        businessListFunc();
    }
});
FlowRouter.route('/search/:city/:area', {
    name: 'Business List',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('userfunction'),  
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('notification'), 
                    Meteor.subscribe('adminfunction'), 
                    Meteor.subscribe('allBusinessAds'), 
                    Meteor.subscribe('businessListSearch'),  
                    Meteor.subscribe('offersListSearch'),
                    Meteor.subscribe('businessListReview'),
                    Meteor.subscribe('userProfileS3'), 
                    Meteor.subscribe('businessEnquiryCount'),
                    Meteor.subscribe('areaListSearch'),
                    Meteor.subscribe('categoriesListSearch'),  
                    Meteor.subscribe('businessImgS3'),  
                    Meteor.subscribe('allbusinessBanner'),
               ];   
    }, 
    action: function() {
        // console.log('chbjshd');
        // BlazeLayout.render("businessList");
        businessListFunc();
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
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('userfunction'), 
                    Meteor.subscribe('notificationTemplate') ,
                    Meteor.subscribe('notification'),
                    Meteor.subscribe('adminfunction'),
                    Meteor.subscribe('allBusinessAds'),
                    Meteor.subscribe('businessListSearch'), 
                    Meteor.subscribe('offersListSearch'),
                    Meteor.subscribe('businessListReview'),
                    Meteor.subscribe('userProfileS3'),
                    Meteor.subscribe('businessEnquiryCount'),
                    Meteor.subscribe('areaListSearch'),
                    Meteor.subscribe('categoriesListSearch'), 
                    Meteor.subscribe('businessImgS3'), 
                    Meteor.subscribe('allbusinessBanner'),
               ];   
    }, 
    
    action: function() {
        console.log('hi');
        // BlazeLayout.render("businessList");
        businessListFunc();

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



