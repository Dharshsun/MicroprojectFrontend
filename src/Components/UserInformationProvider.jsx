import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function UserInformationProvider() {
  const [file, setFile] = useState(null);
  const [taxId, setTaxId] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [hra, setHra] = useState('');
  const [additionalIncomeResource, setAdditionalIncomeResource] = useState('');
  const [additionalIncome, setAdditionalIncome] = useState('');
  const [propertyTaxAmount, setPropertyTaxAmount] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [docName, setDocName] = useState('');
  const [docType, setDocType] = useState('');
  const [docData, setDocData] = useState('');
  const [state, setState] = useState('')
  const [tax, setTax] = useState('')
  const [taxData, setTaxData] = useState([]);
  const [calculatedTax, setCalculatedTax] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.getItem('session');
    const formData = new FormData();
    formData.append('taxId', taxId);
    formData.append('userId', userId);
    formData.append('userName', userName);
    formData.append('age', age);
    formData.append('salary', salary);
    formData.append('hra', hra);
    formData.append('additionalIncomeResource', additionalIncomeResource);
    formData.append('additionalIncome', additionalIncome);
    formData.append('propertyTaxAmount', propertyTaxAmount);
    formData.append('loanAmount', loanAmount);
    formData.append('docName', docName);
    formData.append('docType', docType);
    formData.append('file', file);
    formData.append('calculatedTax', calculatedTax);


    fetch('http://localhost:1211/insertUserData', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Uploaded Tax Details successfully");
        console.log('tax page', data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);

  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const calculateTax = () => {
    try {
      console.log("calculateTax function called");

      let totalIncome = parseFloat(salary) + parseFloat(hra) + parseFloat(additionalIncome);
      let deductible = parseFloat(propertyTaxAmount) + parseFloat(loanAmount);
      let tax;

      console.log(`Total Income: ${totalIncome}, Deductible: ${deductible}`);

      if (age < 60) {
        if (totalIncome <= 700000) {
          tax = 0;
        } else if (totalIncome <= 1000000) {
          tax = 0.05 * (totalIncome - 700000);
        } else {
          tax = 0.3 * (totalIncome - 1000000) + 11250;
        }
      } else {
        if (totalIncome <= 700000) {
          tax = 0;
        } else if (totalIncome <= 1000000) {
          tax = 0.05 * (totalIncome - 700000);
        } else {
          tax = 0.3 * (totalIncome - 1000000) + 11000;
        }
      }

      tax = tax - deductible;

      console.log(`Calculated Tax: ${tax}`);
      setCalculatedTax(tax);

      return tax > 0 ? tax : 0;
    } catch (error) {
      console.error(`Error in calculateTax function: ${error}`);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate("/")
  }

  const isEnrolled = (status) => {
    return status === "Approved";
  };

  const handleApproveRecord = (taxId) => {
  };

  console.log("checkcalculatedtax", calculatedTax);


  return (
    <div className="main">

      <h1 style={{ textAlign: 'center' }} data-testId="userinfoheader">User Request Application for Tax Calculation</h1>
      <a href='/ViewRegimes'><button className="btn btn-primary" style={{ float: "left" }}>View Regimes</button></a>
      <div className="container">
        <button className="btn btn-primary" style={{ float: "right" }} onClick={handleLogout}>LogOut</button>
        <a href='/ViewSummary'><button onClick={handleClose} className="btn btn-primary" style={{ float: "right" }}>TaxBill</button></a>
        <h4 className='Disclaimer1'>Please give correct Details before clicking on Submit Button</h4>
        <p className='Disclaimer1'>Please Calculate your estimated tax Before Submission By clicking Submit Button</p>
        <div className='InputContainer3'>
          <form style={{ padding: 10 }} onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <label htmlFor="floatingUserId" data-userId="userId">User ID</label>
              <input
                data-testId="useridplaceholder"
                type="number"
                className="form-control"
                id="floatingUserId"
                placeholder="User ID"
                value={userId}

                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingUserId" data-testId="name">Name</label>
              <input
                data-testId="nameplaceholder"
                type="text"
                className="form-control"
                id="floatingUserId"
                placeholder="Enter name"
                value={userName}

                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingSalary">Enter Age</label>
              <input
              data-testId="ageplaceholder"
                type="number"
                className="form-control"
                id="floatingSalary"
                placeholder="Enter Age"
                value={age}
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingSalary">Salary</label>
              <input
              data-testId="salaryplaceholder"
                type="number"
                className="form-control"
                id="floatingSalary"
                placeholder="Enter Salary"
                value={salary}
                required
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingHra">HRA</label>
              <input
              data-testId="hraplaceholder"
                type="number"
                className="form-control"
                id="floatingHra"
                placeholder="Enter HRA"
                value={hra}
                required
                onChange={(e) => setHra(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingAdditionalIncomeResource">Additional Income Resource</label>
              <input
                data-testId="Additionalplaceholder"
                type="text"
                className="form-control"
                id="floatingAdditionalIncomeResource"
                placeholder="Additional Income Resource"
                value={additionalIncomeResource}
                required
                onChange={(e) => setAdditionalIncomeResource(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingAdditionalIncome">Additional Income</label>
              <input
              data-testId="AdditionalIncomeplaceholder"
                type="number"
                className="form-control"
                id="floatingAdditionalIncome"
                placeholder="Additional Income"
                value={additionalIncome}
                required
                onChange={(e) => setAdditionalIncome(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingPropertyTaxAmount">Property Tax Amount</label>
              <input
              data-testId="PropertyTaxplaceholder"
                type="text"
                className="form-control"
                id="floatingPropertyTaxAmount"
                placeholder="Property Tax Amount"
                value={propertyTaxAmount}
                required
                onChange={(e) => setPropertyTaxAmount(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingLoanAmount">Loan Amount</label>
              <input
              data-testId="LoanAmountplaceholder"
                type="text"
                className="form-control"
                id="floatingLoanAmount"
                placeholder="Enter Loan Amount"
                value={loanAmount}
                required
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="fileInput">Upload Document</label>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
              />
              {file && (
                <img
                  alt="Uploaded"
                  src={URL.createObjectURL(file)}
                  style={{ width: 100, height: 100 }}
                />
              )}
            </div><br />
            <div className='calculate'>
              <button type="button" className='btn btn-primary' onClick={calculateTax}>Calculate Tax</button>
              {/* <h2>Calculated Tax: {calculatedTax}</h2> */}
            </div><br />
            <div className="form-floating mb-3">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div><br></br>

          </form>

        </div>

        {/* <button
                    className="btn btn-lg"
                    onClick={() => handleApproveRecord(tax.taxId)}
                    disabled={isEnrolled(tax.status)} // Disable if already enrolled
                  >
                    {isEnrolled(tax.status) ? 'Pending' : 'Approved'}
                  </button> */}
        {/* <a href='/ViewSummary'><button className="btn btn-primary" style={{float:"right"}} onClick={disableSummary} >View Summary</button></a> */}
      </div>
    </div>
  );
}

export default UserInformationProvider;

