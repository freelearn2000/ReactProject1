import { Component } from "react";
import { Link, Outlet } from "react-router-dom";


interface IProps {
    title: string;
}

class Parvathy extends Component<IProps> {

    renderSideMenu() {

        const sideMenuJSX =
            <div className="ui fluid inverted vertical menu">
                <Link to='/parvathy/home' className="item">
                    home
                </Link>
                <Link to='/parvathy/books' className="item">
                    books
                </Link>
                <Link to='/parvathy/cats' className="item">
                    cats
                </Link>
                <Link to='/parvathy/petsContext' className="item">
                    context
                </Link>
            </div>

        return sideMenuJSX;
    }

    renderContentBox() {

        const contentJSX =
            <div>
               <Outlet/>
            </div>

        return contentJSX;
    }

    render() {

        return (
            <div>
                <h2 className="ui center aligned header message">{ this.props.title }</h2>
                <Link to='/' className="ui teal basic tag label">Goto HomePage</Link> &nbsp;&nbsp;
                <Link to='/news/100$' className="ui basic olive tag label">News</Link>
                <div className="ui secondary segment">
                    <div className="ui internally celled grid">
                        <div className="row">
                            <div className="three wide column">
                                { this.renderSideMenu() }
                            </div>
                            <div className="thirteen wide column">
                                { this.renderContentBox() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Parvathy);