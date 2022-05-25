import { Link, useLocation } from 'react-router-dom';


export const Menu = ( props: any ) => {
    const location = useLocation();
    // console.log(location.pathname);

    return (
        <div className="ui sixteen item menu">
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
            { (location.pathname.includes('/samarakp'))?
               <Link to='/samarakp' className="active item">Samara KP</Link>
            :  <Link to='/samarakp' className="item">Samara KP</Link>}
            { (location.pathname.includes(`/parvathy`))?
                    <Link to='/parvathy' className="active item">Parvathy</Link>
                :   <Link to='/parvathy' className="item">Parvathy</Link>}
            { (location.pathname.endsWith(`/vishnupriya`))?
                    <Link to='/vishnupriya' className="active item">Vishnupriya</Link>
                :   <Link to='/vishnupriya' className="item">Vishnupriya</Link>}
            { (location.pathname.includes(`/divya`))?
                    <Link to='/divya' className="active item">Divya</Link>
                :   <Link to='/divya' className="item">Divya</Link>}
             { (location.pathname.includes('/bindu'))?
                    <Link to='/bindu' className="active item">Bindu</Link>
                :   <Link to='/bindu' className="item">Bindu</Link>}   
            { (location.pathname.includes('/aiswarya'))?
                    <Link to='/aiswarya' className="active item">Aiswarya</Link>
                :   <Link to='/aiswarya' className="item">Aiswarya</Link>} 
            { (location.pathname.includes('/Viji'))?
                    <Link to='/viji' className="active item">Viji</Link>
                :   <Link to='/viji' className="item">Viji</Link>} 
            { (location.pathname.includes('/manooja'))?
                    <Link to='/manooja' className="active item">Manooja</Link>
                :   <Link to='/manooja' className="item">Manooja</Link>}
            { (location.pathname.includes('/dhanya'))?
                <Link to='/dhanya' className="active item">Dhanya</Link>
            :   <Link to='/dhanya' className="item">Dhanya</Link>} 
        </div>
    );
}