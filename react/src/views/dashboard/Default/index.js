import { useEffect, useState } from 'react';
import  { useNavigate, Navigate } from 'react-router-dom';
// material-ui
import { Grid } from '@mui/material';
import AuthLogin from '../../pages/authentication/auth-forms/AuthLogin';
// project imports
// import {AuthLogin} from '../pages/authentication/auth-forms/AuthLogin.js';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    const user = localStorage.getItem("user");
    return user ? <Navigate to = 'dashboard' /> : <AuthLogin />;
};

export default Dashboard;
