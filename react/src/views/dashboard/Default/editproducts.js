import { useEffect, useState } from 'react';
import  { Navigate } from 'react-router-dom';
import Edit from 'views/pages/products/edit';
import Create from '../../pages/products/create';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Editproducts = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const user = localStorage.getItem("user");

    return user ? <Edit /> :<Navigate to = '../' />;
};


export default Editproducts;
