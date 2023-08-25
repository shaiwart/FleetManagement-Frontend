import Cities from "../City";
import CityState from "../CityState";
import Navbar from "../PageNavigation";
import States from "../State";
import HubSelector from "./HubSelector";
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import '../../Style/Home.css'; 


export default function Home({ homePageData, setHomePageData }) {
    const [stateList, setStateList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);
    const [cityId, setCityId] = useState(0);
    let [stateId, setStateId] = useState(0); // do not use state Shayad ! 

    console.log(citiesList);
    console.log("ajdlkj-> " + homePageData.pickupCity);
    const fun = () => {
        setHomePageData(prevData => ({ ...prevData, pickupCity: 5 }));
    }



    return (
        <section>
            <Navbar />
            <div className='home-page-container'>
                <Container className='home-form'>
                    <Row>
                        <Col style={{ minWidth: 'fit-content' }}>
                            <h5 className='home-header'>Make Reservation</h5>
                            <form>
                                <table className='tbl'>
                                    <tr>
                                        <td><label for='date'>Rental Date & Time :</label></td>
                                        <td><input type='datetime-local' id='date'></input></td>
                                    </tr>
                                    <tr>
                                        <td><label for='rdate'>Return Date & Time :</label></td>
                                        <td><input type='datetime-local' id='rdate'></input></td>
                                    </tr>
                                    <h6>Pickup Location</h6>
                                    <tr>
                                        <div>
                                            <td><label for='loc'>Enter Airport Code</label></td>
                                            <td><input type='text' id='loc'></input></td>
                                            <td><a href='#href'>Find Airport</a></td>
                                        </div>
                                    </tr>
                                    <h6>OR</h6>
                                    <tr>
                                        {/* <CityState datacityState={dataFromCityState} sendDataToParent={setDataFromCityState}></CityState>  */}
                                        <States setCitiesList={setCitiesList} stateList={stateList} setStateList={setStateList} stateId={stateId} setStateId={setStateId}></States>
                                        <Cities homePageData={homePageData} setHomePageData={setHomePageData} citiesList={citiesList} setCitiesList={setCitiesList} stateId={stateId} />
                                    </tr>
                                    <tr>
                                        <div>
                                            <td style={{ textAlign: 'end' }}><input type='checkbox'></input></td>
                                            <td>I may return the car to different location</td>
                                        </div>
                                    </tr>
                                    <h6>Return Location</h6>
                                    <tr>
                                        <div>
                                            <td><label for='loc'>Enter Airport Code</label></td>
                                            <td><input type='text' id='loc'></input></td>
                                            <td><a href='#href'>Find Airport</a></td>
                                        </div>
                                    </tr>
                                    <h6>OR</h6>

                                    <tr>
                                        {/* <CityState></CityState>  */}
                                        <States setCitiesList={setCitiesList} stateList={stateList} setStateList={setStateList} stateId={stateId} setStateId={setStateId}></States>
                                        <Cities homePageData={homePageData} setHomePageData={setHomePageData} citiesList={citiesList} setCitiesList={setCitiesList} stateId={stateId} />
                                    </tr>
                                    <tr><td><button><Link to='/hubselector' element={<HubSelector />}> Go to Hubs Selcector </Link></button></td></tr>
                                </table>
                            </form>
                        </Col>
                        {/* ... (other content) */}
                    </Row>
                </Container>
            </div>

        </section>
    )
}