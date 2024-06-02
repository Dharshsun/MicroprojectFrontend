import { render, screen } from '@testing-library/react';
import TaxPlans from '../Components/TaxPlans'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Taxschemaheader header check',()=>{
    test('Taxschemaheader',()=>{
        render(<Router><TaxPlans/></Router>)
        const header = screen.getByTestId("Taxschemaheader")
        expect(header).toBeInTheDocument("Tax Schema for Users")
    })
    test('categoryplaceholder',()=>{
        render(<Router><TaxPlans/></Router>)
        const placeholder = screen.getByTestId("categoryplaceholder")
        expect(placeholder).toBeInTheDocument("taxRegimeCategory")
    })
    test('ageplaceholder',()=>{
        render(<Router><TaxPlans/></Router>)
        const placeholder = screen.getByTestId("ageplaceholder")
        expect(placeholder).toBeInTheDocument("Enter Age")
    })
    test('incomeAmount',()=>{
        render(<Router><TaxPlans/></Router>)
        const placeholder = screen.getByTestId("incomeAmount")
        expect(placeholder).toBeInTheDocument("incomeAmount")
    })
      test('add button is present', () => {
        render(<Router><TaxPlans/></Router>);
        const button = screen.getByRole('button', { name: "Add"});
        expect(button).toBeInTheDocument();
      });
})