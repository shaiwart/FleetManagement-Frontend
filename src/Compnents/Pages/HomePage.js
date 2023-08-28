import Cities from "../PickupCity";
import Navbar from "../PageNavigation";
import HubSelector from "./PickupHubSelector";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Style/Home.css';
import Form from 'react-bootstrap/Form';
import PickupState from "../PickupState";
import PickupCity from "../PickupCity";
import DropState from '../DropState';
import DropCity from '../DropCity';
import PickupAirport from "../PickupAirport";
import DropAirport from "../DropAirport";
import Button from 'react-bootstrap/Button';


export default function HomePage() {

    const pickupdate=((e)=>{
        let date =e.target.value
        sessionStorage.setItem("pickupdate",date);
        console.log(sessionStorage.getItem("pickupdate"))
    })
    const dropdate=((e)=>{
        let date =e.target.value
        sessionStorage.setItem("dropdate",date);
        console.log(sessionStorage.getItem("dropdate"))
    })

    const navigate=useNavigate();
    const columnStyle = {
        border: '1px solid gray', // Add border
        backgroundColor: 'lightgray', // Add gray background color
        // padding: '10px', // Add padding for spacing
    };

    const handleClickto = async () => {
        navigate('/PickupHubSelector'); // Navigate to HubSelector component
    }
    sessionStorage.removeItem("pickUpAirportId")
    sessionStorage.removeItem("pickUpCityId")
    sessionStorage.removeItem("pickCategoryId")
    
    return (
        <>
            <p>hello world</p>
            <Container>
                <Row>
                
                    <Col xs={5} style={columnStyle}>

                        <Row style={columnStyle}>
                        <table>
                            <tr>
                                <td>pickup date <input type="datetime-local" onChange={pickupdate}></input><br/></td>
                                <td>drop date <input type="datetime-local" onChange={dropdate}></input></td>
                            </tr>
                        </table>
                            Select Airport
                            <PickupAirport /> 

                            Select Pick-up State and City
                            <PickupState />
                            <PickupCity /> 
                        </Row>

                        <Row style={columnStyle}>
                            Select Airport
                            <DropAirport />

                            Select Drop State and City
                            <DropState />
                            <DropCity />
                        </Row>

                        
                        <button onClick={handleClickto}>Search hub</button>
                    </Col>

                    <Col style={columnStyle}>Car images</Col>

                </Row>


            </Container>
        </>
    );
}