
import Imshopcart from '../Vishnupriya/images/shopcartimg.jpg';
import { connect } from 'react-redux';


const ShoppingCart = ( props: any ) => {      
    
     
    return (
        <>
             <h2 className="ui center aligned grey header message">{props.userDetails}</h2>                 
            <img className="ui fluid image" src={ Imshopcart } alt=""/>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        userDetails: state.userKey.name
    }
}

export default connect(mapStateToProps)(ShoppingCart);

