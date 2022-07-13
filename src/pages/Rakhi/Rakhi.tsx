import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { retriveDataFromRoute } from '../../utils/hoc';
import { UserContext } from '../../context/global';


interface IProps {
    title: string;
    location: any;
}

class Rakhi extends Component<IProps> {

    render( ) {

        return(
            <div className= "ui basic segments">
                <h1 className = "ui inverted header center aligned segment">{ this.props.title }</h1><br/>
                {/* {<Link to='/' className = "ui label black left aligned">Home</Link>
                <Link to='/news/trending' className = "ui label black">News</Link>} */}
                <Link to='/rakhi/users' className = "ui label black">Users</Link>
                <Link to='counter' className = "ui label black">Counter Context</Link>
                <div className= "ui segments grid">
                    <div className= "ui segment six wide column ">
                        <div className="ui inverted vertical pointing menu">
                            <Link className={ this.props.location.pathname.includes('science')? 'active item': 'item'} to='science'>Science<i className="atom icon"></i></Link>
                            <Link className={ this.props.location.pathname.includes('technology')? 'active item': 'item'} to='technology'>Technology<i className="keyboard outline icon"></i></Link>
                        </div>
                    </div>
                    <div className= "ten wide column">
                        <UserContext.Provider value={{name:'Rakhi', viewMode:'Admin'}}>
                            <Outlet/>
                        </UserContext.Provider>
                    </div>
                </div>
            </div>
        )
    }
}

export default retriveDataFromRoute( Rakhi );


