var React = require('react'),
		mui = require('material-ui'),
		TextField = mui.TextField

var Input = React.createClass({

	getInitialState: function () {
    return {
      value: this.props.value || ''
    }
  },

  componentWillMount: function () {
    this.props.attachToForm(this)
  },

  componentWillUnmount: function () {
    this.props.detachFromForm(this)
  },

  setErrorText: function () {
  	this.setState({
  		errorText: 'This is a required field'
  	})
  },

  clearValue: function () {
    this.setState({
      value: ''
    })
  },
  
  setValue: function (event) {
    this.setState({
      value: event.currentTarget.value,
      errorText: null
    })
  },

	render: function () {
		return (
			<TextField 
				name={this.props.name} 
				onChange={this.setValue} 
				value={this.state.value} 
				hintText={this.props.hintText}
				multiLine={this.props.multiLine}
				errorText={this.state.errorText}
			/>
		)
	}

})

module.exports = Input