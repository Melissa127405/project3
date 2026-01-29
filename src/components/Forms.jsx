import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Forms () {
    const [doodleName, setDoodleName] = useState(
        {   doodleName: '',
            doodleType: '',
            firstLast: '',
            contactEmail: ''
        }
    )
    function handleChange(event) {
      console.log (event.target.name);
    }
    

    return (

      <Container>
      <Row>
        <Col>
        <form> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doodle's Name</Form.Label>
        <Form.Control 
        type="text"  
        name="doodleName"
        value={doodleName.doodleName}
        onChange={handleChange}
        />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>What Type of Doodle?</Form.Label>
        <Form.Control 
        type="text "  
        name="doodleType"
        value={doodleName.doodleType}
        />
        </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your First and Last Name</Form.Label>
        <Form.Control 
        type="text"
        name="firstLast"
        value={doodleName.firstLast}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Email </Form.Label>
        <Form.Control 
        type="text" 
        name="contactEmail"
        value={doodleName.contactEmail}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="We will be in touch asap!" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form> 
</Col>
      </Row>
    </Container>

    )
}

export default Forms;