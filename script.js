const API = "https://medi-x-backend-1--rajii5123a.replit.app";

async function uploadHuman() {
    const file = document.getElementById('humanImg').files[0];
    if (!file) {
        alert("Please select an image!");
        return;
    }

    document.getElementById("result").innerText = "Analyzing human disease...";

    const formData = new FormData();
    formData.append("image", file);

    try {
        const res = await fetch(`${API}/predict/human`, {
            method: "POST",
            body: formData
        });
        const data = await res.json();
        document.getElementById("result").innerText = data.result;
    } catch (err) {
        console.error(err);
        document.getElementById("result").innerText = "Error analyzing human disease.";
    }
}

async function uploadPlant() {
    const file = document.getElementById('plantImg').files[0];
    if (!file) {
        alert("Please select an image!");
        return;
    }

    document.getElementById("result").innerText = "Analyzing plant disease...";

    const formData = new FormData();
    formData.append("image", file);

    try {
        const res = await fetch(`${API}/predict/plant`, {
            method: "POST",
            body: formData
        });
        const data = await res.json();
        document.getElementById("result").innerText = data.result;
    } catch (err) {
        console.error(err);
        document.getElementById("result").innerText = "Error analyzing plant disease.";
    }
}

async function uploadReport() {
    const file = document.getElementById('reportFile').files[0];
    if (!file) {
        alert("Please select a report file!");
        return;
    }

    document.getElementById("result").innerText = "Analyzing blood report...";

    const formData = new FormData();
    formData.append("file", file);

    try {
        const res = await fetch(`${API}/analyze/report`, {
            method: "POST",
            body: formData
        });
        const data = await res.json();
        document.getElementById("result").innerText = data.analysis;
    } catch (err) {
        console.error(err);
        document.getElementById("result").innerText = "Error analyzing report.";
    }
}
