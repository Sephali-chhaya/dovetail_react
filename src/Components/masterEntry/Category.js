import React,{UseState} from "react";
import { Col, Form, Row, FormCheck, Button} from "react-bootstrap";
 const Category = ({AddTitle}) =>{
    // const [addTitle,setAddTitle] = UseState(title)
    return(
        <>
        <div className="container-fluid" style={{backgroundColor:'#f0f0f5' }}>
            <h4 className="text-center mt-2">{AddTitle}</h4>
            <Form>
                <Row>
                    <Col sm='4'>
                    <Form.Label>Categorey Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Categorey" name="Categorey"/>
                    </Col>
                    <Col sm='4'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" name="Description"/>
                    </Col>
                    <Col sm='2'>
                    <Form.Check type="checkbox" label='Status'checked/>
                    </Col>
                    <Col sm='2'>
                    <Button variant="primary">Save</Button>
                    </Col>
                </Row>
            </Form>
            <br/>
        </div>
        </>
    )
 }
 export default Category