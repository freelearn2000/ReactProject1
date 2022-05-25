import { Component } from "react";


export class Bindu extends Component {

    state = {title: 'Welcome to My component!'}

    render( ) {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}   
