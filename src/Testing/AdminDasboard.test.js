import { render, screen } from '@testing-library/react';
import AdminDashboard from '../Dashboard/AdminDashboard'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Dashboard header check',()=>{
    test('dashboard',()=>{
        render(<Router><AdminDashboard/></Router>)
        const header = screen.getByTestId("dashboard")
        expect(header).toBeInTheDocument("Dashboard")
    })
    
      test('Go to User Requests button is present', () => {
        render(<Router><AdminDashboard/></Router>);
        const button = screen.getByRole('button', { name: "Go to User Requests"});
        expect(button).toBeInTheDocument();
      });
      test('Add Tax Plans button is present', () => {
        render(<Router><AdminDashboard/></Router>);
        const button = screen.getByRole('button', { name: "Add Tax Plans"});
        expect(button).toBeInTheDocument();
      });
      test('Go to Users button is present', () => {
        render(<Router><AdminDashboard/></Router>);
        const button = screen.getByRole('button', { name: "Go to Users"});
        expect(button).toBeInTheDocument();
      });
})