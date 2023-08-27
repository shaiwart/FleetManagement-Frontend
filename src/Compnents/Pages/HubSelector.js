import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../PageNavigation";
import '../../Style/LocationSelector.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function HubSelector() {
    const [hubId, setHubId] = useState(0);
    const [hubsList, setHubsList] = useState(); 
    const navigate = useNavigate();

 
    useEffect(() => {
        fetch("http://localhost:8080/api/hubs/" + sessionStorage.getItem("pickUpCityId"))  // http://localhost:8085/api/hubs/2101 // http://localhost:8085/api/hubs/${cityId}
            .then(res => res.json())
            .then((result) => { setHubsList(result) }
            );
    }, []); // [hubsList] do not use this, otherwise baar baar reload hoga. 

    const onClickHandler = (hubId, hubName)=> {
        console.log(hubId);
        console.log(hubName); 
        setHubId(hubId); 
        sessionStorage.setItem("selectedHubId", hubId); 
        sessionStorage.setItem("selectedHubName", hubName); 
    }

    const continueHandler = () => {
        navigate('/categoryselector'); 
    }; 
    if(hubsList == null) {
        navigate('/errorpage'); 
    }

    return (
        <section className="section">
            <Navbar />
            <div className="location-selector">
                <h2>Location Selection</h2>
                <p>Select a Pick-up hub</p> 
                <p>You selected {sessionStorage.getItem("selectedHubName")}</p> 
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hub Name</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Choose</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {hubsList?.map((hub, index) => ( 
                            <tr key={hub.hubId}>
                                <td>{index + 1}</td> 
                                <td>{hub.hubName}</td>
                                <td>{hub.contactNumber}</td>
                                <td>{hub.address}</td>
                                <td><Button variant="secondary" onClick={()=>{onClickHandler(hub.hubId, hub.hubName)}}>Select</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table> 

                <Button variant="secondary" onClick={continueHandler}>Continue</Button> 

            </div>

        </section >
    )
}
