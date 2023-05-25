import React from "react";
import { Button, Container, Row, Col,ContainerFluid } from "react-bootstrap";
import { Tooltip, IconButton } from "@material-ui/core";
import { ArrowClockwise, SaveFill, XSquareFill } from "react-bootstrap-icons";

const Button_header = (reset, save, close) => {
    return (
        <>
            <div className="container-fluid mt-3">
                <Row>
                    <Col sm={5}>
                        <Tooltip title="INVOICE ORDER" placement="right">
                            <Button variant="primary">Inv Order</Button>
                        </Tooltip>
                    </Col>
                    <Col sm={4}><h4>Add Invocies</h4></Col>
                    <Col sm={1}>
                        <Tooltip title="RESET" placement="right">
                            <ArrowClockwise color="orange" size={30} data-tip data-for="Arrow" />
                        </Tooltip>
                    </Col>
                    <Col sm={1}>
                        <Tooltip title="SAVE" placement="right">
                            <SaveFill color="green" size={30} />
                        </Tooltip>
                    </Col>
                    <Col sm={1}>
                        <Tooltip title="CLOSE" placement="right">
                            <XSquareFill color="red" size={30} />
                        </Tooltip>
                    </Col>
                </Row>





            </div>

        </>
    )
}
export default Button_header;