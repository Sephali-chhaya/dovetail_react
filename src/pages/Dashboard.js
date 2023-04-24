import React from "react";
import Button_header from "../Components/header/Button_header";
import ItemDetail from "../Components/customerItemDetail/ItemDetail";
import CustomerInfo from "../Components/customerInfo/CustomerInfo";
 const Dashboard = ()=>{
    return(
        <>
        <div className="mb-2"><Button_header/></div>
        <div className="mb-2"><CustomerInfo/></div>
        <div className="mb-2"><ItemDetail/></div>
        </>
    )
 }
 export default Dashboard;