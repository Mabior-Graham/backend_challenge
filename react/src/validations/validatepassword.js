function Validatepassword(password) 
{
if(password == ""){
    return ("this field is Required");
}
if(password.length < 6){
    return ("password should be atleast 6 characters");
}
return true
 
}
export default Validatepassword;