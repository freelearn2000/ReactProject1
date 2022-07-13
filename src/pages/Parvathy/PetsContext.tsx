import { Component } from "react";
import { PetsWorldContext } from "../../context/global";


interface IProps {
    title: string;
}

// Provider
class PetsContext extends Component<IProps> {

    render() {

        return (
            <div>
                <h2 className="ui center aligned header">Context</h2>
                <div className="ui inverted segment">
                <PetsWorldContext.Provider value={'welcomee'}>
                    <Middle />
                </PetsWorldContext.Provider>
                </div>
            </div>
        )
    }
}

export class Middle extends Component {

    render() {
        return (
            <Child />
        );
    }
}

export class Child extends Component {

    render() {
        return (
            <span className="ui inverted blue text" >
            <PetsWorldContext.Consumer>
                {
                    value => (
                        <p> Context value accessed from Child : { value } </p>
                    )
                }
            </PetsWorldContext.Consumer>
            </span>
        );
    }
}

export default (PetsContext);