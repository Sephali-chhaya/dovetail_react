import React from "react";
import http from "./http";
// import axios from "axios";
// import { dovetailContext } from "..";

// const server = useContext(dovetailContext);
function getAllResources(data){
    return http.post('/AllResources/GetAllResource',data);
  }

  const configServ = {
     getAllResources,
  }