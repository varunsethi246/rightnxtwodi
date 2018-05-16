// FlowRouter.route('/about/:city', {
//      subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('area', Meteor.subscribe('area'));
//         this.register('generalContent', Meteor.subscribe('generalContent')); 
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3'));
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  

//         // this.register('allImages', Meteor.subscribe('allImages'));  
//     },
//     action: function() {
//         BlazeLayout.render("generalLayoutWithImage", {generalcontent: "aboutUs"} );
//     }
// });

FlowRouter.route('/about', {
    subscriptions: function(params, queryParams) {
       // using Fast Render
       this.register('area', Meteor.subscribe('area'));
       this.register('generalContent', Meteor.subscribe('generalContent')); 
       this.register('userProfileS3', Meteor.subscribe('userProfileS3'));
       this.register('notification', Meteor.subscribe('notification'));
       this.register('userfunction', Meteor.subscribe('userfunction'));
       this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
       this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  

       // this.register('allImages', Meteor.subscribe('allImages'));  
   },
   action: function() {
       BlazeLayout.render("generalLayoutWithImage", {generalcontent: "aboutUs"} );
   }
});

// FlowRouter.route('/career/:city', {
//     name: 'career',
//     subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('area', Meteor.subscribe('area'));
//         this.register('generalContent', Meteor.subscribe('generalContent'));  
//         this.register('newjob', Meteor.subscribe('newjob'));
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  

//     },
//     action: function() {
//         BlazeLayout.render("generalLayoutWithImage", {generalcontent: "career"});
//     }
// });

FlowRouter.route('/career', {
    name: 'career',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('area', Meteor.subscribe('area'));
        this.register('generalContent', Meteor.subscribe('generalContent'));  
        this.register('newjob', Meteor.subscribe('newjob'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  

    },
    action: function() {
        BlazeLayout.render("generalLayoutWithImage", {generalcontent: "career"});
    }
});

FlowRouter.route('/claim/:city', {
    name: 'claim',
     subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('business', Meteor.subscribe('vendorBusiness')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );  
        this.register('state', Meteor.subscribe('allStates')); 
        this.register('city', Meteor.subscribe('allCity'));
        this.register('area', Meteor.subscribe('area'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
    },
    action: function() {
        BlazeLayout.render("claim");
    }
});

FlowRouter.route('/claim', {
    name: 'claim',
     subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('business', Meteor.subscribe('vendorBusiness')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );  
        this.register('state', Meteor.subscribe('allStates')); 
        this.register('city', Meteor.subscribe('allCity'));
        this.register('area', Meteor.subscribe('area'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
    },
    action: function() {
        BlazeLayout.render("claim");
    }
});


// FlowRouter.route('/contactUs/:city', {
//     name: 'contactUs',
//     subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('area', Meteor.subscribe('area'));
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );  
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
//     },
//     action: function() {
//         BlazeLayout.render("generalLayoutWithImage", {generalcontent: "contactUs"});
//     }
// });

FlowRouter.route('/contactUs', {
    name: 'contactUs',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );  
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
    },
    action: function() {
        BlazeLayout.render("generalLayoutWithImage", {generalcontent: "contactUs"});
    }
});

FlowRouter.route('/comingSoon', {
    name: 'coming soon',
    subscriptions: function(params, queryParams) {
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );  
    },
    action: function() {
        BlazeLayout.render("generalLayout", {generalcontent: "comingSoon"});
    }
});

// FlowRouter.route('/join-us/:id/:city', {
//     subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('area', Meteor.subscribe('area'));
//         this.register('newjob', Meteor.subscribe('newjob'));  
//         this.register('resumeS3', Meteor.subscribe('resumeS3'));
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
//         // this.register('allImages', Meteor.subscribe('allImages')); 
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );           
//     },
//     action: function() {
//         BlazeLayout.render("generalLayout", {generalcontent: "joinUs"});
//     }
// });

