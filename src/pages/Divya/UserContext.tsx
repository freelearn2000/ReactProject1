import { Component } from 'react';
import { UserContext }  from '../../context/global';


export class AuthUser extends Component {

    render( ) {
        return(
            <div className="ui segment">
                <UserContext.Provider value={{name: 'Divya', userRole: 'Admin'}}>
                    <AuthUser2/>
                </UserContext.Provider>
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
            <UserContext.Consumer>
                { user  => (
                    <div>
                        <h2>Welcome!! {user.name}</h2>
                    </div>
                )}
            </UserContext.Consumer>
        )
    }
}
