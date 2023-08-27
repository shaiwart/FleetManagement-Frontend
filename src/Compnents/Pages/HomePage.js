import Cities from "../PickupCity";
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
import PickupAirport from "../PickupAirport";
import DropAirport from "../DropAirport";
import Button from 'react-bootstrap/Button';


export default function HomePage() {

    const columnStyle = {
        border: '1px solid gray', // Add border
        backgroundColor: 'lightgray', // Add gray background color
        // padding: '10px', // Add padding for spacing
    };

    return (
        <>
            <p>hello world</p>
            <Container>
                <Row>
                    <Col xs={5} style={columnStyle}>

                        <Row style={columnStyle}>
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

                        <Button variant="secondary">Continue</Button>{' '}
                    </Col>

                    <Col style={columnStyle}>Car images</Col>

                </Row>


            </Container>
        </>
    );
}