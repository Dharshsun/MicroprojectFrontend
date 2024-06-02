import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import Service from './Service/Service';
import axios from 'axios';


const ViewRegimes = () => {


    const [user, setUser] = useState([]);

    useEffect(() => {
      
      const getAllRegimes = async () => {
        await Service.ViewRegime().then((response) => {
          console.log(response.data);
          setUser(response.data);
  
        })
          .catch((err) => console.log(err));
      };
      getAllRegimes();
    })
    
    return (
      <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "3%", height: "540px", width: "800px", overflow: "auto", flexGrow: "1" }} className="card" >
        <div className='card-header'><h1 className="text-center">Tax Regimes</h1>
        </div>
        <div className='card-body2'>
          <table className="table table-striped " style={{ marginTop: 30 }} >
            <thead>

              <tr>
                <td><b>TaxRegimeId</b></td>
                <td><b>TaxRegimeCategory</b></td>
                <td><b>Agecategory</b></td>
                <td><b>IncomeAmount</b></td>
                <td><b>TaxPercentage</b></td>
              </tr>
            </thead>
            <tbody>
              {user.map((e) => (
                <tr key={e.taxRegimeId}>
                  <td>{e.taxRegimeId}</td>
                  <td>{e.taxRegimeCategory}</td>
                  <td>{e.agecategory}</td>
                  <td>{e.incomeAmount}</td>
                  <td>{e.taxPercentage}</td>
                  
                </tr>

              ))}
            </tbody>



          </table></div>
      </div>
    )
  }

export default ViewRegimes;
