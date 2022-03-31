import { useState, useEffect } from 'react';
import { register } from 'serviceWorker';
import { ref } from 'yup';
import ValidateEmail from 'validations/validateEmail';
import Required from 'validations/required';
import Confirmvalidate from 'validations/confirmpassword';
import Validatepassword from 'validations/validatepassword';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = () => {

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");
  const [confirmpaserr, setconfirmpaserr] = useState("");

  const clearState = () => {
    setusername('')
    setemail('')
    setlastname('')
    setfirstname('')
    setpassword('')
    setconfirmpassword('')
}
  
  function registeruser(e)
  {
    e.preventDefault();
    if(password.length >= 6){
      if(password === confirmpassword){
        const data = {username,firstname,lastname,email,password}
        fetch(`http://localhost/fuel/public/auth/auth/register`, {
          method: 'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
        }).then((result) => {
          result.json().then((resp) => {
            setsuccess(resp)
            seterror("")
            clearState();
            // getstudents()
            // window.location.reload();
          })
        })
      }else{
        seterror("Passwords doesn't match")
      }
    }else{
      seterror("Password be atleast 6 characters")
    }
    
  }

  

  

  return (
    <form className="container p-4" onSubmit={registeruser}>
      <div className=''>{success}</div>
      <div className='text-danger'>{error}</div>
      <div className="mb-3 w-50">
        <label htmlFor="username" className="form-label">
          username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="fname" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fname"
          aria-describedby="emailHelp"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
          required
        />
        
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="lname" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lname"
          aria-describedby="emailHelp"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          required
        />
        
      </div>

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
        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="confirmpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmpassword"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
          required
        />

      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default FirebaseRegister;
