import { Component } from "react";
import { Link, Outlet,useLocation } from "react-router-dom";


interface IProps {
    title: string;
}

// const location = useLocation();

class Parvathy extends Component<IProps> {

    renderSideMenu() {

        

        const sideMenuJSX =
            <div className="ui fluid inverted vertical menu">
                {/* {(location.pathname.includes(`/home`)) ?
                    <Link to='/parvathy/home' className=" active item">home</Link>
                    : <Link to='/parvathy/home' className="item">home</Link>}
                {(location.pathname.includes(`/books`)) ?
                    <Link to='/parvathy/books' className="active item">Axios</Link>
                    : <Link to='/parvathy/books' className="item">Axios</Link>}
                {(location.pathname.includes(`/petsContext`)) ?
                    <Link to='/parvathy/petsContext' className="active item">Context</Link>
                    : <Link to='/parvathy/petsContext' className="item">Context</Link>}
                {(location.pathname.includes(`/ref`)) ?
                    <Link to='/parvathy/ref' className="active item">Ref</Link>
                    : <Link to='/parvathy/ref' className="item">Ref</Link>} */}


<Link to='/parvathy/home' className="item">
                    home
                </Link>
                <Link to='/parvathy/books' className="item">
                    api1
                </Link>
                <Link to='/parvathy/cats' className="item">
                    api2
                </Link>
                <Link to='/parvathy/petsContext' className="item">
                    context
                </Link>
                <Link to='/parvathy/ref' className="item">
                    ref
                </Link>

            </div>

        return sideMenuJSX;
    }

    renderContentBox() {

        const contentJSX =
            <div>
                <Outlet />
            </div>

        return contentJSX;
    }

    render() {

        return (
            <div>
                <h2 className="ui center aligned header message">{this.props.title}</h2>
                <Link to='/' className="ui teal basic tag label">Goto HomePage</Link> &nbsp;&nbsp;
                <Link to='/news/100$' className="ui basic olive tag label">News</Link>&nbsp;&nbsp;

                <div className="ui secondary segment">
                    <div className="ui internally celled grid">
                        <div className="row">
                            <div className="three wide column">
                                {this.renderSideMenu()}
                            </div>
                            <div className="thirteen wide column">
                                {this.renderContentBox()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Parvathy);