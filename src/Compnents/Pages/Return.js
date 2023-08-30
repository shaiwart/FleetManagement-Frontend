import Navbar from "../PageNavigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Return() {

    const rowStyle = {
        border: '1px solid gray', // Add border
        backgroundColor: 'lightgray', // Add gray background color
        // padding: '10px', // Add padding for spacing
    };

    return (
        <>
            <Navbar />
            <Container>
                <Row style={rowStyle}>
                    <div className="section">
                        <div>
                            <h1>Return Page</h1> 
                            
                        </div>
                    </div>
                </Row>
            </Container>

        </>
    )
} 