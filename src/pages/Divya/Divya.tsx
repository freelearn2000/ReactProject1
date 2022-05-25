import  { Component } from 'react'


export class Divya extends Component {

    state = {name: "Divya"};
   
	render( ) {
		return (
			<div>
				<h1>Welcome {this.state.name} !</h1>
		    </div>		
		);
	}	
}
