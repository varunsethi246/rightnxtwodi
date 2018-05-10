import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import './main.html';

import '../imports/admin/admin.js';
import '../imports/userarea/userarea.js';
import '../imports/common/common.js';
import '../imports/general/general.js';
import '../imports/vendor/vendor.js';
import '../imports/companysettings/companySettings.js';
import '../imports/notifications/notification.js';
import './slingshot.js';


//-----  For star rating -----------
// import '../imports/common/starRating/js/star-rating.js';
// import '../imports/common/starRating/themes/krajee-svg/theme.js';
// import '../imports/common/starRating/themes/krajee-svg/theme.css';

Meteor.startup(() => {
	global.Buffer = function() {}
	global.Buffer.isBuffer = () => false
});

$(document).on("click",function(){
	// if($('.activeDownList').hasClass('activeDownListBlock')&&!($('.activeSelC').is(":click"))){
		$('.activeDownList').hide();
		$('.activeDownListFlag').hide();
	// }
});
$(document).on('click',function(){
	$(".loginClosenew").click(function() {
	    $('.loginEmail').val('');
	    $('.loginPassword').val('');
	});
});
// $(document).on('click',function(){
// 	$(function(){
// 		// alert('hi');
// 	    $(".showreviewdiv").slice(0, 1).show(); // select the first ten
// 	    $("#loadmorediv").click(function(e){ // click event for load more
// 	        e.preventDefault();
// 	        $(".showreviewdiv:hidden").slice(0, 1).show(); // select next 10 hidden divs and show them
// 	        if($(".showreviewdiv:hidden").length == 0){ // check if any hidden divs still exist
// 	            alert("No more divs"); // alert if there are none left
// 	        }
// 	    });
// 	});
// });

Meteor.startup(function () {
  TimeSync.loggingEnabled = false;

	generateURLid =function(id){
	 var newurl = 'q=rightnxt+url&oq=user..69i57j0j69i60l2j0l2.4907j0j7&'+id+'&sourceid=chrome&ie=UTF-8';
	 return newurl;
	}

	produceURLid = function (id){
	 var newid = id.split('&');
	 return newid[2];
	}
});
