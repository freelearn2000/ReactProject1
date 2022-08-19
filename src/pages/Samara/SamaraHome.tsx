import WeatherImage from '../Samara/weather.jpg';
import { connect } from 'react-redux';


const SamaraHome = ( props: any ) => {
    
    return(
        <div>     
            <h1 className = "ui center aligned blue header"><i>{ props.title }</i></h1>
            <h4>Redux state data : { props.userDetails }</h4>
            <img className="ui fluid image" src={ WeatherImage } alt=""/>
        </div>
    );
}    

    const mapStateToProps = (state: any) => {
        return {
            userDetails: state.userKey.name
        }
    }
    

export default connect(mapStateToProps)(SamaraHome);    