import { Component } from 'react';


export class NewsPage extends Component {

    state = {data: 'Welcome to our component state.', xyz: {name: 'steve'}};

    onClickHandler = ( ) => {
        // console.log(`NewsPage button clicked!!!`);
        this.setState({data: 'Bye from our component state.', xyz: {name: 'tom'}});
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        if ( this.state.data !== nextState.data) {
            return true;
        }
        return false;
    }

    // Initialization
    componentDidMount( ) {
        // console.log(`NewsPage componentDidMount`);
    }

    // State Update
    componentDidUpdate( ) {
        // console.log(`NewsPage componentDidUpdate`);
    }

    // Destructor
    componentWillUnmount( ) {
        // console.log(`NewsPage componentWillUnmount`);
    }


    render( ) {
        // console.log(`NewsPage render`);
        
        return (
            <div>
                <h1>This is News Component</h1>
                <br/>
                <p>{this.state.data} !!!</p>
                <br/>
                <div className="ui buttons">
                    <button className="ui button">Cancel</button>
                    <div className="or"></div>
                    <button className="ui positive button" onClick={this.onClickHandler}>Save</button>
                </div>
            </div>
        );
    }
}