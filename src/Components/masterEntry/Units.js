import React,{useState} from "react";
import { Col, Form, Row, FormCheck, Button} from "react-bootstrap";
 const Units = () =>{
    const[simple,setSimple] =  useState(false);
    const[compound,setCompound] =  useState(false);
    const handleChange = (e) =>{
        let data = e.target.value;
        console.log("data",data);
        if (data == 'Simple'){
            setSimple(true);
            setCompound(false);
        }
        else if(data == 'Compound'){
            setSimple(false);
            setCompound(true);
        }

    }
    return(
        <>
        <h4 className="text-center mt-2">Add Units</h4>
            <Form>
                <Row>
                    <Col sm='3'>
                    <Form.Label>Type of Units</Form.Label>
                    <Form.Select onChange={handleChange}>
                        <option value={'Simple'} >Simple</option>
                        <option value={'Compound'} >Compound</option>
                    </Form.Select>
                    </Col>
                   <Col sm='3'>
                    <Form.Label>Units Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Units Name" name="U_Name"/>
                    </Col>
                    <Col sm='3'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" name="Description"/>
                    </Col>
                    {((simple == false)  && (compound == true)) && <>
                    <Col sm='3'>
                     <Form.Label>Derive Unit</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" name="Description"/>
                    </Col>
                    <Col sm='3'>
                    <Form.Label>Conversion factor</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" name="Description"/>
                    </Col></>}
                    <Col sm='1'>
                    <Form.Check type="checkbox" label='Status'checked/>
                    </Col>
                    <Col sm='2'>
                    <Button variant="primary">Save</Button>
                    </Col>
                </Row>
            </Form> 
            <br/>
        </>
    )
 }
 export default Units