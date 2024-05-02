
document.addEventListener("DOMContentLoaded", function() {
    let signUpForm = document.querySelector("#signUpForm");
        
    function doValidate(event) {
        event.preventDefault();    
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let email = document.querySelector("#email").value;
        let pw = document.querySelector("#password").value;
    //  Append firstName, email, and pw to the URL as query parameters
    window.location.href = "../HTML/checkedin.html?firstName=" + encodeURIComponent(firstName) + "&email=" + encodeURIComponent(email) + "&pw=" + encodeURIComponent(pw);
    }

    signUpForm.addEventListener("submit", doValidate);
       
    let cancelButton = document.querySelector("#cancelButton");

    cancelButton.addEventListener("click", function() {
    console.log("Button clicked!");
    window.location.href = "../index.html";
});
    
});

// Function to retrieve URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the firstName, email, and pw parameters from the URL
let firstName = getParameterByName('firstName');
let email = getParameterByName('email');
let pw = getParameterByName('pw');

// Set the welcome message
let welcome = document.querySelector(".welcome");
welcome.innerText = "Hello, " + firstName;

let userForm = document.querySelector("#userForm");
function validate(e){    
e.preventDefault();
let userEmail = document.querySelector("#userEmail").value;
let userPw = document.querySelector("#userPw").value;
// Check if userEmail and userPw match email and pw from login.html
if (userEmail === email && userPw === pw) {
    sessionStorage.setItem("userEmail", userEmail);
    sessionStorage.setItem("userPw", userPw);
    window.location.href = "../HTML/user.html";
} else {
    alert("Invalid email or password.");
}
}
userForm.addEventListener("submit", validate);

document.addEventListener("DOMContentLoaded", function() {
    let logoutBtn = document.querySelector("#logout");
    logoutBtn.addEventListener("click", function() {
        // Clear sessionStorage
        sessionStorage.clear();
        window.location.href = "../HTML/checkedin.html";
    });
});
