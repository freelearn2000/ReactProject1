import { Link  } from 'react-router-dom';

export const BlogsMenu = ( props: any ) => {
    return(
        <div className="ui inverted vertical pointing menu">
            <Link className="item" to='/rakhi/science'>{props.item1}<i className="atom icon"></i></Link>
            <Link className="item" to='/rakhi/technology'>{props.item2}<i className="keyboard outline icon"></i></Link>
        </div>
    )
}