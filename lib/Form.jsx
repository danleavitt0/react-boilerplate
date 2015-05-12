var React = require('react'),
		_ = require('lodash')

var Form = React.createClass({

	componentWillMount: function() {
		this.model = {}
		this.inputs = {}
	},
  
  attachToForm: function (component) {
    this.inputs[component.props.name] = component
    this.model[component.props.name] = component.state.value
  },
  
  detachFromForm: function (component) {
    delete this.inputs[component.props.name]
    delete this.model[component.props.name]
  },

  updateModel: function (component) {
    Object.keys(this.inputs).forEach(function (name) {
      this.model[name] = this.inputs[name].state.value
    }.bind(this))
  },

  validate: function () {
		var clean = true;
		_.forEach(this.inputs, function(input){
			if(input.props.require)
				if(!input.state.value) {
					input.setErrorText()
					clean = false
				}
		})
		return clean
  },

  clearInputs: function () {
		_.forEach(this.inputs, function(input){
			input.clearValue()
		})
	},

	handleSubmit: function () {
		this.updateModel()
		if (this.validate())  {
			this.clearInputs()
			return this.model
		}
	},

	getChildren: function () {
		var self = this
		return React.Children.map(this.props.children, function(child) {
			return child.props.name 
				? React.cloneElement(child, { attachToForm: self.attachToForm, detachFromForm: self.detachFromForm })
				: child
		})
	},

	render: function () {
		var newChildren = this.getChildren()
		return (
			<div className="md-form">
				{newChildren}
			</div>
		)
	}

})

module.exports = Form