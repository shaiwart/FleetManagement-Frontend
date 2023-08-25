import { useState, useEffect } from "react";


export default function Cities({ setHomePageData, isPickup, citiesList, setCitiesList, stateId }) {

    function onChangeHandler(event) {
        let selectedCityId = event.target.value;
        console.log("->Inside"); 
        console.log(selectedCityId);  

        setHomePageData(prevData => ({ ...prevData, pickupCity: selectedCityId }));


        // if (isPickup == 1) { // Means pickup wala component 
        //     setHomePageData(prevData => ({ ...prevData, pickupHub: selectedCityId })); 
        //     // console.log("-->");
        //     // console.log(selectedCityId);
        // }
        // else { // drop wala component 
        //     setHomePageData(prevData => ({ ...prevData, dropHub: selectedCityId }));
        //     console.log("-->");
        //     console.log(selectedCityId);
        // }
    }



    async function onClickHandler(event) {
        let selectedCityId = event.target.value;

        try {
            console.log("-> ");
            const response = await fetch("http://localhost:8085/api/cities/" + stateId);
            const result = await response.json();
            setCitiesList(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }




    return (
        <section>
            <select onChange={onChangeHandler} onClick={onClickHandler} >
                <option value="SelectCities">Select Cities</option>
                {citiesList.map(city => (
                    <option key={city.cityId} value={city.cityId}>
                        {city.cityName}
                    </option>
                ))}
            </select>
        </section>
    )
}

// onChange={e => handleDropHubChange(e.target.value)}