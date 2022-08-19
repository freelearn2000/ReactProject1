import HomeImage from '../Santhosh/Resources/img-1.jpg';
import { connect } from 'react-redux';

const Home = ( props: any ) => {      
    
     
    return (
        <>
             <h2 className="ui center aligned grey header message">{props.userDetails}</h2>                 
            <img className="ui fluid image" src={ HomeImage } alt=""/>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        userDetails: state.userKey.name
    }
}

export default connect(mapStateToProps)(Home);