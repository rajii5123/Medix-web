function login(){
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(user === "admin" && pass === "admin"){
        window.location.href = "dashboard.html";
    } else {
        const msg = document.getElementById('login-msg');
        msg.innerText = "Invalid username or password";
        msg.style.color = "red";
    }
}
