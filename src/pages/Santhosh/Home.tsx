import HomeImage from '../Santhosh/Resources/img-1.jpg';

export const Home = ( props: any ) => {      
    
     
    return (
        <>
            <h4>You are Signed in as Admin </h4>  
            <img className="ui fluid image" src={ HomeImage } alt=""/>
        </>
    );
}