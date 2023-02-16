
//document.getElementById
// document.addEventListener('DOMContentLoaded', function(e) {
//     console.log(e);
    
// });

/**
 * add an event listener to the username input field.
 * The type of the event is input. This function will called
 * each time the user types a value into the text field
 */
 document.getElementById('username').addEventListener('input', function(ev) {
    let usernameElement = ev.target;//element that triggered the event
    let username = usernameElement.value;//text value of the element field
    if((username.length > 3) && (username.match("^[a-zA-Z]"))){
        usernameElement.classList.add('valid');
        usernameElement.classList.remove('invalid');
    }else{
        usernameElement.classList.add('invalid');
        usernameElement.classList.remove('valid');
    }


    
});
var password
document.getElementById('password').addEventListener('input', function(ev) {
    let passwordElement = ev.target;//element that triggered the event
     password = passwordElement.value;//text value of the element field
    if((password.length > 7)&&(password.match("[a-zA-Z]"))&&(password.match("[0-9]"))&&(password.match("[(/)\-\+\!\@\#\$\^\&\~]"))){
        passwordElement.classList.add('valid');
        passwordElement.classList.remove('invalid');
    }else{
        passwordElement.classList.add('invalid');
        passwordElement.classList.remove('valid');
    }
});
document.getElementById('confirmpassword').addEventListener('input', function(ev) {
    let passwordElement = ev.target;//element that triggered the event
    var confirmpassword = passwordElement.value;//text value of the element field
    if(confirmpassword== password){
        passwordElement.classList.add('valid');
        passwordElement.classList.remove('invalid');
    }else{
        passwordElement.classList.add('invalid');
        passwordElement.classList.remove('valid');
    }
});