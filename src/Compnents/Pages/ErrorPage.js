import { Link } from "react-router-dom";
import Navbar from "../PageNavigation"; 

export default function ErrorPage() {
    return(
        <section>
            
            <h1>404</h1>
            <h3>
                Page not found !
            </h3>
            <Link to='/' >Home</Link> 
        </section>
    )
}