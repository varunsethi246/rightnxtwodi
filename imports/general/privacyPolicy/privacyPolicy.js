import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Bert } from 'meteor/themeteorchef:bert';
import { Template } from 'meteor/templating';

import { GeneralContent } from '../../api/webPages/generalContentMaster.js';

import './privacyPolicy.html';

Template.privacyPolicy.helpers({
	privacyPolicyData(){
		var currentURL = FlowRouter.current().path;
		var actualURL = currentURL.split("/");
		var privacyPolicy = GeneralContent.findOne({"url": actualURL[1]});
		return privacyPolicy;
	},
});

Template.privacyPolicy.onRendered(function(){
	$("#visible-lg").removeClass("merchantGuidelineslg");
	$("#visible-md").removeClass("merchantGuidelinesmd");
	$("#visible-sm").removeClass("merchantGuidelinessm");
	$("#visible-xs").removeClass("merchantGuidelinesxs");
	$(window).scroll(function() {
	    if ($(document).scrollTop() > 25) {
	    	$("#visible-lg").addClass("merchantGuidelineslg");
	    	$("#visible-md").addClass("merchantGuidelinesmd");
	    	$("#visible-sm").addClass("merchantGuidelinessm");
	    	$("#visible-xs").addClass("merchantGuidelinesxs");
	    } else {
	    	$("#visible-lg").removeClass("merchantGuidelineslg");
	    	$("#visible-md").removeClass("merchantGuidelinesmd");
	    	$("#visible-sm").removeClass("merchantGuidelinessm");
	    	$("#visible-xs").removeClass("merchantGuidelinesxs");
	    }
    });
	$('html, body').scrollTop(0);
});