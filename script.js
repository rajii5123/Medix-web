const API ="https://medix-web-z5io.onrender.com" ;

async function uploadHuman() {
    let file = document.getElementById('humanImg').files[0];
    let formData = new FormData();
    formData.append("image", file);

    let res = await fetch(API + "/predict/human", {
        method: "POST",
        body: formData
    });

    let data = await res.json();
    document.getElementById("result").innerText = data.result;
}

async function uploadPlant() {
    let file = document.getElementById('plantImg').files[0];
    let formData = new FormData();
    formData.append("image", file);

    let res = await fetch(API + "/predict/plant", {
        method: "POST",
        body: formData
    });

    let data = await res.json();
    document.getElementById("result").innerText = data.result;
}

async function uploadReport() {
    let file = document.getElementById('reportFile').files[0];
    let formData = new FormData();
    formData.append("file", file);

    let res = await fetch(API + "/analyze/report", {
        method: "POST",
        body: formData
    });

    let data = await res.json();
    document.getElementById("result").innerText = data.analysis;
}
