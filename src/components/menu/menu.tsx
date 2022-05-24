import { Link, useLocation } from 'react-router-dom';


export const Menu = ( props: any ) => {
    const location = useLocation();
    // console.log(location.pathname);

    return (
        <div className="ui seven item menu">
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
            { (location.pathname.includes(`/rakhiravi`))?
                <Link to='/rakhiravi' className="active item">RakhiRavi</Link>
            :   <Link to='/rakhiravi' className="item">RakhiRavi</Link>}
            { (location.pathname.includes('/Santhosh'))?
                <Link to='/santhosh' className="active item">Santhosh</Link>
            :   <Link to='/santhosh' className="item">Santhosh</Link> }
            { (location.pathname.includes('/radhika'))?
               <Link to='/radhika' className="active item">Radhika</Link>
            :  <Link to='/radhika' className="item">Radhika</Link>}
        </div>
    );
}