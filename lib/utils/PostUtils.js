module.exports = {

  getCreatedPostData: function(post) {
    var timestamp = Date.now();
    return {
      id: 'm_' + timestamp,
      title: post.title,
      authorName: post.authorName,
      date: new Date(timestamp),
      text: post.text
    };
  }

};