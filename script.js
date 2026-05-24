function login(){
    let user= document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    if(user=="swechhatmg" && pass=="simon123"){
        document.getElementById("message").innerHTML="Login Successful";
    }
    else{
        document.getElementById("message").innerHTML="Invalid login";
    }
}