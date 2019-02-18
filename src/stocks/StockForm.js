
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class StockForm extends Component {



    render(){
        return(
            <Form>
                <Col sm={4}>
                    <Form.Group controlId="formBasicEmail">    
                        <Form.Control type="email" placeholder="Add stocks to monitor." />
                    </Form.Group>
                </Col>
                <Col sm={4}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Form>
        );
    }

}



export default StockForm;