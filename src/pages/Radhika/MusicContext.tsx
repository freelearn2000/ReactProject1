import { Component, useContext } from 'react';
import { MyMusic } from '../../context/global';

// Class Component

class MusiccContext extends Component { 

    render( ) {
        return (
            <div>
                <MyMusic.Provider value={'Context'}>
                    <Music/>
                </MyMusic.Provider>  
            </div>
        );
    }
}

class Music extends Component {

    render ( ) {
        return (
            <div>
                <Classical/>
                <MyMusic.Provider value={'Hindustani'}>
                    <Hindustani/>  
                </MyMusic.Provider>

                <MyMusic.Provider value={'Ghazal'}>
                    <Ghazal/>  
                </MyMusic.Provider>  
            </div>
        );
    }
}

class Classical extends Component {

    render ( ) {
        return ( 
            <div>
                <MyMusic.Consumer>
                    { value =>
                        (
                            <> 
                            <h3>Context using Class Component</h3>
                            <p>
                            Music : { value } 
                            </p>
                            </>
                        )
                    }
                </MyMusic.Consumer>
            </div>
        );
    }
}


class Hindustani extends Component {

    static contextType = MyMusic;

    render( ) {
         return (
            <> 
            Play the music from : {this.context};
            </>
         );
    }
}

// Functional Component 

const Ghazal = (props: any) =>{

    const context = useContext(MyMusic);

    return (
        <>
        <h3>Context using Functional Component</h3>
        <p>Play the music from :  {context}; </p>
        </>
    );
}

// Wrapper Class 

export class MusicContext extends Component {

    render ( ) {

        return (
            <div className="ui segments">
                <div className="ui segment">
                    <MusiccContext/>
                </div>
                <div className="ui segment">
                    
                </div>
            </div>
        );
    }
}