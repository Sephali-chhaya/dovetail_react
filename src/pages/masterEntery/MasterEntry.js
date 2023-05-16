import React from "react";
import Category from "../../Components/masterEntry/Category";
import Batch from "../../Components/masterEntry/Batch";
import Units from "../../Components/masterEntry/Units";
 const MasterEntery = () =>{
    return(
        <>
         <div className=""><Category AddTitle={'Add Title'}/></div>
         <div className=""><Batch/></div>
         <div className=""><Units/></div>
        </>
    )
 }
 export default MasterEntery