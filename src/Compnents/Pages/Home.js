import Cities from "../City";
import CityState from "../CityState";
import Navbar from "../PageNavigation"; 
import States from "../State";
import HubSelector from "./HubSelector";
import { Link } from "react-router-dom";
import { useState } from "react"; 


export default function Home({homePageData, setHomePageData}) {
    const [stateList, setStateList] = useState([]); 
    const [citiesList, setCitiesList] = useState([]); 
    const [cityId, setCityId] = useState(0);
    let [stateId, setStateId] = useState(0); // do not use state Shayad ! 

    console.log(citiesList); 
    console.log("ajdlkj-> " + homePageData.pickupCity); 
    const fun = ()=> {
        setHomePageData(prevData => ({ ...prevData, pickupCity: 5 })); 
    }

    

    return(
            <section className="section">
                <Navbar/>
                <h1>Home Page</h1>
                <br/> 
                {/* <CityState setCityId={props.setCityId}  /> */} 
                {/* <button onClick={fun}>Button</button> */}


                <States setCitiesList={setCitiesList} stateList={stateList} setStateList={setStateList} stateId={stateId} setStateId={setStateId}></States>
                <Cities homePageData={homePageData} setHomePageData={setHomePageData} citiesList={citiesList} setCitiesList={setCitiesList} stateId={stateId}/> 
                

                
                {/* <CityState homePageData={homePageData} setHomePageData={setHomePageData} isPickup={1} isDrop={0} />
                <CityState homePageData={homePageData} setHomePageData={setHomePageData} isPickup={0} isDrop={1} />  */}

                <Link to='/hubselector' element={<HubSelector/>}> Go to Hubs Selcector </Link> 
            </section>
    )
}