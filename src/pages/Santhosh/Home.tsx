import HomeImage from '../Santhosh/Resources/img-1.jpg';

export const Home = ( props: any ) => {  
    
    const current = new Date();
     
    return (
        <>
            <h4>You are Signed in as Admin </h4>  
            <img className="ui fluid image" src={ HomeImage } alt=""/>
        </>
    );
}