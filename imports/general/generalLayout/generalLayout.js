import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';
import { Tracker } from 'meteor/tracker';

import { GeneralContent } from '../../api/webPages/generalContentMaster.js';

import './generalLayout.html';
import './generalLayoutWithImage.html';
import './generalContentForm.html';
import './comingSoon.html';

//Meteor.subscribe('generalContent');

Template.generalContentForm.events({
	'submit .generalContentForm': function(event){
		if(event.preventDefault(),event.target.title.value&&event.target.contentBody.value){var generalContentFormValues={contentType:"generalContent",title:event.target.title.value,contentBody:event.target.contentBody.value},currentURL=FlowRouter.current().path;"/editPages"==currentURL&&(generalContentFormValues.id=Session.get("id"),Meteor.call("updateGeneralContent",generalContentFormValues,function(e,t){e?Bert.alert("Form values not updated.","danger","growl-top-right"):(Bert.alert("Data updated sucessfully.","success","growl-top-right"),$(".generalContentForm").hide(),$("html,body").scrollTop(0))})),"/generalcontent-form"==currentURL&&Meteor.call("insertGeneralContent",generalContentFormValues,function(e,t){if(!e)return Bert.alert("Data inserted sucessfully.","success","growl-top-right"),event.target.title.value="",void(event.target.contentBody.value=CKEDITOR.instances.textarea.setData(""));Bert.alert("Form values not inserted.","danger","growl-top-right")})}else Bert.alert("Please enter data in the field !!!","danger","growl-top-right");	
	}
});

Template.generalLayoutWithImage.onRendered(function(){
	$("#visible-lg").removeClass("merchantGuidelineslg"),$("#visible-md").removeClass("merchantGuidelinesmd"),$("#visible-sm").removeClass("merchantGuidelinessm"),$("#visible-xs").removeClass("merchantGuidelinesxs"),$(window).scroll(function(){$(document).scrollTop()>25?($("#visible-lg").addClass("merchantGuidelineslg"),$("#visible-md").addClass("merchantGuidelinesmd"),$("#visible-sm").addClass("merchantGuidelinessm"),$("#visible-xs").addClass("merchantGuidelinesxs")):($("#visible-lg").removeClass("merchantGuidelineslg"),$("#visible-md").removeClass("merchantGuidelinesmd"),$("#visible-sm").removeClass("merchantGuidelinessm"),$("#visible-xs").removeClass("merchantGuidelinesxs"))});
});

Template.generalContentForm.onRendered(function(){
	$('html, body').scrollTop(0);
});

Template.comingSoon.onRendered(function(){
	$('html,body').scrollTop(0);
});

// Template.generalLayout.helpers({
//    isReady: function(){
//    	console.log(FlowRouter.subsReady());
//       return FlowRouter.subsReady("myPost", function(){
//       	var data = Post.findOne();

//           return data;
//       }); 
//    },
// });
 
Template.generalLayout.helpers({
   	isReady: function(){
   		// console.log(FlowRouter.subsReady('userfunction'));
       if(FlowRouter.subsReady('userfunction')){
       		return FlowRouter.subsReady('userfunction');
       }else{
       	return false;
       }
   },
});
