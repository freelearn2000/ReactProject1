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
                            <Link to='/radhika/india' className="active item">India</Link>
                            <Link to='/radhika/kerala' className="active item">Kerala</Link>
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