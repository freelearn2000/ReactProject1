import { Link, useLocation } from 'react-router-dom';


export const Menu = ( props: any ) => {
    const location = useLocation();

    return (
        <>
        <div className="ui eight item menu">
            { (location.pathname.endsWith(`/`))?
                    <Link to='/' className="active item">Home</Link>
                :   <Link to='/' className="item">Home</Link>}
            { (location.pathname.includes(`/news`))?
                    <Link to='/news' className="active item">News</Link>
                :   <Link to='/news' className="item">News</Link>}
            { (location.pathname.includes(`/about`))?
                    <Link to='/about' className="active item">About</Link>
                :   <Link to='/about' className="item">About</Link>}
            { (location.pathname.includes(`/anusree`))?
                    <Link to='/anusree/employees' className="active item">Anusree</Link>
                :   <Link to='/anusree/employees' className="item">Anusree</Link>}
            { (location.pathname.includes(`/rakhi`))?
                    <Link to='/rakhi/users' className="active item">Rakhi</Link>
                :   <Link to='/rakhi/users' className="item">Rakhi</Link>}
            { (location.pathname.includes(`/santhosh`))?
                    <Link to='/santhosh/index' className="active item">Santhosh</Link>
                :   <Link to='/santhosh/index' className="item">Santhosh</Link> }
             { (location.pathname.includes(`/radhika`))?
                    <Link to='/radhika/users' className="active item">Radhika</Link>
                :   <Link to='/radhika/users' className="item">Radhika</Link>}
            { (location.pathname.includes(`/samara`))?
                    <Link to='/samara/info' className="active item">Samara</Link>
                :   <Link to='/samara/info' className="item">Samara</Link>}
        </div>
        <div className="ui eight item menu">
            { (location.pathname.includes(`/parvathy`))?
                    <Link to='/parvathy/home' className="active item">Parvathy</Link>
                :   <Link to='/parvathy/home' className="item">Parvathy</Link>}
            { (location.pathname.endsWith(`/vishnupriya`))?
                    <Link to='/vishnupriya/headlines' className="active item">Vishnupriya</Link>
                :   <Link to='/vishnupriya/headlines' className="item">Vishnupriya</Link>}
            { (location.pathname.includes(`/divya`))?
                    <Link to='/divya/frontpage' className="active item">Divya</Link>
                :   <Link to='/divya/frontpage' className="item">Divya</Link>}
             { (location.pathname.includes(`/bindu`))?
                    <Link to='/bindu/currentnews' className="active item">Bindu</Link>
                :   <Link to='/bindu/currentnews' className="item">Bindu</Link>}
            { (location.pathname.includes(`/dhanya`))?
                    <Link to='/dhanya' className="active item">Dhanya</Link>
                :   <Link to='/dhanya' className="item">Dhanya</Link>}
             { (location.pathname.includes(`/viji`))?
                    <Link to='/viji/businessnews' className="active item">Viji</Link>
                :   <Link to='/viji/businessnews' className="item">Viji</Link>}  
            { (location.pathname.includes(`/manooja`))?
                    <Link to='/manooja/sportsnews' className="active item">Manooja</Link>
                :   <Link to='/manooja/sportsnews' className="item">Manooja</Link>}
             { (location.pathname.includes(`/aiswarya`))?
                    <Link to='/aiswarya/newspage' className="active item">Aiswarya</Link>
                :   <Link to='/aiswarya/newspage' className="item">Aiswarya</Link>}    
        </div> 
        </>
    );
}