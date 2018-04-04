
FlowRouter.route('/adminDashboard', {
    name: 'general Header',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('noOfUserCount', Meteor.subscribe('noOfUserCount'));  
        this.register('noOfVendorCount', Meteor.subscribe('noOfVendorCount'));  
        this.register('noOfBusinessInactive', Meteor.subscribe('noOfBusinessInactive'));  
        this.register('noOfBusinessActive', Meteor.subscribe('noOfBusinessActive'));  
        this.register('noOfEnqWeek', Meteor.subscribe('noOfEnqWeek'));  
        this.register('noOfEnqMonth', Meteor.subscribe('noOfEnqMonth'));  
        this.register('noOfEnqYear', Meteor.subscribe('noOfEnqYear'));  
        this.register('noOfOfferWeek', Meteor.subscribe('noOfOfferWeek'));  
        this.register('noOfofferYear', Meteor.subscribe('noOfofferYear'));  
        this.register('noOfofferMonth', Meteor.subscribe('noOfofferMonth'));  
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "adminDashboard"});
    }
});

FlowRouter.route('/companySettings', {
    name: 'company settings',
    subscriptions: function(params, queryParams) {
        this.register('companySettings', Meteor.subscribe('companySettings'));    
        this.register('tempLogoImage', Meteor.subscribe('tempLogoImage'));    
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "companySettings"});
    }
});

FlowRouter.route('/joinUsForm', {
    name: 'careerJoinUsForm',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('career'));  
        this.register('newjob', Meteor.subscribe('newjob'));
        this.register('resumeS3', Meteor.subscribe('resumeS3'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "careerJoinUsForm"});
    }
});

FlowRouter.route('/addNewJob', {
    name: 'AddNewJobForm',
     subscriptions: function(params, queryParams) {
        this.register('allCity', Meteor.subscribe('allCity'));  
        this.register('city', Meteor.subscribe('allCity'));
        this.register('allStates', Meteor.subscribe('allStates'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     }, 
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "AddNewJobForm"});
    }
});
FlowRouter.route('/homePageBanner', {
    name: 'homePageBanner',
     subscriptions: function(params, queryParams) {
        // this.register('allCity', Meteor.subscribe('allCity'));  
        // this.register('city', Meteor.subscribe('allCity'));
        // this.register('allStates', Meteor.subscribe('allStates'));
        // this.register('notification', Meteor.subscribe('notification')); 
        // this.register('userfunction', Meteor.subscribe('userfunction'));  
        // this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     }, 
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "homePageBanner"});
    }
});

FlowRouter.route('/listOfUsers', {
    name: 'listOfUsers',
    subscriptions: function(params, queryParams) {
        this.register('noOfUser', Meteor.subscribe('noOfUser'));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "listofUser"});
    }
});

FlowRouter.route('/editMyProfile', {
    name: 'Edit Profile',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "editMyProfileAdmin"});
    }
});

FlowRouter.route('/BusinessBlkupload', {
    name: 'Business Blkupload',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "businessBlkup"});
    }
});

FlowRouter.route('/editRoles', {
    name: 'editRoles',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "adminAddRolesList"});
    }
});

FlowRouter.route('/businessbanners', {
    name: 'Business Banners',
    subscriptions: function(params, queryParams) {
        this.register('noOfInvoiceCount', Meteor.subscribe('noOfInvoiceCount'));  
        this.register('allpayment', Meteor.subscribe('allpayment')); 
        this.register('position', Meteor.subscribe('position') );
        this.register('area', Meteor.subscribe('area')); 
        this.register('allCity', Meteor.subscribe('allCity'));  
        this.register('allStates', Meteor.subscribe('allStates'));   
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness')); 
        this.register('companySettings', Meteor.subscribe('companySettings')); 
        this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        this.register('discounts', Meteor.subscribe('discounts')); 
        this.register('position', Meteor.subscribe('position')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],     
    action: function() {
        BlazeLayout.render('adminLayout',{main: "businessBanner"});
    }
});

FlowRouter.route('/businessbannersInvoice/:businessLink', {
    name: 'Business Banners Invoice',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));  
        this.register('allpayment', Meteor.subscribe('allpayment')); 
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness')); 
        this.register('companySettings', Meteor.subscribe('companySettings')); 
        this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        this.register('discounts', Meteor.subscribe('discounts')); 
        this.register('position', Meteor.subscribe('position')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    action: function() {
        BlazeLayout.render('adminLayout',{main: "bannerInvoice"});
    }
});

