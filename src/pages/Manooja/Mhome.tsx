import { Component } from 'react';
import { connect } from 'react-redux';


interface IProps {
    
    userName: any;
    onUserSave: any;
}

class Mhome extends Component<IProps> {

    onClickHandler = ( ) => {

        this.props.onUserSave( 'Jordan Walke');
    }

    render( ) {

        return (
            <div>
                <h2 className="ui center aligned green header message">Welcome
                &nbsp;&nbsp;&nbsp;{this.props.userName}</h2>
                <button className="ui positive button" onClick={ this.onClickHandler }>Change</button> 
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        userName: state.userKey.name
    }
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        
            onUserSave: (name: String) => dispatch({type: 'ADD_USER',payload: {Name: name}})
            
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mhome);