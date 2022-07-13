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
                <PetsWorldContext.Provider value={'welcomee'}>
                    <Middle />
                </PetsWorldContext.Provider>
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
            <PetsWorldContext.Consumer>
                {
                    value => (
                        <h3> Context value accessed from Child : { value } </h3>
                    )
                }
            </PetsWorldContext.Consumer>
        );
    }
}

export default (PetsContext);