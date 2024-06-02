import './App.css';
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import UserRegister from './Components/UserRegister'
import UserInformationProvider from './Components/UserInformationProvider';
import AdminDashboard from './Dashboard/AdminDashboard';
import UserRequests from './Components/UserRequests';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaxUsers from './Components/TaxUsers';
import TaxPlans from './Components/TaxPlans';
import NavbarComp from './Components/NavbarComp';
import ViewRegimes from './Components/ViewRegimes';
import ViewSummary from './Components/ViewSummary';

function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/UserRegister" element={<UserRegister />} />
        <Route exact path="/UserLogin" element={<UserLogin />} />
        <Route exact path="/UserInformationProvider" element={<UserInformationProvider />} />
        <Route exact path="/AdminDashboard" element={<AdminDashboard />}></Route>
        <Route exact path="/AdminLogin" element={<AdminLogin />} />
        <Route exact path="/UserRequests" element={<UserRequests />} />
        <Route exact path='/TaxUsers' element={<TaxUsers/>} />
        <Route exact path='/TaxPlans' element={<TaxPlans/>} />
        <Route exact path='/ViewRegimes' element={<ViewRegimes/>} />
        <Route exact path='/ViewSummary' element={<ViewSummary/>} />
      </Routes>
    </Router>
  );
}

export default App;
