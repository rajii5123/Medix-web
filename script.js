const API = "https://medi-x-backend-1--rajii5123a.replit.app";

// Human Disease
async function uploadHuman(){
    const file = document.getElementById('humanImg').files[0];
    if(!file){ alert("Select a file"); return; }
    document.getElementById("result").innerText = "Analyzing human disease...";
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch(`${API}/predict/human`, {method:"POST", body:formData});
    const data = await res.json();
    document.getElementById("result").innerText = data.result;
}

// Plant Disease
async function uploadPlant(){
    const file = document.getElementById('plantImg').files[0];
    if(!file){ alert("Select a file"); return; }
    document.getElementById("result").innerText = "Analyzing plant disease...";
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch(`${API}/predict/plant`, {method:"POST", body:formData});
    const data = await res.json();
    document.getElementById("result").innerText = data.result;
}

// Blood Report
async function uploadReport(){
    const file = document.getElementById('reportFile').files[0];
    if(!file){ alert("Select a file"); return; }
    document.getElementById("result").innerText = "Analyzing blood report...";
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API}/analyze/report`, {method:"POST", body:formData});
    const data = await res.json();
    document.getElementById("result").innerText = data.analysis;
}

// Medicine Tracker
function addMedicine(){
    const name = document.getElementById('medName').value;
    const time = document.getElementById('medTime').value;
    if(name && time){
        const li = document.createElement('li');
        li.innerText = `${name} - ${time}`;
        document.getElementById('medList').appendChild(li);
        document.getElementById('medName').value = "";
        document.getElementById('medTime').value = "";
    }
}

// Patient Health Notes
function saveHealthNotes(){
    const notes = document.getElementById('healthNotes').value;
    if(notes){
        localStorage.setItem('healthNotes', notes);
        document.getElementById('healthMsg').innerText = "Notes saved!";
    }
}

// Load saved notes
window.onload = () => {
    const saved = localStorage.getItem('healthNotes');
    if(saved) document.getElementById('healthNotes').value = saved;
};

// Nearby Hospitals
const hospitalsData = {
    "Chennai": ["Apollo Hospital", "MIOT Hospital", "Fortis Malar"],
    "Bangalore": ["Manipal Hospital", "Fortis Hospital", "Narayana Health"],
    "Mumbai": ["Lilavati Hospital", "Breach Candy Hospital", "Hiranandani Hospital"]
};
function findHospitals(){
    const city = document.getElementById('location').value;
    const list = document.getElementById('hospitalList');
    list.innerHTML = "";
    if(hospitalsData[city]){
        hospitalsData[city].forEach(hospital => {
            const li = document.createElement('li');
            li.innerText = hospital;
            list.appendChild(li);
        });
    } else {
        list.innerHTML = "<li>No hospitals found</li>";
    }
}

// Diet Planner
const dietData = {
    "Anemia": ["Spinach", "Beef", "Eggs", "Lentils", "Vitamin C fruits"],
    "Normal": ["Balanced diet", "Vegetables", "Fruits", "Proteins", "Whole grains"],
    "Diabetes": ["Oats", "Green vegetables", "Lean protein", "Low sugar fruits", "Nuts"]
};
function showDiet(){
    const cond = document.getElementById('dietCondition').value;
    const list = document.getElementById('dietList');
    list.innerHTML = "";
    if(dietData[cond]){
        dietData[cond].forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            list.appendChild(li);
        });
    } else {
        list.innerHTML = "<li>Select a valid condition</li>";
    }
}data.result;
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
