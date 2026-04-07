const API = "https://medi-x-backend-1--rajii5123a.replit.app"; // replace with your backend URL

async function uploadHuman() {
    const file = document.getElementById('humanImg').files[0];
    if(!file){ alert("Select a file"); return; }
    document.getElementById("result").innerText = "Analyzing human disease...";
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch(`${API}/predict/human`, {method:"POST", body:formData});
    const data = await res.json();
    document.getElementById("result").innerText = data.result;
}

async function uploadPlant() {
    const file = document.getElementById('plantImg').files[0];
    if(!file){ alert("Select a file"); return; }
    document.getElementById("result").innerText = "Analyzing plant disease...";
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch(`${API}/predict/plant`, {method:"POST", body:formData});
    const data = await res.json();
    document.getElementById("result").innerText = data.result;
}

async function uploadReport() {
    const file = document.getElementById('reportFile').files[0];
    if(!file){ alert("Select a file"); return; }
    document.getElementById("result").innerText = "Analyzing blood report...";
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API}/analyze/report`, {method:"POST", body:formData});
    const data = await res.json();
    document.getElementById("result").innerText = data.analysis;
}
