import Cities from "../PickupCity";
import CityState from "../CityState";
import Navbar from "../PageNavigation";
import HubSelector from "./HubSelector";
import { Link } from "react-router-dom";
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


export default function HomePage() {

    const columnStyle = {
        border: '1px solid gray', // Add border
        backgroundColor: 'lightgray', // Add gray background color
        padding: '10px', // Add padding for spacing
    };

    return (
        <>
            <p>hello world</p>
            <Container>
                <Row>
                    <Col xs={5} style={columnStyle}>
                        Select Pick-up State and City 
                        <PickupState /> 
                        <PickupCity /> 
                        
                        Select Drop State and City 
                        <DropState /> 
                        <DropCity /> 

                    </Col>
                    <Col style={columnStyle}>Car images</Col>
                </Row>
            </Container>
        </>
    );
}