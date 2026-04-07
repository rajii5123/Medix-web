function detect() {
    let result = document.getElementById("result");

    result.innerHTML = "Analyzing...";

    setTimeout(() => {
        result.innerHTML = "Disease Detected: Skin Infection";
    }, 2000);
}

function logout() {
    window.location.href = "login.html";
}
