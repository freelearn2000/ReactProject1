import { Component } from 'react';

export class Manooja extends Component {
   
    state = {title: 'Welcome to our component state.'};

    render( ) {
        return (
            
            <div className="ui form"> 
                <h1>{this.state.title} !!!</h1>
            </div>
        ); 
    }

}