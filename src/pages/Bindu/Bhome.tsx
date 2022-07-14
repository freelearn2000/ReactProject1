import  HealthImage  from '../Bindu/Images/Health.jpg';


export const Bhome = ( props: any ) => {

    return (
        <div>
            <h4 className="ui center aligned brown header message">Welcome to Home Page</h4>  
            {/* <div className="ui buttons">
                <button className="ui pink button">Cancel</button>
                <div className="or"></div>
                <button className="ui green button" >Submit</button>
            </div> */}
            <img src ={ HealthImage } className = "ui fluid image" alt={"HealthImage"} height={10}  width={10}/>
        </div>
    );
}