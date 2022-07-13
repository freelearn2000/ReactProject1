import { Component } from 'react';


interface IProps {
    title: string;   
}

export class Entertainment extends Component<IProps> {

    render( ) {

        return (
            <div>
                <h2 className="ui center aligned green header message">{ this.props.title }</h2>
            </div>
        );
    }
}