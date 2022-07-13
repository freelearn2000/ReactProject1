import { Component, useContext } from 'react';
import { MyMusic } from '../../context/global';


export class MusicContext extends Component { 

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
                            <> Music : { value }  </>
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
            <> Play the music from : {this.context}; </>
         );
    }
}



const Ghazal = (props: any) =>{

    const context = useContext(MyMusic);

    return (
        <p>Play the music from :  {context}; </p>
    );
}