FlowRouter.route('/businessBannerList', {
    name: 'Business Banners List',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));  
        this.register('allpayment', Meteor.subscribe('allpayment')); 
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness')); 
        this.register('companySettings', Meteor.subscribe('companySettings')); 
        this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        this.register('discounts', Meteor.subscribe('discounts')); 
        this.register('position', Meteor.subscribe('position')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],     
    action: function() {
        BlazeLayout.render('adminLayout',{main: "businessBannerList"});
    }
});

FlowRouter.route('/businessAds', {
    name: 'Business Ads',
    subscriptions: function(params, queryParams) {
        this.register('noOfInvoiceCount', Meteor.subscribe('noOfInvoiceCount'));  
        this.register('allpayment', Meteor.subscribe('allpayment')); 
        this.register('area', Meteor.subscribe('area'));  
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness')); 
        this.register('companySettings', Meteor.subscribe('companySettings')); 
        this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
        this.register('adsDiscount', Meteor.subscribe('adsDiscount')); 
        this.register('adsPosition', Meteor.subscribe('adsPosition')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],     
    action: function() {
        BlazeLayout.render('adminLayout',{main: "businessAds"});
    }
});

FlowRouter.route('/businessAdsInvoice/:businessLink', {
    name: 'Business Ads Invoice',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));  
        this.register('allpayment', Meteor.subscribe('allpayment')); 
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness')); 
        this.register('companySettings', Meteor.subscribe('companySettings')); 
        this.register('allBusinessAds', Meteor.subscribe('allBusinessAds')); 
        this.register('adsDiscount', Meteor.subscribe('adsDiscount')); 
        this.register('adsPosition', Meteor.subscribe('adsPosition')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    action: function() {
        BlazeLayout.render('adminLayout',{main: "adsInvoice"});
    }
});

FlowRouter.route('/businessAdsList', {
    name: 'Business Ads List',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));  
        this.register('allpayment', Meteor.subscribe('allpayment')); 
        this.register('Categories', Meteor.subscribe('Categories')); 
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness')); 
        this.register('companySettings', Meteor.subscribe('companySettings')); 
        this.register('adsDiscount', Meteor.subscribe('adsDiscount')); 
        this.register('adsPosition', Meteor.subscribe('adsPosition')); 
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('allBusinessAds', Meteor.subscribe('allBusinessAds') );
     },
    action: function() {
        BlazeLayout.render('adminLayout',{main: "businessAdsList"});
    }
});

FlowRouter.route('/adsDiscountManagement', {
    name: 'Ads Discount Management',
    subscriptions: function(params, queryParams) {
        this.register('adsDiscount', Meteor.subscribe('adsDiscount') );
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'adsDiscountManagement'});
    }
});

FlowRouter.route('/adsPositionManagement', {
    name: 'Ads Position Management',
    subscriptions: function(params, queryParams) {
        this.register('adsPosition', Meteor.subscribe('adsPosition') );
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main:'adsPositionManagement'});
    }
});

FlowRouter.route('/manageLocations', {
    name: 'Manage Locations',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));  
        this.register('allCity', Meteor.subscribe('allCity'));  
        this.register('allStates', Meteor.subscribe('allStates'));  
        this.register('Categories', Meteor.subscribe('Categories'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],     
    action: function() {
        BlazeLayout.render('adminLayout',{main: "manageLocations"});
    }
});

FlowRouter.route('/categoriesLevels', {
    name: 'Categories Levels List',
     subscriptions: function(params, queryParams) {
        this.register('Categories', Meteor.subscribe('Categories'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],     
    action: function() {
        BlazeLayout.render('adminLayout',{main: "manageCategoriesList"});
    },
    triggersExit: [trackCatgLevelsLeft]
});

function trackCatgLevelsLeft(context){
    console.log('left catg levels page');
    Session.set('catgListLimit',10);
}

FlowRouter.route('/listOfBusiness', {
    name: 'Categories Levels List',
     subscriptions: function(params, queryParams) {
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('noOfBusiness', Meteor.subscribe('noOfBusiness'));
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "listOfBusiness"});
    }
});

