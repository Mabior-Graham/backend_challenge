function ValidateEmail(mail) 
{
if(mail == ""){
    return ("this field is Required");
}
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return ("You have entered an invalid email address!")
  
    
}
export default ValidateEmail;