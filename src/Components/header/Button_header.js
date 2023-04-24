import React from "react";
import { Button,Container,Row,Col } from "react-bootstrap";
import {Tooltip, IconButton} from "@material-ui/core"; 
import { ArrowClockwise, SaveFill, XSquareFill} from "react-bootstrap-icons";

const Button_header = (reset,save,close) =>{
return(
    <>
    <Container className="mt-3">
        <Row>
            <Col sm={5}>
                <Tooltip title="INVOICE ORDER" placement="right"><IconButton>
                <Button variant="primary">Inv Order</Button>
                </IconButton></Tooltip>
            </Col>
            <Col sm={4}><h4>Add Invocies</h4></Col>
            <Col sm={1}>
                <Tooltip title="RESET" placement="right"><IconButton>
                    <ArrowClockwise color="orange" size={30} data-tip data-for="Arrow"/>
                    </IconButton></Tooltip>
            </Col>
            <Col sm={1}>
                <Tooltip title="SAVE" placement="right"><IconButton>
                    <SaveFill color="green" size={30}/>
                    </IconButton></Tooltip>
            </Col>
            <Col sm={1}>
                <Tooltip title="CLOSE" placement="right"><IconButton>
                    <XSquareFill color="red" size={30}/>
                    </IconButton></Tooltip>
            </Col>      
        </Row>
      
 
   
  

    </Container>
    
    </>
)
}
export default Button_header;