FlowRouter.route('/editBusinessAdmin/:businessLink', {
    name: 'Edit Business Admin',
     subscriptions: function(params, queryParams) {
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('businessVideo', Meteor.subscribe('businessVideo'));  
        this.register('businessMenu', Meteor.subscribe('businessMenu'));  
        this.register('area', Meteor.subscribe('area'));  
        this.register('allCity', Meteor.subscribe('allCity'));  
        this.register('allStates', Meteor.subscribe('allStates'));  
        this.register('Categories', Meteor.subscribe('Categories'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('review', Meteor.subscribe('review'));
        this.register('review', Meteor.subscribe('review',params.businessLink));
     },
    action: function() {
        BlazeLayout.render('adminLayout',{main: "editBusinessAdmin"});
    }
});

FlowRouter.route('/addnewbusinessAdmin', {
    name: 'addnewbusinessAdmin',
    subscriptions: function(params, queryParams) {
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('state', Meteor.subscribe('allStates')); 
        this.register('city', Meteor.subscribe('allCity'));
        this.register('userProfile', Meteor.subscribe('userProfile'));
        this.register('area', Meteor.subscribe('area'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );

    },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render('adminLayout',{main: "myBusinessAdmin"});
    }
});

FlowRouter.route('/openingAndClosingDaysAdmin/:businessLink', {
    name: 'vendor Header',
    subscriptions: function(params, queryParams) {
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
    },
    action: function() {
        BlazeLayout.render('adminLayout',{main: "openCloseDayAdmin"});
    }
});

FlowRouter.route('/aboutOwnerAdmin/:businessLink', {
    name: 'vendor Header',
    subscriptions: function(params, queryParams) {
        this.register('business', Meteor.subscribe('vendorBusiness'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );

    },
    action: function() {
        BlazeLayout.render('adminLayout',{main: "aboutOwnerAdmin"});
    }
});

FlowRouter.route('/imagesAndVideosAdmin/:businessLink', {
    name: 'vendor Header',
    subscriptions: function(params, queryParams) {
        this.register('business', Meteor.subscribe('vendorBusiness'));  
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('businessVideo', Meteor.subscribe('businessVideo'));  
        this.register('businessMenu', Meteor.subscribe('businessMenu'));  
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
    },
    action: function() {
        BlazeLayout.render( 'adminLayout',{main: "addImagesVidAdmin"});
    }
});

FlowRouter.route('/UMdeleteUserConfirm/:userId', {
    name: 'Delete Confirm',
    subscriptions: function(params, queryParams) {
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
    },
    action: function() {
        BlazeLayout.render( 'adminLayout',{main: "UMdeleteUserConfirm"});
    }
});

FlowRouter.route('/createUser', {
    name: 'Create User',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));  
        this.register('allCity', Meteor.subscribe('allCity'));  
        this.register('allStates', Meteor.subscribe('allStates'));  
        this.register('configSettings', Meteor.subscribe('configSettings'));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    triggersEnter : [activateSidebarLink],
    action: function() {
        BlazeLayout.render( 'adminLayout',{main: "createUsers"});
    }
});

FlowRouter.route('/editUsersProfile/:userId', {
    name: 'Edit My Profile',
    subscriptions: function(params, queryParams) {
        this.register('area', Meteor.subscribe('area'));  
        this.register('allCity', Meteor.subscribe('allCity'));  
        this.register('allStates', Meteor.subscribe('allStates'));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('userData', Meteor.subscribe('userData',params.userId));  
     },
    action: function() {
        BlazeLayout.render( 'adminLayout',{main: "editMyProfiles"});
    }
});

FlowRouter.route('/contactUsList', {
    name: 'contactUsList',
    subscriptions: function(params, queryParams) {
        this.register('contactUs', Meteor.subscribe('contactUs'));  
        this.register('noOfContactUs', Meteor.subscribe('noOfContactUs'));  
        this.register('userfunction', Meteor.subscribe('userfunction'));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
     },
    action: function() {
        BlazeLayout.render('adminLayout',{main: "contactUsList"});
    }
});

FlowRouter.route('/configSettings', {
    name: 'configSettings',
    action: function() {
        BlazeLayout.render('configSettings');
    }
});

function activateSidebarLink(){
    var currentURL = FlowRouter.current().path;
    var actualURL = currentURL.substring(1);
    $('.sidebarlink').removeClass('active');
    $('.'+actualURL).addClass('active');
}