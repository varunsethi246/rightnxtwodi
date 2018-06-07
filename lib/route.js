import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
    name: 'Home Page',
    // waitOn(params) { 
    // if (Meteor.subscribe('userfunction').ready()) {

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
    //            console.log('in if');  
    // }else{
    //     console.log('in else');
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
    // }       
    // }, 
    action: function() {
        // console.log('loading');
        HomepageFunc();
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
