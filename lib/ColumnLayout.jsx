var React = require('react')
var _ = require('lodash')


var numColumns = 1;


function getColumnNumber () {
  var cols
  var width = window.innerWidth

  if (width < 1000)
    cols = 1
  else if (width < 1500)
    cols = 2
  else
    cols = 3

  return { numColumns: cols }

}

var ColumnLayout = React.createClass({

  getInitialState: function() {
    return getColumnNumber()
  },

  getColumnPosts: function (columnNum) {
    var posts = _.sortByOrder(this.props.children, ['key'], [false])
    switch (this.state.numColumns) {
      case 2:
        return _.filter(posts, function(card, i){
          return i % 2 === columnNum - 1
        })
        break
      case 3:
        return _.filter(posts, function(card, i){
          return i % 3 === columnNum - 1
        })
        break
      default:
        return posts
        break
    }
  },

  handleResize: function(e) {
    this.setState(getColumnNumber())
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize)
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize)
  },

  render: function() {
    var cols = []

    for(var i = 1; i <= this.state.numColumns; i++){
      var colNum = "md-column md-column-"+i
      var posts = this.getColumnPosts(i)
      cols.push(
        <div key={i} className={colNum}>
          {posts}
        </div>
      )
    }
   
    return (
      <div className="md-grid-container">
        {cols}
      </div>
    )

  }
})

module.exports = ColumnLayout