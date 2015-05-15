var SocialAppDispatcher = require('../dispatcher/SocialAppDispatcher')
var SocialConstants = require('../constants/SocialConstants')

var ActionTypes = SocialConstants.ActionTypes

var PostActions = { 

	create: function(post) {
    SocialAppDispatcher.dispatch({
      actionType: ActionTypes.CREATE_POST,
      post: post
    })
  },
  remove: function(id) {
   	SocialAppDispatcher.dispatch({
    	actionType:ActionTypes.REMOVE_POST,
    	key:id
    });
  }

}

module.exports = PostActions