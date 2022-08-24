import  HealthImage  from '../Bindu/Images/Health.jpg';
import { connect } from 'react-redux';

 const Bhome = ( props: any ) => { 

    const onClickHandler = ( ) => {
        props.onUserSave('Bill Gates', 65)
    }   

    return (
        <div>

            {/* <div className="ui buttons">
                <button className="ui pink button">Cancel</button>
                <div className="or"></div>
                <button className="ui green button" >Submit</button>
            </div> */}

            <div>
                <h4 className="ui center aligned grey header message">{ props.title }
                &nbsp;&nbsp;&nbsp; { props.userDetails}</h4>
            </div> 
            <div className = "ui buttons "> 
                <button  className="ui orange basic button" onClick={ onClickHandler }>Change </button>                       
             </div>

            <img src ={ HealthImage } className = "ui fluid image" alt={"HealthImage"} height={5}  width={5}/>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        userDetails: state.userKey.name
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
       onUserSave: (name: string, age: number) => dispatch({type: 'ADD_USER', payload: {Name: name, Age: age}} )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Bhome);