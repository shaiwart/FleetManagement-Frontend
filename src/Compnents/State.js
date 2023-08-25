import { useState, useEffect } from "react";
import Cities from "./City";

export default function States({setCitiesList, stateList, setStateList, stateId, setStateId}) {

    
    // const { citiesList, setCitiesList } = props;
    // const {homePageData, setHomePageData} = props; 
    // let [stateId, setStateId] = useState(0); // do not use state Shayad ! 

    const onChangeHandler = async (event) => {
        console.log("Change hua"); 
        try {
            console.log("-> "); 
            const response = await fetch("http://localhost:8085/api/cities/" + stateId);
            const result = await response.json();
            setCitiesList(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        stateId = event.target.value;
        console.log("-> " + stateId);
        setStateId(stateId);
    }

    // useEffect(() => {
    //     fetch("http://localhost:8085/api/cities/" + stateId) 
    //         .then(res => res.json())
    //         .then((result) => { setCitiesList(result) }
    //         );
    // }, [citiesList]); // [citiesList]


    // this will bring all the states as soon as compnent is mounted 
    // useEffect(() => {
    //     fetch("http://localhost:8085/api/states") 
    //         .then(res => res.json())
    //         .then((result) => { setStateList(result) }
    //         );
    // }, [stateList]); 


    // #IMPORTANT 
    // this async will make sure that fetch will be called only after this function is invoked.
    // Otherwise it it not allowed to put useEffect() hook inside the 
    const handelClick = async (e) => {
        // console.log("On click");
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8085/api/states");
            const result = await response.json();
            setStateList(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    console.log();



    return (
        <section>
            <select onChange={onChangeHandler} onClick={handelClick}>
                <option value="SelectState">Select State</option>
                {stateList.map(state => (
                    <option key={state.stateId} value={state.stateId}>
                        {state.stateName}
                    </option>
                ))}
            </select> 
        </section>
    )
}