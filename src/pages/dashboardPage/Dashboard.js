import React, { useContext } from "react";
import { Col, Container, Form, Row, FormCheck} from "react-bootstrap";
import Button_header from "../../Components/header/button/Button_header";
import ItemDetail from "../../Components/customerItemDetail/ItemDetail";
import CustomerInfo from "../../Components/customerInfo/CustomerInfo";
import { dovetailContext } from "../..";
import Header from "../../Components/header/dashboardHeader/Header";
import SideBar from "../../Components/sidebar/SideBar";

import MiniDrawer from "../../Components/sidebar/SideBar2";
const Dashboard = () => {
    // const server = useContext(dovetailContext);
    return (

        <>
        <Row>
           <Col sm={12} > <div className="mb-2"><Header/></div></Col>
        </Row>
        <Row>
            <Col sm={2}>
            <div className=""><SideBar /></div>
            </Col>
            <Col sm={10}>
            <div className="mb-2"><Button_header /></div>
            <div className="mb-2"><CustomerInfo /></div>
            <div className="mb-2"><ItemDetail /></div>
            </Col>
        </Row>
            
            {/* <h2>{server}</h2> */}
        </>
    )
}
export default Dashboard;