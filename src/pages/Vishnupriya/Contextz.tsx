import { Component, useContext } from 'react';
import { User }  from '../../context/global';
import { Pcontext } from '../../context/global';


// Class Component
export class UserCont extends Component {

    render( ){
        return(
            <div className="ui segment">
                <User.Provider value={{name: 'Vishnupriya', userRole: 'Admin'}}>
                    <User2/>
                </User.Provider>
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
            <User.Consumer>
                { user  => (
                    <div>
                        <h2>Class Component</h2>
                        <h4>Welcome! {user.userRole}</h4>
                    </div>
                )}
            </User.Consumer>
        )
    }
}

// b.Consumer
// class User3 extends Component {

//     render( ) {
//         return(
//             <User.Consumer>
//                 {user => 
//                     (
//                         <> <h3> Context user: {user.name} </h3></>
//                     )
//                 }
//             </User.Consumer>
//         )
//     }
// }

// c.Consumer
// class User3 extends Component {

//     static contextType = User;

//     render( ) {
//         return(
//             <> Context value: {this.context} </>
//         )
//     }
// }


// Functional Component

const  Accessories = ( ) => {

        return(
            <Pcontext.Provider value={'Accessories'}>
                <Headset1/>
            </Pcontext.Provider>
        );
    }

const Headset1 = ( ) => {
    return(
        <Headset2/>
    )
}

const Headset2 = (props: any) => {

    const context = useContext(Pcontext);

    return(
        <>
        <h2>Functional Component</h2>
        <h4> Context value: {context}</h4>
        </>
    );
}

export const Contextz = ( ) => {
    return(
        <div>
            <div className='ui segment'>
                <UserCont/>
            </div>
            <div className='ui segment'>
                <Accessories/>
            </div>
        </div>
    );
}