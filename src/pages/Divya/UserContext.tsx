import { Component } from 'react';
import { User }  from '../../context/global';


export class AuthUser extends Component {

    render( ) {
        return(
            <div className="ui segment">
                <User.Provider value={{name: 'Divya', userRole: 'Admin'}}>
                    <AuthUser2/>
                </User.Provider>
            </div>
        )
    }
}

export class AuthUser2 extends Component {

    render( ){
        return(
            <AuthUser3/>
        )
    }
}

export class AuthUser3 extends Component {

    render( ){
        return(
            <User.Consumer>
                { user  => (
                    <div>
                        <h2>Welcome!! {user.name}</h2>
                    </div>
                )}
            </User.Consumer>
        )
    }
}
