document.addEventListener("DOMContentLoaded", function () {
    fetchProjects();
});

const API_URL = "http://localhost:60537";

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Show modal for adding project
document.getElementById("addProjectBtn").addEventListener("click", function () {
    document.getElementById("projectModal").style.display = "block";
});

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Save project to backend
function saveProject() {
    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDescription").value;
    const deadline = document.getElementById("projectDeadline").value;

    if (title && description && deadline) {
        fetch(`${API_URL}/projects`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description, deadline })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            closeModal();
            fetchProjects();
        })
        .catch(error => console.error("Error saving project:", error));
    } else {
        alert("Please fill in all fields!");
    }
}

// Fetch projects from backend
function fetchProjects() {
    fetch(`${API_URL}/projects`)
        .then(response => response.json())
        .then(data => displayProjects(data))
        .catch(error => console.error("Error fetching projects:", error));
}

function displayProjects(projects) {
    const projectContainer = document.getElementById("projectsList");
    projectContainer.innerHTML = "";

    if (projects.length === 0) {
        projectContainer.innerHTML = "<p>No projects added yet.</p>";
        return;
    }

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p><b>Description:</b> ${project.description}</p>
            <p><b>Deadline:</b> ${project.deadline}</p>
            <p><b>Status:</b> ${project.status}</p>
            <p><b>Assigned To:</b> ${project.assigned_to || "None"}</p>
            <p><b>Likes:</b> ${project.likes}</p>
            <button onclick="likeProject(${project.id})">Like</button>
            <button onclick="assignStudent(${project.id})">Assign Student</button>
            <button onclick="updateStatus(${project.id})">Update Status</button>
            <button onclick="addComment(${project.id})">Add Comment</button>
            <button onclick="approveStudent(${project.id})">Approve Student</button>
            <div id="comments-${project.id}"></div>
        `;
        projectContainer.appendChild(projectCard);
    });
}

// Interact with projects
function likeProject(id) {
    fetch(`${API_URL}/projects/${id}/like`, { method: "POST" })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchProjects();
        })
        .catch(error => console.error("Error liking project:", error));
}

function assignStudent(id) {
    const studentName = prompt("Enter student name to assign:");
    if (studentName) {
        fetch(`${API_URL}/projects/${id}/assign`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentName })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchProjects();
        })
        .catch(error => console.error("Error assigning student:", error));
    }
}

function updateStatus(id) {
    const status = prompt("Enter new status (Open, In Progress, Completed):");
    if (status) {
        fetch(`${API_URL}/projects/${id}/status`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchProjects();
        })
        .catch(error => console.error("Error updating status:", error));
    }
}

function addComment(id) {
    const comment = prompt("Enter your comment:");
    if (comment) {
        fetch(`${API_URL}/projects/${id}/comment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchProjects();
        })
        .catch(error => console.error("Error adding comment:", error));
    }
}

function approveStudent(id) {
    fetch(`${API_URL}/projects/${id}/approve`, { method: "POST" })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchProjects();
        })
        .catch(error => console.error("Error approving student:", error));
}

document.getElementById("viewProjectsBtn").addEventListener("click", function () {
    fetchProjects();
});
