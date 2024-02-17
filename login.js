var name1=document.getElementById('username')
var pswd=document.getElementById('password')

function validation(){
    var nameregexp= /^admin$/;
    var pswdregexp= /^12345$/;
    let valid=true;
    
    if(nameregexp.test(name1.value)){
        err2.innerText="valid"
        err2.style.color="green";
       }else{
           err2.innerText="invalid" 
           err2.style.color="red";
           return valid=false;
       }//name

       if (pswdregexp.test(pswd.value)) {
        err2.innerText="valid"
        err2.style.color="green";
    
    } else {
        err2.innerText="invalid"
        err2.style.color="red";
        return valid=false;
    }//password

    return valid;

}