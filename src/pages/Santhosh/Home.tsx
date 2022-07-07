import { Link } from 'react-router-dom';

export const Home = ( props: any ) => {  

    return (
        <div>
            <h3>Welcome to Home Page</h3>  
            <div className="ui buttons">
                <button className="ui blue button">Cancel</button>
                <div className="or"></div>                             
                <Link to='/Santhosh/Abc'  className="ui green button">Continue....</Link> 
            </div>
        </div>
    );
}