FlowRouter.route('/join-us/:id', {
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('newjob', Meteor.subscribe('newjob'));  
        this.register('resumeS3', Meteor.subscribe('resumeS3'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
        // this.register('allImages', Meteor.subscribe('allImages')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );           
    },
    action: function() {
        BlazeLayout.render("generalLayout", {generalcontent: "joinUs"});
    }
});

// FlowRouter.route('/code-of-conduct/:city', {
//     subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('area', Meteor.subscribe('area'));
//         this.register('generalContent', Meteor.subscribe('generalContent'));
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
//     },
//     action: function() {
//         BlazeLayout.render("generalLayout", {generalcontent: "codeOfConduct"});
//     }
// });

FlowRouter.route('/code-of-conduct', {
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('generalContent', Meteor.subscribe('generalContent'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
    },
    action: function() {
        BlazeLayout.render("generalLayout", {generalcontent: "codeOfConduct"});
    }
});

// FlowRouter.route('/privacy-policy/:city', {
//     subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('area', Meteor.subscribe('area'));
//         this.register('generalContent', Meteor.subscribe('generalContent')); 
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );           
//     },
//     action: function() {
//         BlazeLayout.render("generalLayout", {generalcontent: "privacyPolicy"});
//     }
// });

FlowRouter.route('/privacy-policy', {
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('generalContent', Meteor.subscribe('generalContent')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );           
    },
    action: function() {
        BlazeLayout.render("generalLayout", {generalcontent: "privacyPolicy"});
    }
});

// FlowRouter.route('/terms-of-service/:city', {
//     subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('area', Meteor.subscribe('area'));
//         this.register('generalContent', Meteor.subscribe('generalContent'));
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
//     },
//     action: function() {
//         BlazeLayout.render("generalLayout", {generalcontent: "termsOfService"});
//     }
// });

FlowRouter.route('/terms-of-service', {
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('generalContent', Meteor.subscribe('generalContent'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
    },
    action: function() {
        BlazeLayout.render("generalLayout", {generalcontent: "termsOfService"});
    }
});

// FlowRouter.route('/faqs/:city', {
//     subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('area', Meteor.subscribe('area'));
//         this.register('generalContent', Meteor.subscribe('generalContent')); 
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
//     },
//     action: function() {
//         BlazeLayout.render("generalLayoutWithImage", {generalcontent: "faq"});
//     }
// });

FlowRouter.route('/faqs', {
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('generalContent', Meteor.subscribe('generalContent')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
    },
    action: function() {
        BlazeLayout.render("generalLayoutWithImage", {generalcontent: "faq"});
    }
});

// FlowRouter.route('/merchant-guidelines/:city', {
//     subscriptions: function(params, queryParams) {
//         // using Fast Render
//         this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
//         this.register('area', Meteor.subscribe('area'));
//         this.register('generalContent', Meteor.subscribe('generalContent')); 
//         this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
//         this.register('notification', Meteor.subscribe('notification'));
//         this.register('userfunction', Meteor.subscribe('userfunction'));
//         this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
//     },
//     action: function() {
//         BlazeLayout.render("generalLayout", {generalcontent: "merchantGuidelines"});
//     }
// });

FlowRouter.route('/merchant-guidelines', {
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('area', Meteor.subscribe('area'));
        this.register('generalContent', Meteor.subscribe('generalContent')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
    },
    action: function() {
        BlazeLayout.render("generalLayout", {generalcontent: "merchantGuidelines"});
    }
});

FlowRouter.route('/aboutUs-form', {
    name: 'Aboutusform',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('generalContent', Meteor.subscribe('generalContent')); 
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));  
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );           
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main: "aboutUsForm"});
    }
});

FlowRouter.route('/generalcontent-form', {
    name: 'GENERALCONTENTform',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('generalContent', Meteor.subscribe('generalContent'));  
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );          
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main: "generalContentForm"});
    }
});

FlowRouter.route('/admin-FAQ-form', {
    name: 'Admin FAQ Form',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('generalContent', Meteor.subscribe('generalContent'));  
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );           
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main: "faqForm"});
    }
});

FlowRouter.route('/editPages', {
    name: 'Edit Webpages',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('generalContent', Meteor.subscribe('generalContent'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));   
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );           
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main: "editPages"});
    }
});

