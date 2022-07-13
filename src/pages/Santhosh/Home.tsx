import { Link } from 'react-router-dom';

import HomeImage from '../Santhosh/Resources/img-1.jpg';

export const Home = ( props: any ) => {  

    return (
        <div>
            <h4>Welcome to Home Page</h4>  
            <img className="ui fluid image" src={ HomeImage } alt=""/>
        </div>
    );
}