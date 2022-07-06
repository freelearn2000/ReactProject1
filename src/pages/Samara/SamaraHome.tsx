import WeatherImage from '../Samara/weather.jpg';


export const SamaraHome = ( props: any ) => {
    return(
        <div>     
            <h1 className = "ui center aligned blue header"><i>{ props.title }</i></h1>
            <img className="ui fluid image" src={ WeatherImage } alt=""/>
        </div>
    );
}