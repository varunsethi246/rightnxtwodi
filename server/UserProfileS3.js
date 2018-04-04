import {S3Details} from '/imports/api/s3Details.js';


var s3Data =  S3Details.findOne({});
if(s3Data)
{

  var userProfileStoreS3New = new FS.Store.S3("userProfileS3", {
    region : s3Data.region, 
    accessKeyId: s3Data.key, 
    secretAccessKey: s3Data.secret, 
    bucket: s3Data.bucket,

    
    folder: "Users",
    maxTries: 5, //optional, default 5
    
  });

  export const UserProfileStoreS3New = new FS.Collection("userProfileS3", {
    stores: [userProfileStoreS3New],
    filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
  });

  UserProfileStoreS3New.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function(fileObj) {
      return true;
    },
    download: function() {
      return true;
    }
  });


  UserProfileStoreS3New.deny({
    insert: function() {
      return false;
    },
    update: function() {
      return false;
    },
    remove: function() {
      return false;
    },
    download: function() {
      return false;
    }
  });

  if (Meteor.isServer) {

  Meteor.publish("userProfileS3", function() {
    return UserProfileStoreS3New.find({}, { limit: 0 });
  });
  Meteor.publish("userProfileS3OneUser", function() {
    var userDetails = Meteor.users.findOne({"_id":Meteor.userId()});
    if(userDetails){ return UserProfileStoreS3New.find({"_id":userDetails.profile.userProfilePic});}
  });
  }
}