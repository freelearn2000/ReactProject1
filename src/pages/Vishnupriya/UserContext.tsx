import { Component } from 'react';
import { UserContext }  from '../../context/global';


export class UserCont extends Component {

    render( ){
        return(
            <div className="ui segment">
                <UserContext.Provider value={{name: 'Vishnupriya', userRole: 'Admin'}}>
                    <User2/>
                </UserContext.Provider>
            </div>
        )
    }
}

export class User2 extends Component {

    render( ){
        return(
            <User3/>
        )
    }
}

export class User3 extends Component {

    render( ){
        return(
            <UserContext.Consumer>
                { user  => (
                    <div>
                        <h1>Welcome! {user.userRole}:- {user.name}</h1>
                    </div>
                )}
            </UserContext.Consumer>
        )
    }
}
