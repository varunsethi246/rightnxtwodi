import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';

import { ContactUs } from '../../api/webPages/contactUsMaster.js';

import './contactUs.html';

Template.contactUs.helpers({
	getCityName(){
		var currentCity = FlowRouter.getParam('city');
		return currentCity;		
	}
});

Template.contactUs.events({
	'focusout input[name="name"]': function(event){
		if($(event.target).val() != ''){
			$('#name-error').html('Name should only contains uppercase, lowercase letters and space.');
		}
	},
	'submit #contactUsFrom': function(event){
		event.preventDefault();
		var formValues = {
			"name" 				: event.target.name.value,
			"email" 			: event.target.email.value,
			"phoneNo" 			: event.target.phoneNo.value,
			"howCanWeHelpYou" 	: event.target.howCanWeHelpYou.value,
			"message" 			: event.target.message.value,
		};

		Meteor.call('insertContactUs', formValues,
			function(error,result){
				if(error){
					Bert.alert('Error occurs in submitting message.', 'danger', 'growl-top-right' );
					return;
				}else{
					var toEmail = 'rightnxt123@gmail.com';
					var fromEmail = formValues.email;
					var subj = formValues.howCanWeHelpYou;
					var msg = '<div class="msgMar">' + formValues.name + ' has contacted for the query ' + formValues.howCanWeHelpYou + '.</div><br><div><h4>Conatct details:</h4><span class="msgSpan"><b>Name - </b>' + formValues.name + '</span><br><span class="msgSpan"><b>Email - </b>' + formValues.email + '</span><br><span class="msgSpan"><b>Mobile - </b>' + formValues.phoneNo + '</span><br><span class="msgSpan"><b>Message - </b>' +formValues.message+ '</span></div>'
					Meteor.call('sendEmailRightNxt', toEmail, fromEmail, subj, msg,function(error,result){
						if(error){
							Bert.alert(error.reason, 'danger', 'growl-top-right' );
							return;
						}else{
							// Bert.alert('Thanks for writing to us, we will contact you shortly.','success','growl-top-right');
						}
					});
					Bert.alert('Thanks for writing to us, we will contact you shortly.', 'success', 'growl-top-right' );	
					event.target.name.value				= '';
					event.target.email.value			= '';
					event.target.phoneNo.value			= '';
					event.target.howCanWeHelpYou.value	= '--select--';
					event.target.message.value			= '';
					return;
				}
			}
		);
	},

});

Template.contactUs.onRendered(function(){
	$('html, body').scrollTop(0);
	
	$.validator.addMethod("regx10", function(value, element, regexpr) {          
    	return regexpr.test(value);
	}, "Name should only contains uppercase, lowercase letters and space.");

	$.validator.addMethod("regx11", function(value, element, regexpr) {          
    	return regexpr.test(value);
	}, "Please enter a valid email address.");
	
	$.validator.addMethod("regx12", function(value, element, regexpr) {          
    	return regexpr.test(value);
	}, "Please enter a valid mobile number.");
	
	$("#contactUsFrom").validate({
	 	rules: {
	        name: {
	            required: true,
	            regx10: /^[A-za-z']+( [A-Za-z']+)*$/,
	        },
	        phoneNo: {
	        	// required: true,
	        	regx12: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,	
	        },
	        email: {
	        	required: true,
	        	regx11: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
	        },
    	}
	});
});
