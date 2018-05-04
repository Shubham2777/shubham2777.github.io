function validateForm()
{
    var f=document.forms["contact"]["Firstname"].value;
    var l=document.forms["contact"]["Lastname"].value;
    var e=document.forms["contact"]["email"].value;
       
    
    if (f==null || f=="")
    {
        alert("First name is required");
        return false;
    }
    
    if (l==null || l=="")
    {
        alert("Last name is required");
        return false;
    }
    
    if (e==null || e=="" || e.indexOf("@") == -1)
    {
        alert("Email in  abc@email.com format is required");
        return false;
    }
    return true;
}