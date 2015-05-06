module.exports = {

  getCreatedPostData: function(post) {
    var timestamp = Date.now();
    return {
      id: 'm_' + timestamp,
      authorName: post.authorName, // hard coded for the example
      date: new Date(timestamp),
      text: post.text
    };
  }

};