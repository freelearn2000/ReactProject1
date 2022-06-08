import { useParams } from "react-router-dom";

export function retriveDataFromRoute( Component: any) {

    return ( props: any ) => {
        
        const routeData = useParams( );
       
        return <Component { ...props } routeData={ routeData }/>
    }
}