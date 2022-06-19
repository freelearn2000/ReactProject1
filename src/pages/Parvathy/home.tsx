import { Component } from "react";
import picture from "./pictures/catimg1.png";


class Home1 extends Component {

    render() {

        return (
            <div>
                <h2 className="ui center aligned header">A room without books is like a body without a soul.</h2>
                <div className="ui image">
                    <img alt={picture} src={picture}/>
                </div>
            </div>
        )
    }
}

export default (Home1);