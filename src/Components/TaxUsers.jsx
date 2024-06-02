import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import Service from './Service/Service';
import axios from 'axios';


const TaxUsers = () => {


    const [user, setUser] = useState([]);

    useEffect(() => {
      
      const getAllUser = async () => {
        await Service.userLoginList().then((response) => {
          console.log(response.data);
          setUser(response.data);
  
        })
          .catch((err) => console.log(err));
      };
      getAllUser();
    })
    
    return (
      <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "3%", height: "540px", width: "800px", overflow: "auto", flexGrow: "1" }} className="card" >
        <div className='card-header'><h1 className="text-center">Users List</h1>
        </div>
        <div className='card-body1'>
          <table className="table table-striped " style={{ marginTop: 30 }} >
            <thead>

              <tr>
                <td><b>UserId</b></td>
                <td><b>UserName</b></td>
                <td><b>UserEmail</b></td>
                <td><b>Password</b></td>
              </tr>
            </thead>
            <tbody>
              {user.map((e) => (
                <tr key={e.userId}>
                  <td>{e.userId}</td>
                  <td>{e.userName}</td>
                  <td>{e.userEmail}</td>
                  <td>{e.password}</td>
                </tr>

              ))}
            </tbody>



          </table></div>
      </div>
    )
  }

export default TaxUsers;
