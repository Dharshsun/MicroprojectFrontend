import { render, screen } from '@testing-library/react';
import Home from '../Components/Home'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home header check',()=>{
    test('header check',()=>{
        render(<Router><Home/></Router>)
        const label = screen.getByTestId("Header")
        expect(label).toBeInTheDocument("Welcome to E-Tax Management")
    })
    test('header check',()=>{
        render(<Router><Home/></Router>)
        const label = screen.getByTestId("headertext")
        expect(label).toBeInTheDocument("Be aware of the  tax Payment deadlines")
    })

})