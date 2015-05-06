module.exports = {

  getCreatedPostData: function(post) {
    var timestamp = Date.now();
    return {
      id: 'm_' + timestamp,
      authorName: post.authorName,
      date: new Date(timestamp),
      text: post.text
    };
  }

};