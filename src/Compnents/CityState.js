import { useState } from "react"; 
import States from "./State"; 
import Cities from "./City"; 

export default function CityState({homePageData, setHomePageData, isPickup}) { 
    const [citiesList, setCitiesList] = useState([]); 
    const [cityId, setCityId] = useState(0); // this will be componenet specific. 
    // const {setCityId} = props; 
    console.log("CityState-> "); 
    console.log(cityId); 

    return (
        <section>
                <td><label for='loc'>Enter State</label></td>
                <td> <States setCitiesList={setCitiesList} citiesList={citiesList} 
                        homePageData={homePageData} setHomePageData={setHomePageData} ></States> </td>

                <td> <Cities citiesList={citiesList} setCityId={setCityId} setHomePageData={setHomePageData} isPickup={isPickup} ></Cities> </td>
                <td></td>
        </section>
    )

}

// export default function CityState(props) {
//     const [citiesList, setCitiesList] = useState([]); 
//     const [cityId, setCityId] = useState(0); 
//     // const {setCityId} = props; 

//     return (
//         <section>
//                 <td><label for='loc'>Enter State</label></td>
//                 <td> <States setCitiesList={setCitiesList} citiesList={citiesList} ></States> </td>
//                 <td> <Cities citiesList={citiesList} setCityId={setCityId} ></Cities> </td>
//                 <td></td>
//         </section>
//     )

// }