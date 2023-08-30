import { Outlet } from "react-router-dom";
import PageNavigation from "./PageNavigation"; 

export default function SharedLayout() {
    return(
        <>
            <PageNavigation/> 
            <Outlet/>
        </>
    )
} 
