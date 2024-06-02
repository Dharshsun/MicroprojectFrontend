import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../src/App.css';
import Service from './Service/Service';

const TaxPlans = () => {
    const navigate = useNavigate();
    const [regime, setRegime] = React.useState({
        taxRegimeId: "",
        taxRegimeCategory: "",
        agecategory: "",
        incomeAmount: "",
        taxPercentage: ""

    });

    const { taxRegimeCategory, agecategory, incomeAmount, taxPercentage } = regime;
    const handleChange = (e) => {
        setRegime({ ...regime, [e.target.name]: e.target.value });
    };

    const onsubmit = async (e) => {
        e.preventDefault();
        await Service.Addregime(regime);
        alert('Data inserted successfully');
        navigate("/AdminDashboard")
    };


    return (
        <div className="main">
            <h1 className="TaxSchema" data-testId="Taxschemaheader">Tax Schema for Users</h1>
            <div className="TaxSchemaTable">
                <form onSubmit={onsubmit}>

                    <label for="floatingInput">Tax Regime ID</label>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Regime ID"
                            name="taxRegimeId"
                            onChange={handleChange}
                            readOnly
                        // {...register("empId")}
                        />

                        {/* {errors.EmployeeID && <p className="error">Please fill this field</p>} */}
                    </div><br />
                    <div class="form-floating mb-3">
                        <label for="floatingInput" data-testId="labelcategory">Tax Regime Catgory</label>
                        <input
                            data-testid="categoryplaceholder"
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="taxRegimeCategory"
                            name="taxRegimeCategory"
                            value={taxRegimeCategory}
                            onChange={handleChange}
                        // {...register("taxRegimeCategory", { required: true })}
                        />

                        {/* {errors.LastName && <p className="error">Please fill this field</p>} */}
                    </div><br />
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Age Category</label>
                        <input
                            data-testid="ageplaceholder"
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Enter Age"
                            name="agecategory"
                            value={agecategory}
                            onChange={handleChange}

                        />
                    </div><br />
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Income Amount</label>
                        <input
                         data-testid="incomeAmount"
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="incomeAmount"
                            name="incomeAmount"
                            value={incomeAmount}
                            onChange={handleChange}

                        />
                    </div><br />
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Tax Percentage</label>
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="taxPercentage"
                            name="taxPercentage"
                            value={taxPercentage}
                            onChange={handleChange} />
                    </div><br />



                    <div class="form-floating mb-3">
                        <input type="submit" value="Add" class="btn btn-success"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaxPlans;
