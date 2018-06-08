import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
    name: 'Home Page',
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
