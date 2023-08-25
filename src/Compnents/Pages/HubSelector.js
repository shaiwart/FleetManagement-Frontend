import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../PageNavigation"; 
import '../../Style/LocationSelector.css'; 

export default function HubSelector(props) {

    const homePageData = props.homePageData;
    const setHomePageData = props.setHomePageData;
    const cityId = homePageData.pickupCity;
    const [hubsList, setHubsList] = useState([]);
    const navigate = useNavigate();
    // let [cityId, setCityId] = useState(0); 

    // function stateHandler(event) {
    //     cityId = event.target.value;
    //     console.log("-> " + cityId);
    //     setCityId(cityId); 
    // } 

    console.log(cityId);


    // useEffect(() => {
    //     fetch(`http://localhost:8085/api/hubs/${cityId}`, {
    //         method : "GET",
    //         mode: 'cors'
    //     }).then(res => res.json())
    //     .then((result) => { setHubsList(result) }
    //         );
    // }, []);


    useEffect(() => {
        fetch("http://localhost:8085/api/hubs/" + homePageData.pickupCity) // http://localhost:8085/api/hubs/2101 // http://localhost:8085/api/hubs/${cityId}
            .then(res => res.json())
            .then((result) => { setHubsList(result) }
            );
    }, []); // [hubsList] do not use this, otherwise baar baar reload hoga. 

    const handleHubClick = (hubId) => {
        // Call the parent component's onHubClick handler
        // onHubClick(hubId); 
        setHomePageData(prevData => ({ ...prevData, pickupHub: hubId }));
        navigate('/categoryselector');
    };

    return (
        <section className="section">
            <Navbar />
            <div className="location-selector">
    <h2>Location Selection</h2>
    <p>Select a Pick-up / Return location.</p>
    <form>
        {hubsList.map(location => (
            <div key={location.hubId} className="location-item">
                <label htmlFor={`location-${location.hubId}`} className="radio-label">
                    <input
                        type="radio"
                        name="selectedLocation"
                        value={location.hubName}
                        id={`location-${location.hubId}`}
                        onChange={() => handleHubClick(location.hubId)}
                    />
                    <span className="location-name">
                        {location.hubName}
                    </span>
                </label>
                <p className="location-email">{location.address}</p>
            </div>
        ))}
    </form>
</div>

        </section >
    )
}


{/* <h1>Hub Selector Page</h1>
            <br />

            <table>
                <thead>
                    <tr>
                        <th>Hub Id</th>
                        <th>Hub Name</th>
                        <th>Hub Address</th>
                        <th>Hub City</th>
                    </tr>
                </thead>
                <tbody>
                    {hubsList.map(hub => (
                        <tr key={hub.hubId}>
                            <td>{hub.hubId}</td>
                            <td>{hub.hubName}</td>
                            <td>{hub.address}</td>
                            <td>{hub.city.cityName}</td>
                            <td>{hub.contactNumber}</td>
                            <button className="hub-button" onClick={() => handleHubClick(hub.hubId)}>Select {hub.hubName}</button>
                        </tr>
                    ))}
                </tbody>
            </table> */}