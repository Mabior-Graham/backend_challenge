function Confirmvalidate(password, confirmpassword) 
{
if(confirmpassword === password){
    return true;
   
}
return ("passwords doesn't match");
}
export default Confirmvalidate;