import { render, screen } from '@testing-library/react';
import AdminLogin from '../Components/AdminLogin'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Admin login header check',()=>{
    test('header check',()=>{
        render(<Router><AdminLogin/></Router>)
        const label = screen.getByTestId("adminHeader")
        expect(label).toBeInTheDocument("Admin Portal Login")
    })
    test('emailplaceholder',()=>{
        render(<Router><AdminLogin/></Router>)
        const placeholder = screen.getByTestId("emailplaceholder")
        expect(placeholder).toBeInTheDocument("Enter Email")
    })
    test('passwordplaceholder',()=>{
        render(<Router><AdminLogin/></Router>)
        const placeholder = screen.getByTestId("passwordplaceholder")
        expect(placeholder).toBeInTheDocument("Enter password")
    })
      test('user button is present', () => {
        render(<Router><AdminLogin/></Router>);
        const button = screen.getByRole('button', { name: "Login"});
        expect(button).toBeInTheDocument();
      });
})