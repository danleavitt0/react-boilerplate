var SocialAppDispatcher = require('../dispatcher/SocialAppDispatcher');
var SocialConstants = require('../constants/SocialConstants');

var ActionTypes = SocialConstants.ActionTypes

var PostActions = { 

	create: function(post) {
    SocialAppDispatcher.dispatch({
      actionType: ActionTypes.CREATE_POST,
      post: post
    });
  }

}

module.exports = PostActions