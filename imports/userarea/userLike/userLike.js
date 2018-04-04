import { Template } from 'meteor/templating' ;

import { Business } from '/imports/api/businessMaster.js';
import { Likes } from '/imports/api/likesMaster.js';
import { BusinessImgUploadS3 } from '/client/businessImage.js';
import { emptyReviewTemplate } from '../../common/emptyReviewTemplate.html';
import './userLike.html'


Template.userLike.helpers({
	'checkLikeLoading': function(count){
		// var id = '';
		// var url = FlowRouter.current().path;
		// var checkIdExists = url.split('/');
		// if(checkIdExists[2] != '' && checkIdExists[2]){
		// 	id = produceURLid(checkIdExists[2]);
		// }else{
		// 	id = Meteor.userId();
		// }
		// var likesData = Likes.find({"userid":id}).count();
		if(parseInt(count) <= 0){
			return true;
		}else{
			return false;
		}

	},
	'businessName':function(){
		var id = '';
		var url = FlowRouter.current().path;
		var checkIdExists = url.split('/');
		var data = {}; 
		if(checkIdExists[2] != '' && checkIdExists[2]){
			id = produceURLid(checkIdExists[2]);
		}else{
			id = Meteor.userId();
		}
		var dataArray = [];
		var likesData = Likes.find({"userid":id}).fetch();
		if(likesData){
			
			var likedDataReturn = {
				noofLikes		: likesData.length,
				bussDataArray	: [],
			}
			
			for(i=0;i<likesData.length;i++){
			var bussdata = Business.findOne({'_id':likesData[i].businessId});
				if(bussdata){
					// console.log('bussdata ', bussdata);
					var businessName	 = bussdata.ownerFullName;
					var businessArea	 = bussdata.businessArea;
					var businessLink	 = bussdata.businessLink;
					var businessCity	 = bussdata.businessCity;
					var businessTitle	 = bussdata.businessTitle;
					var businessImages ='';

					
					if(bussdata.businessImages){
						if(bussdata.businessImages.length>0){
							var pic = BusinessImgUploadS3.findOne({"_id":bussdata.businessImages[0].img});
							if(pic){
								businessImages = pic.url();
							}else{
								businessImages = '/images/rightnxt_image_nocontent.jpg';
							}
						}else{
							businessImages = '/images/rightnxt_image_nocontent.jpg';
						}
					}else{
						businessImages = '/images/rightnxt_image_nocontent.jpg';
					}
						var reviewDateAgo = moment(likesData[i].createdAt).fromNow();

						likedDataReturn.bussDataArray.push({
							ownerFullName	: businessName,
							businessArea	: businessArea,
							businessLink	: businessLink,
							businessTitle	: businessTitle,
							businessCity	: businessCity,	
							createdAt		  : likesData[i].createdAt,
							businessImg   : businessImages,
					});
				}

			}
			return likedDataReturn;
		}
		

	},
});