
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StockManager from './StockManager.js';

class StockForm extends Component {

    constructor(props){
        super(props);
        this.state = { value: ''};
        this.formValue = '';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleClear(){
        this.stockManager.clear();
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event){    
        this.stockManager.addStock(
            this.formValue
        );
        this.setState({
            value: ''
        })
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm={4}>
                            <Form.Group controlId="formBasicEmail">    
                                <Form.Control inputRef={value => this.formValue = value} type="text" 
                                              placeholder="Add stocks to monitor." />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="outline-primary" onClick={this.handleSubmit} className="col-sm-12 col-md-3">
                                Submit
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="outline-danger" onClick={this.handleClear} className="col-sm-12 col-md-3">
                                    Clear
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <StockManager ref={ stockManager => this.stockManager = stockManager}>
                </StockManager>
            </div>
           
        );
    }

}



export default StockForm;