import { Component } from "react";
import PizzaImage from '../Anusree/Images/pizza.jpg';

interface IProps {
    title: any;
}

export class Pizza extends Component<IProps> {

   

    render( ) {

        return(
            <>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                <img className="ui fluid image" alt="PizzaImage" src={ PizzaImage }/>
                <p>laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium</p>
            </>
        )
    }
}