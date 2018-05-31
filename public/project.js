/*project.js
Name: Paulus Angkodjojo
Student Number: 21972051*/

var express = require('express');
var app = express();
//opening jade files
app.get('/about',function(req,res)){
	res.render('aboutme',{title:'aboutme'});
})

//Password validation for log in
function UserValidate() {
    var name = /^[a-zA-Z]+$/
    document.getElementById('PasswordError').innerHTML = '';
    if (document.getElementById("Password").value.length < 6 || document.getElementById("Password").value.length > 12) {
        document.getElementById('PasswordError').innerHTML = 'Incorrect Password';
        return false;
    }
}

//Validations for sign up
function Validate() {
    var name = /^[a-zA-Z]+$/
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/
    document.getElementById('FirstNameError').innerHTML = '';
    document.getElementById('LastNameError').innerHTML = '';
    document.getElementById('EmailError').innerHTML = '';
    document.getElementById('PasswordError').innerHTML = '';

    if(!name.test(document.getElementById("FirstName").value)){
        document.getElementById('FirstNameError').innerHTML = 'Please enter valid name';
        return false;
    }
    if (!name.test(document.getElementById("LastName").value)) {
        document.getElementById('LastNameError').innerHTML = 'Please enter valid name';
        return false;
    }
    if (!email.test(document.getElementById("Email").value)) {
        document.getElementById('EmailError').innerHTML = 'Please enter valid email';
        return false;
    }
    if (document.getElementById("Password").value.length < 6 || document.getElementById("Password").value.length > 12){
        document.getElementById('PasswordError').innerHTML = 'Password is too long/short';
        return false;
    }
}

function modDate(){
    var x= new Date(document.lastModified);
	document.getElementById("Date").innerHTML = x;
}