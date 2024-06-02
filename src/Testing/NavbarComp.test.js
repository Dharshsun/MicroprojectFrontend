import { render, screen } from '@testing-library/react';
import NavBarComp from '../Components/NavBarComp'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home header check',()=>{
    test('header check',()=>{
        render(<Router><NavBarComp/></Router>)
        const label = screen.getByTestId("Navbar Header")
        expect(label).toBeInTheDocument("E-Tax Management System")
    })
    test('Admin button is present', () => {
        render(<Router><NavBarComp/></Router>);
        const button = screen.getByRole('button', { name: "Admin"});
        expect(button).toBeInTheDocument();
      });
      test('user button is present', () => {
        render(<Router><NavBarComp/></Router>);
        const button = screen.getByRole('button', { name: "User"});
        expect(button).toBeInTheDocument();
      });
})