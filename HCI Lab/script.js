function validateform(event){
    event.preventDefault();
    register=document.getElementById("register");
    username=document.getElementById("username");
    password=document.getElementById("password");
    confirmpassword=document.getElementById("confirmpassword");
    date=document.getElementById("date");
    male=document.getElementById("malegend");
    female=document.getElementById("femalegend");
    notsay=document.getElementById("prefer");
    policy=document.getElementById("policy");
    req=document.getElementById("req");

    if(username.value.length<4){
        req.innerHTML="Your username should be at least 5 characters!";
        alert("Your username should be at least 5 characters!");
    }
    else if(!password.value){
        req.innerHTML="Please input the password!";
        alert("Please input the password!");
    }
    else if(!isAlphanumeric(password.value)){
        req.innerHTML="Password must be alphanumeric!";
        alert("Password must be alphanumeric!");
    }
    else if (password.value.length<7){
        req.innerHTML="Password must be at least 8 characters!";
        alert("Password must be at least 8 characters!");
    }
    else if(password.value!=confirmpassword.value){
        req.innerHTML="Password doesn't match!";
        alert("Password doesn't match!");
    }
    else if(!date.value){
        req.innerHTML="Please input your date of birth!";
        alert("Please input date of birth");
    }
    else if(!(male.checked||female.checked)){
        req.innerHTML="Gender must be selected";
        alert("Gender must be selected");
    }
    else if(!policy.checked){
        req.innerHTML="You must agree to our term & conditions";
        alert("You must agree to our term & conditions");
    }
    else{
        req.innerHTML="";
        alert("Sign up succeed");
        register.submit();
    }
}

function isAlphanumeric(pw){
    var alpha=false;
    var num=false;
    for(let i=0;i<pw.length;i++){
        if(!isNaN(pw[i])){
            num=true;
        }
        else{
            alpha=true;
        }
        if(alpha && num){
            return true;
        }
    }
}

function validatelog(event){
    event.preventDefault();
    login=document.getElementById("login");
    username=document.getElementById("username1");
    password=document.getElementById("password1");
    req=document.getElementById("req");

    if(username.value!="Tester"){
        req.innerHTML="Username doesn't exist!";
        alert("Username doesn't exist!");
    }
    else if(password.value!="Tester123"){
        req.innerHTML="Wrong Password!";
        alert("Wrong Password!");
    }
    else{
        req.innerHTML="";
        alert("Welcome to Jetflix!");
        login.submit();
    }
}