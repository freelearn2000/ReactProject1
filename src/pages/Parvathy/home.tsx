import { Component } from "react";
import { retriveDataFromRoute } from '../../utils/hoc';


class Home1 extends Component {

    render() {

        return (
            <div>
                <h2 className="ui center aligned header">Welcome to my HomePage</h2>
                <p className="ui center aligned header">This is my content area !!!!!</p>
            </div>
        )
    }
}

export default retriveDataFromRoute(Home1);