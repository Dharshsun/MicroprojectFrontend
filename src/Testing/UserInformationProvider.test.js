import { render, screen } from '@testing-library/react';
import UserInformationProvider from '../Components/UserInformationProvider'
import { BrowserRouter as Router } from 'react-router-dom';

describe('UserInformationProvider login header check',()=>{
    test('header check',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const label = screen.getByTestId("userinfoheader")
        expect(label).toBeInTheDocument("User Request Application for Tax Calculation")
    })
    test('name',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const label = screen.getByTestId("name")
        expect(label).toBeInTheDocument("Name")
    })
    test('useridplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("useridplaceholder")
        expect(placeholder).toBeInTheDocument("User ID")
    })
    test('nameplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("nameplaceholder")
        expect(placeholder).toBeInTheDocument("Enter name")
    })
    test('ageplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("ageplaceholder")
        expect(placeholder).toBeInTheDocument("Enter Age")
    })
    test('salaryplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("salaryplaceholder")
        expect(placeholder).toBeInTheDocument("Enter Salary")
    })
    test('hraplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("hraplaceholder")
        expect(placeholder).toBeInTheDocument("Enter HRA")
    })
    test('Additionalplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("Additionalplaceholder")
        expect(placeholder).toBeInTheDocument("Additional Income Resource")
    })
    test('AdditionalIncomeplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("AdditionalIncomeplaceholder")
        expect(placeholder).toBeInTheDocument("Additional Income")
    })
    test('PropertyTaxplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("PropertyTaxplaceholder")
        expect(placeholder).toBeInTheDocument("Property Tax Amount")
    })
    test('LoanAmountplaceholder',()=>{
        render(<Router><UserInformationProvider/></Router>)
        const placeholder = screen.getByTestId("LoanAmountplaceholder")
        expect(placeholder).toBeInTheDocument("Enter Loan Amount")
    })
   
    test('Submit button is present', () => {
        render(<Router><UserInformationProvider/></Router>);
        const button = screen.getByRole('button', { name: "Submit"});
        expect(button).toBeInTheDocument();
      });
})