FlowRouter.route('/jobList', {
    name: 'Job Lists',
    subscriptions: function(params, queryParams) {
        // using Fast Render
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('newjob', Meteor.subscribe('newjob'));  
        this.register('allCity', Meteor.subscribe('allCity'));  
        this.register('city', Meteor.subscribe('allCity'));
        this.register('state', Meteor.subscribe('allStates')); 
        this.register('allStates', Meteor.subscribe('allStates'));
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('userfunction', Meteor.subscribe('userfunction'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );           
    },
    action: function() {
        BlazeLayout.render("adminLayout",{main: "jobList"});
    }
});

FlowRouter.route('/businessOffers/:businessLink/invoice/:invoiceNumber', {
    name: 'Payment Invoice',
    subscriptions: function(params, queryParams) {
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
      this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
      this.register('companySettings', Meteor.subscribe('companySettings'));
      this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
      this.register('offers', Meteor.subscribe('offers'));
      this.register('businessOffers', Meteor.subscribe('businessOffers',params.businessurl));
      this.register('payment', Meteor.subscribe('payment')); 
      this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('notification', Meteor.subscribe('notification')); 
      this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry') );
      this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
      this.register('allpayment', Meteor.subscribe('allpayment'));
      this.register('userfunction', Meteor.subscribe('userfunction')); 
      this.register('allQuickWalletDetails', Meteor.subscribe('allQuickWalletDetails')); 
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"paymentInvoice"} );
    }
});


FlowRouter.route('/payment-response', {
    name: 'Payment Success',
    subscriptions: function(params, queryParams) {
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('companySettings', Meteor.subscribe('companySettings'));
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('offers', Meteor.subscribe('offers'));
        this.register('businessOffers', Meteor.subscribe('businessOffers',params.businessurl));
        this.register('payment', Meteor.subscribe('payment')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry') );
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('allpayment', Meteor.subscribe('allpayment'));
        this.register('userfunction', Meteor.subscribe('userfunction')); 
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"paymentSuccess"} );
    }
});
FlowRouter.route('/paymentAds-response', {
    name: 'Payment Success',
    subscriptions: function(params, queryParams) {
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('companySettings', Meteor.subscribe('companySettings'));
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('offers', Meteor.subscribe('offers'));
        this.register('businessOffers', Meteor.subscribe('businessOffers',params.businessurl));
        this.register('payment', Meteor.subscribe('payment')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry') );
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('allpayment', Meteor.subscribe('allpayment'));
        this.register('userfunction', Meteor.subscribe('userfunction')); 
        this.register('allbusinessBanner', Meteor.subscribe('allbusinessBanner')); 
        this.register('position', Meteor.subscribe('position')); 
        this.register('payment', Meteor.subscribe('payment')); 
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"paymentSuccessAdsBanners"} );
    }
});


FlowRouter.route('/payment-error', {
    name: 'Payment Error',
    subscriptions: function(params, queryParams) {
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('userProfileS3', Meteor.subscribe('userProfileS3')); 
        this.register('companySettings', Meteor.subscribe('companySettings'));
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('offers', Meteor.subscribe('offers'));
        this.register('businessOffers', Meteor.subscribe('businessOffers',params.businessurl));
        this.register('payment', Meteor.subscribe('payment')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('notification', Meteor.subscribe('notification')); 
        this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry') );
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('allpayment', Meteor.subscribe('allpayment'));
        this.register('userfunction', Meteor.subscribe('userfunction')); 
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"paymentFailed"} );
    }
});


FlowRouter.route('/:businessLink/receipt/:invoiceNumber', {
    // FlowRouter.route('/receipt', {
    name: 'Receipt',
    subscriptions: function(params, queryParams) {
        this.register('userProfileS3', Meteor.subscribe('userProfileS3'));
        this.register('businessImgS3', Meteor.subscribe('businessImgS3'));  
        this.register('companySettings', Meteor.subscribe('companySettings'));
        this.register('vendorBusiness', Meteor.subscribe('vendorBusiness'));
        this.register('offers', Meteor.subscribe('offers'));
        this.register('payment', Meteor.subscribe('payment')); 
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') );
        this.register('vendorBusinessEnquiry', Meteor.subscribe('vendorBusinessEnquiry') );
        this.register('enquiryImgS3', Meteor.subscribe('enquiryImgS3'));
        this.register('allpayment', Meteor.subscribe('allpayment'));
        this.register('userfunction', Meteor.subscribe('userfunction')); 
        this.register('notification', Meteor.subscribe('notification'));
        this.register('notificationTemplate', Meteor.subscribe('notificationTemplate') ); 
    },
    action: function() {
        BlazeLayout.render("vendorLayout", {main:"receipt"} );
    }
});