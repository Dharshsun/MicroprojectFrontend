import React, { Component } from 'react'
import axios from 'axios';

const FetchAll = "http://localhost:1211/UserRequestsgetall"
const FetchAllUsers = "http://localhost:1211/Usergetall"
const addRegime = "http://localhost:1211/TaxRegimes"
const viewRegimes = "http://localhost:1211/AllRegimes"
const getSummarybyTaxId = "http://localhost:1211/UserRequestsgetbyUserId/";

class Service extends Component {
 
      userList = () =>{
        return axios.get(FetchAll);
            };
            userLoginList = () =>{
              return axios.get(FetchAllUsers);
            }
            Addregime = (regime) => {
              return axios.post(addRegime,regime);
            }
            ViewRegime = () =>{
              return axios.get(viewRegimes);
            }
            GetTaxSummary = (userId) =>{
             // userId = 4;
              console.log(userId)
              return axios.get(getSummarybyTaxId+userId);
            }
}

export default new Service();
