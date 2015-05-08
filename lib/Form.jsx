var React = require('react'),
		_ = require('lodash')

var required = []

var Form = React.createClass({
	componentDidMount: function() {
		_.each(this.props.children, function(element){
			if(element.props.require)
				required.push(element)
		})
	},
	submitForm: function(e) {
		e.preventDefault()
		console.log(required)
	},
	render: function () {
		return (
			<form className="md-form" onSubmit={this.submitForm}>
				{this.props.children}
				<input type="submit" />
			</form>
		)
	}
})

module.exports = Form