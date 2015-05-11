var React = require('react')



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

	handleSubmit: function () {
		this.updateModel()
		var clean = true;
		_.forEach(this.inputs, function(input){
			var val = input.state.value
			if(input.props.require)
				if(!val) {
					input.setErrorText()
					clean = false
				}
		})
		if (clean) return this.model
	},

	render: function () {
		var self = this
		var newChildren = React.Children.map(this.props.children, function(child) {
			if(child.props.name)
		  	return React.cloneElement(child, { attachToForm: self.attachToForm, detachFromForm: self.detachFromForm })
		  else
		  	return child
		})
		return (
			<div className="md-form">
				{newChildren}
			</div>
		)
	}

})

module.exports = Form