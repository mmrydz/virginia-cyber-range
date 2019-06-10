console.log("starting function");

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({'us-east-2'});

exports.handle = function(e, ctx, callback) {

    var params = {
        Item: {
           Body: "Something something",
           Poster: "T. Weeks",
           question_ID: 180,
           Timestamp: Date.now(),
           Title: "it worked!" 
        },

        TableName: 'Questions'
    };

    docClient.put(params, function(err, data) {
        if(err){
            callback(err, null);
        } else{
            callback(null, data);
        }
        
    });
}