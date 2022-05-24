import { Link, useLocation } from 'react-router-dom';


export const Menu = ( props: any ) => {
    const location = useLocation();
    // console.log(location.pathname);

    return (
        <div className="ui four item menu">
            { (location.pathname.endsWith(`/`))?
                    <Link to='/' className="active item">Home</Link>
                :   <Link to='/' className="item">Home</Link>}
            { (location.pathname.includes(`/news`))?
                    <Link to='/news' className="active item">News</Link>
                :   <Link to='/news' className="item">News</Link>}
            { (location.pathname.includes(`/about`))?
                    <Link to='/about' className="active item">About</Link>
                :   <Link to='/about' className="item">About</Link>}
            { (location.pathname.includes(`/anusreemohan`))?
                    <Link to='/anusreemohan' className="active item">AnusreeMohan</Link>
                :   <Link to='/anusreemohan' className="item">AnusreeMohan</Link>}
        </div>
    );
}