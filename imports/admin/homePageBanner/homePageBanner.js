import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './homePageBanner.html';
import '/imports/admin/commonAdmin/commonAdmin.js';


Template.homePageBanner.events({
	'change #fileInputVideo'(e, template) {
	    if (e.currentTarget.files && e.currentTarget.files[0]) {
			// var businessLink = FlowRouter.getParam('businessLink');
			// var bussData = Business.findOne({"businessLink":businessLink});
	    	if(bussData.businessVideo){
			 	Bert.alert('Only One can be upload','danger','growl-top-right');
		    }else{

		      // We upload only one file, in case
		      // multiple files were selected
		      const upload = BizVideo.insert({
		        file: e.currentTarget.files[0],
		        streams: 'dynamic',
		        chunkSize: 'dynamic'
		      }, false);

		      upload.on('start', function () {
		        template.currentUpload.set(this);
		      });

		      upload.on('end', function (error, fileObj) {
		        if (error) {
		          // alert('Error during upload: ' + error);
		           console.log('Error during upload 1: ' + error);
		           console.log('Error during upload 1: ' + error.reason);
		        } else {
		          // alert('File "' + fileObj._id + '" successfully uploaded');
		          Bert.alert('Business Video uploaded','success','growl-top-right');
		          
		          	Meteor.call("updateVendorBulkVideos", businessLink,fileObj._id,
			          function(error, result) { 
			              if(error) {
			                  console.log ('Error Message: ' +error ); 
			              }else{
								  // process.exit();
			              }
			        });
		        }
		        template.currentUpload.set(false);
		      });

		      upload.start();
		    }
	    }
	},
});



homePageBannerForm = function () {  
	console.log('infunction');
  BlazeLayout.render("adminLayout",{main: 'homePageBanner'});
}

export { homePageBannerForm }