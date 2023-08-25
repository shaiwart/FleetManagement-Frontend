<div className="background-image">


                <Container className='container ' >
                    <Row>
                        <Col style={{ minWidth: 'fit-content' }}> 
                            <h5>Make Reservation</h5> 
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
                        {/* <Col className='homecol2'>2 of 2</Col> */}
                    </Row>

                </Container>
            </div>
