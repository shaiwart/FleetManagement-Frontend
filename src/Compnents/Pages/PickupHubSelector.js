import React, { useState, useEffect } from "react";
import Navbar from "../PageNavigation";
import '../../Style/LocationSelector.css';
import { useNavigate } from 'react-router-dom';

export default function PickupHubSelector(props) {
    const homePageData = props.homePageData;
    // const setHomePageData = props.setHomePageData;
    const [hubsList, setHubsList] = useState([]);
    const [newhubsList, setNewhubsList] = useState([]);
    const navigate = useNavigate();

    const pickUpAirportId = sessionStorage.getItem("pickUpAirportId");
    const pickUpCityId = sessionStorage.getItem("pickUpCityId");
    useEffect(() => {

        if (pickUpAirportId) {
            fetch("http://localhost:8080/api/hub/" + pickUpAirportId)
                .then(res => res.json())
                .then((result) => setNewhubsList(result))
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, []);


    useEffect(() => {
        if (pickUpCityId) {
            fetch("http://localhost:8080/api/hubs/" + pickUpCityId)
                .then(res => res.json())
                .then((result) => setHubsList(result))
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, []);


    console.log(hubsList)

    const handleHubClick = (hubId) => {
        sessionStorage.setItem("pickupHubId", hubId);
        navigate('/DropHubSelector');
    };

    return (
        <section className="section">
            <Navbar />
            <div className="location-selector">
                <h2>Location Selection</h2>
                <p>Select a Pick-up hub location.</p>
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
                <form>
                    <input
                        type="radio"
                        name="selectedLocation"
                        value={newhubsList.hubId}
                        id={`location-${newhubsList.hubId}`}
                        onChange={() => handleHubClick(newhubsList.hubId)}
                    />
                    <h1>{newhubsList.hubName}</h1>
                    <h1>{newhubsList.contactNumber}</h1>
                </form>



            </div>
        </section>
    )
}
