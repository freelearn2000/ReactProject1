import { Component } from 'react';

export class Radhika extends Component {

    state = {data:'welcome '};
    
    render( ) {
        return (
            <div>
                <div>
                    <h2>This is My Component</h2>
                    <br/>
                    <p>{this.state.data}</p>
                    <br/>
               </div>       
            </div>
        );
    }
}
