import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
    name: 'Home Page',
    triggersEnter: function (context, redirect) {
        // let itemSubscription    = Meteor.subscribe('categories');
        // // let itemTwoSubscription = Meteor.subscribe('notification');
        // // let itemThreeSubscription = Meteor.subscribe('vendorBusiness');
        // Tracker.autorun(function() {
        //     if (itemSubscription.ready()) {
        //         return [ 
        //             Meteor.subscribe('userfunction'),
        //             Meteor.subscribe('allCity'),
        //             Meteor.subscribe('area'),
        //             // Meteor.subscribe('userProfileS3OneUser'),
        //             Meteor.subscribe('categories'),
        //             Meteor.subscribe('notification'),
        //             Meteor.subscribe('notificationTemplate'),
        //             Meteor.subscribe('vendorBusiness'),
        //             Meteor.subscribe('userProfileS3'), 
        //             Meteor.subscribe('businessImgS3'), 

        //        ]; 
        //     }else{
        //         return [loadingFf()];
        //     }
        // });
        Tracker.autorun(function() {
        if (Meteor.subscribe('userfunction').ready() &&
            // Meteor.subscribe('allCity').ready() &&
            Meteor.subscribe('area').ready() &&
            Meteor.subscribe('categories').ready() &&
            Meteor.subscribe('notification').ready() &&
            Meteor.subscribe('notificationTemplate').ready() &&
            Meteor.subscribe('vendorBusiness').ready() &&
            Meteor.subscribe('userProfileS3').ready() &&
            Meteor.subscribe('businessImgS3').ready()
            ) {
            console.log('if');

                    Meteor.subscribe('userfunction');
                    // Meteor.subscribe('allCity');
                    Meteor.subscribe('area');
                    // Meteor.subscribe('userProfileS3OneUser'),
                    Meteor.subscribe('categories');
                    Meteor.subscribe('notification');
                    Meteor.subscribe('notificationTemplate');
                    Meteor.subscribe('vendorBusiness');
                    Meteor.subscribe('userProfileS3');
                    Meteor.subscribe('businessImgS3');
                    return HomepageFunc();
        }
        // else{
        //     console.log('else');
        //      loadingFf();
        // }
        });

        return loadingFf();
    },
    triggersExit: [function(){ console.log('exit');}],
    // waitOn(params) {        
    //     return [ 
    //                 Meteor.subscribe('userfunction'),
    //                 Meteor.subscribe('allCity'),
    //                 Meteor.subscribe('area'),
    //                 // Meteor.subscribe('userProfileS3OneUser'),
    //                 Meteor.subscribe('categories'),
    //                 Meteor.subscribe('notification'),
    //                 Meteor.subscribe('notificationTemplate'),
    //                 Meteor.subscribe('vendorBusiness'),
    //                 Meteor.subscribe('userProfileS3'), 
    //                 Meteor.subscribe('businessImgS3'), 

    //            ];   
    // }, 
    action: function() {
        loadingFf();
            // HomepageFunc();
        
    }
});

FlowRouter.route('/UMonetimeSignup', {
    name: 'UMonetimeSignup',
    action: function() {
        UMregisterFunc();
    }
});

FlowRouter.route('/LoginOTP', {
    name: 'Login OTP',
    waitOn(params) {        
        return [ 
                    Meteor.subscribe('userfunction'),
               ];   
    }, 
    action: function() {
        LoginOTPFunc();
    }
});


FlowRouter.route('/vendorpage', {
    name: 'vendor Page',
    action: function() {
        BlazeLayout.render("vendorpage");
    }
});

FlowRouter.route('/vendorLoginForm', {
    action: function() {
        VenderLoginFormFunc();
    }
});

FlowRouter.route('/vendorSignUpForm', {
    action: function() {
        vendorSignUpForm();
    }
});
