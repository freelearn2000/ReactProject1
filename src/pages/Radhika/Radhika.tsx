import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface IProps {
    title: string;   
}

class Radhika extends Component<IProps> {
      
    render( ) {

        return(
            <div>
                <h2 className="ui center aligned green header message">{ this.props.title }</h2>
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="ui secondary vertical menu">
                            <Link to='/radhika/art' className="active item">Axios- Class</Link>
                            <Link to='/radhika/dance' className="active item">Axios- Functional</Link>
                            <Link to='/radhika/musiccontext' className="active item">Context</Link>
                            <Link to='searchref' className="active item">Ref</Link>
                        </div> 
                    </div>
                    <div className="twelve wide stretched column">
                        <div className="ui segment">
                            <Outlet/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Radhika;