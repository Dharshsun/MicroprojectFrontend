import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Service from './Service/Service';
import axios from 'axios';


const UserRequests = () => {
  const status = "Approved";
  const formData = new FormData();
  formData.append('status', status);
  const [user, setUser] = useState([]);

  useEffect(() => {

    const getAllUser = async () => {
      await Service.userList().then((response) => {
        setUser(response.data.map(user => ({ ...user})));
      })
        .catch((err) => console.log(err));
    };
    getAllUser();
  }, []);
  const handleDelete = (Id) => {

    const confirm = window.confirm("Are you sure to deny this record?");
    if (confirm) {
      axios.delete(`http://localhost:1211/DeleteUserRequestById/${Id}`).then(() => {

        window.location.reload();
        alert("deleted successfully")
        window.location.reload();

      })
        .catch(error => console.error(error));
      window.location.reload();
    };
  }
  const handleApprove = async (Id) => {
    const confirm = window.confirm("Are you sure to approve this record?");
    if (confirm) {
      try {
        console.log(Id);
        console.log(status);
        await axios.put(`http://localhost:1211/update/${Id}/${status}`, { status: "Approved" });
        alert("Admin has approved");
      } catch (error) {
        console.error(error);
        alert("An error occurred while approving the user");
      }
    }
  }

  return (
    <div style={{ marginLeft: "1%", marginRight: "10%", marginTop: "3%", height: "500px", width: "1150px", overflow: "auto", flexGrow: "1" }} className="card" >
      <div className='card-header'><h1 className="text-center">Users Requests</h1>
      </div>
      <div className='card-body'>
        <table className="table table-striped " style={{ marginTop: 30 }} >
          <thead style={{ textWrap: 'wrap' }}>
            <tr>


            </tr>

            <tr>
              <td><h4>TaxId</h4></td>
              <td><h4>Age</h4></td>
              <td><h4>Salary</h4></td>
              <td><h4>Hra</h4></td>
              <td><h4>AdditionalIncome</h4></td>
              <td><h4>Income</h4></td>
              <td><h4>PropertyTaxAmount</h4></td>
              <td><h4>LoanAmount</h4></td>
              <td><h4>CalculatedTax</h4></td>
              <td><h4>ApprovalStatus</h4></td>
              <td><h4>Status</h4></td>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {user.map((e) => (
              <tr key={e.taxId}>
                <td >{e.taxId}</td>
                {/* <td>{e.userName}</td> */}
                <td>{e.age}</td>
                <td>{e.salary}</td>
                <td>{e.hra}</td>
                <td>{e.additionalIncomeResource}</td>
                <td>{e.additionalIncome}</td>
                <td>{e.propertyTaxAmount}</td>
                <td>{e.loanAmount}</td>
                <td>{e.calculatedTax}</td>
                <td>{e.status}</td>


                <td><input type="submit" value="Deny" id='Delete'
                  class="btn btn-danger" name="btn" onClick={() => handleDelete(e.taxId)} /></td>
                <td><input type="submit" value="Approve" id='Approve' class="btn btn-success" name="btn" onClick={() => handleApprove(e.taxId)} /></td>
              </tr>


            ))}
          </tbody>



        </table></div>
    </div>
  )
}

export default UserRequests;
