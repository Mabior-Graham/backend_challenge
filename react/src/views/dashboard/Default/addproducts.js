import { useEffect, useState } from 'react';
import  { Navigate } from 'react-router-dom';
import Create from '../../pages/products/create';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Addproducts = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const user = localStorage.getItem("user");

    return user ? <Create />:<Navigate to = '../' />;
};


export default Addproducts;
