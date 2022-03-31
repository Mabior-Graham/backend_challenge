import { useEffect, useState } from 'react';
import  { Navigate } from 'react-router-dom';
// material-ui
import { Grid } from '@mui/material';
import Read from '../../pages/products/read';
// project imports
// import {AuthLogin} from '../pages/authentication/auth-forms/AuthLogin.js';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Viewproducts = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const user = localStorage.getItem("user");

    return user ? <Read />:<Navigate to = '../' />;
};

export default Viewproducts;
