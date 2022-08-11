import { Component } from "react";
import picture from "./pictures/catimg1.png";


class Home extends Component {

    render() {

        return (
            <div>
                <h3 className="ui center aligned teal header">A room without books is like a body without a soul.</h3>
                <div className="ui image">
                    <img alt={ picture } src={ picture } />
                </div>
            </div>
        )
    }
}

export default (Home);