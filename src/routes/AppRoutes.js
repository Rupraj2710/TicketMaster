import React from 'react';
import { Routes,Route,BrowserRouter ,Link} from 'react-router-dom';
import Navbar from '../components/UI/Navbar';
import Login from '../pages/Login';
import Departments from '../pages/Departments';
import Employee from '../pages/Employee';
import Ticket from '../pages/Ticket'


const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='Login' element={<Login></Login>}></Route>
                    <Route path='Departments' element={<Departments></Departments>}></Route>
                    <Route path='Employee' element={<Employee></Employee>}></Route>
                    <Route path='Ticket' element={<Ticket></Ticket>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;