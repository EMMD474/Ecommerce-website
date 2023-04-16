const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const userError = document.getElementById("user_error");
const passwordError = document.getElementById("password_error");


form.addEventListener("submit", (e) => {
    
    let msg1 = [];
    let msg2 = [];
    
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();


    if(usernameValue === "" || usernameValue === null) {
        msg1.push("Username cannot be empty!");
        username.classList.toggle("active");
    }
    if(passwordValue === "" || passwordValue === null) {
        msg2.push("password cannot be empty!");
        password.classList.toggle("active");
    }
    if(msg1.length > 0 || msg2.length > 0) {
        e.preventDefault();
        userError.innerText = msg1;
        passwordError.innerText = msg2;
    }
})