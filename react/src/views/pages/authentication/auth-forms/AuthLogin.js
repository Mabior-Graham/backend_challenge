import { useState } from 'react';
import { useSelector } from 'react-redux';
import  { Redirect, useNavigate } from 'react-router-dom';
// import { browserHistory } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = () => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);

    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [user, setuser] = useState([]);
    const [error, seterror] = useState("");
    const navigate = useNavigate();

    const loginuser = (e) =>{
    e.preventDefault();
    const data = {email,password}
    // console.warn("data",data)
    fetch(`http://localhost/fuel/public/auth/auth/login.json`, {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        if (resp == 404) {
            seterror("Invalid Login");
        }else{
            setuser(resp);
            localStorage.setItem('user', resp);
            const user = JSON.parse(localStorage.getItem('user'));
            
            navigate('/free/dashboard');
            location.reload();
        }
      })
    })
  }
  
    return (
        <form className="container p-5" onSubmit={loginuser}>
            <div className='text-danger'>{error}</div>
            <div className="mb-3 w-50">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
                />
            </div>
            <div className="mb-3 w-50">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Log In
            </button>
        </form>
    );
};

export default FirebaseLogin;
