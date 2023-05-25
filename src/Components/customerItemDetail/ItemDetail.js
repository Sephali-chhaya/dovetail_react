import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Plus, TrashFill } from "react-bootstrap-icons";
const ItemDetail = (props) => {
    const [data, setData] = useState([{
        Item_Name: "",
        Item_Code: "",
        Pkg: "",
        Code: "",
        Qty: "",
        Rate: "",
        Discount: "",
        Tax_Amount: "",
        Amount: ""
    }])

    const handleAddField = (e) => {
        e.preventDefault();
        setData([...data,
        {
            Item_Name: "",
            Item_Code: "",
            Pkg: "",
            Code: "",
            Qty: "",
            Rate: "",
            Discount: "",
            Tax_Amount: "",
            Amount: ""
        }])
    }
    const handleChange = (e, i) => {
        const { name, value } = e.target;
        const valueChng = [...data];
        valueChng[i][name] = value;
        setData(valueChng);
        const res = JSON.stringify(valueChng);
        console.log(res);

    }

    const handleDelete = (i) => {
        const delValue = [...data]
        delValue.splice(i, 1)
        setData(delValue)
    }
    return (
        <>
<<<<<<< HEAD
            <Container style={{ background: '#f7e6ff' }}>
=======
            <div className="container-fluid" style={{ background: '#f7e6ff' }}>
>>>>>>> master
                <Form>{
                    data.map((val, i) =>
                        <Row>
                            <Col sm='2'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Item Name(Code)</Form.Label>
                                    <Plus color="blue" size={30} />
                                    <Form.Control type="text" placeholder="Item Name" name="Item_Name" value={val.Item_Name} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='1'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Item Code</Form.Label>
                                    <Form.Control type="text" placeholder="Item Code" name="Item_Code" value={val.Item_Code} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='1'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Pkg Unit</Form.Label>
                                    <Form.Control type="text" placeholder="" name="Pkg" value={val.Pkg} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='1'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>HNS</Form.Label>
                                    <Form.Control type="text" placeholder="#Code" name="Code" value={val.Code} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='1'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="text" placeholder="Qty" name="Qty" value={val.Qty} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='1'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Rate</Form.Label>
                                    <Form.Control type="text" placeholder="Rate" name="Rate" value={val.Rate} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='1'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Discount</Form.Label>
                                    <Form.Control type="text" placeholder="0" name="Discount" value={val.Discount} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='2'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Tax Amount</Form.Label>
                                    <Form.Control type="text" placeholder="Tax Amount" name="Tax_Amount" value={val.Tax_Amount} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='1'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="text" placeholder="Amount" name="Amount" value={val.Amount} onChange={(e) => handleChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col sm='1'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Add</Form.Label><br />
                                    {
                                        data.length !== 1 && <>
                                            <TrashFill color="red" size={20} onClick={() => handleDelete(i)} />
                                        </>
                                    }
                                    {
                                        data.length - 1 === i &&
                                        <Plus color="green" size={30} onClick={handleAddField} />
                                    }

                                </Form.Group>
                            </Col>

                            {/* {
                
                
            
                 <><Col sm="2">
                        <Form.Group className="mb-3" controlId="">
                            <Form.Control type="text" placeholder="Item Name" name="Item_Name" value={val.Item_Name} onChange={(e) => handleChange(e, i)} />
                        </Form.Group></Col><Col sm="1">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="text" placeholder="Item Code" name="Item_Code" value={val.Item_Code} onChange={(e) => handleChange(e, i)} />
                            </Form.Group></Col><Col sm="1">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="text" placeholder="" name="Pkg" value={val.Pkg} onChange={(e) => handleChange(e, i)} />
                            </Form.Group></Col><Col sm="1">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="text" placeholder="#Code" name="Code" value={val.Code} onChange={(e) => handleChange(e, i)} />
                            </Form.Group></Col><Col sm="1">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="text" placeholder="Qty" name="Qty" value={val.Qty} onChange={(e) => handleChange(e, i)} />
                            </Form.Group></Col><Col sm="1">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="text" placeholder="Rate" name="Rate" value={val.Rate} onChange={(e) => handleChange(e, i)} />
                            </Form.Group></Col><Col sm="1">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="text" placeholder="0" name="Discount" value={val.Discount} onChange={(e) => handleChange(e, i)} />
                            </Form.Group></Col><Col sm="2">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="text" placeholder="Tax Amount" name="Tax_Amount" value={val.Tax_Amount} onChange={(e) => handleChange(e, i)} />
                            </Form.Group></Col><Col sm="1">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control type="text" placeholder="Amount" name="Amount" value={val.Amount} onChange={(e) => handleChange(e, i)} />
                            </Form.Group></Col><Col sm="1">
                            <Form.Group className="mb-3" controlId="">
                                {
                                    data.length !==1 &&<>
                                    <TrashFill color="red" size={20} onClick={() => handleDelete(i)} />
                                    </>
                                }
                                {
                                    data.length-1 === i &&
                                    <Plus color="green" size={30} onClick={handleAddField} />
                                }
                                
                            </Form.Group></Col></> 
                 
                )
            } */}
                        </Row>
                    )}
                </Form>
<<<<<<< HEAD
            </Container>
=======
            </div>
>>>>>>> master
        </>
    )
};
export default ItemDetail;
