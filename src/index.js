import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class WelcomeWord extends React.Component {
  

  render() {
    return [
    	<div>
    		<p>{this.props.text},</p> 
    		<p>By</p>
    		<p>{this.props.name}</p>
		</div>
	];
  }
}

ReactDOM.render(
  <WelcomeWord text="Welcome Word" name="Pontus Pettersson" />,
  document.getElementById('root')
); 
