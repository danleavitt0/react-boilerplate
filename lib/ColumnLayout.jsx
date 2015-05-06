var React = require('react')
var _ = require('lodash')

var ColumnLayout = React.createClass({

  getInitialState: function() {
    return {windowWidth: window.innerWidth}
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth})
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize)
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize)
  },

  render: function() {
    var cols = []
    var self = this;
    for(var i = 0; i < this.props.cols; i++){
      var colNum = "md-column md-column-"+i
      cols.push(
        <div className={colNum}>
          {self.props.children}
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