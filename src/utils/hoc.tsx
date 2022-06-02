
export function retriveDataFromRoute( Component: any) {

    return ( props: any) => {
     return <Component { ...props }/>
    }
}