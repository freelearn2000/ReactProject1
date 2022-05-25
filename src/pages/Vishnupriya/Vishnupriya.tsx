import { Component } from "react";


export class Vishnupriya extends Component {

    state = {title: 'Hi Vishnupriya!!!'}

    render( ) {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}   
