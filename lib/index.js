var React = require('react');

var Test = React.createClass({
	getInitialState: function() {
		return {
			data:[] 
		}
	},
	render:function(){
		return(
			<div>
				This is an example div
			</div>
		);
	}
})

function render(){
	return <Test />
}

React.render(<Test />, document.getElementById('container'));