document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.querySelector('button');
    if (drawButton) {
        drawButton.addEventListener('click', () => {
            alert('This feature will allow you to draw your own study roadmap.');
        });
    }

    const aiButton = document.querySelector('.secondary');
    if (aiButton) {
        aiButton.addEventListener('click', () => {
            alert('This feature will generate study roadmaps using AI.');
        });
    }
    const roadmapItems = document.querySelectorAll('.roadmap-item a');
    roadmapItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const roadmapName = e.target.textContent;
            if (confirm(`You have selected the ${roadmapName} roadmap. Do you want to proceed?`)) {
                window.location.href = e.target.href; 
            }
        });
    });

    const categoryLinks = document.querySelectorAll('.categories li a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const categoryName = e.target.textContent;
            alert(`You have selected the ${categoryName} category.`);
        });
    });
});

function validateLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const error = document.getElementById('login-error');

    if (username.length < 3) {
        error.innerText = "Username must be at least 3 characters long.";
        return false;
    }
    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters long.";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateSignup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const error = document.getElementById('signup-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username.length < 3) {
        error.innerText = "Username must be at least 3 characters long.";
        return false;
    }
    if (!emailPattern.test(email)) {
        error.innerText = "Enter a valid email address.";
        return false;
    }
    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters long.";
        return false;
    }
    error.innerText = "";
    return true;
}


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const roadmapItems = document.querySelectorAll(".roadmap-item");
    const categoryLinks = document.querySelectorAll(".categories li a");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        roadmapItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchText)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const category = this.textContent.toLowerCase();

            roadmapItems.forEach(item => {
                if (item.textContent.toLowerCase().includes(category) || category === "all roadmaps") {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

function openNewPage(topic) {
    const youtubeLinks = {
        "Frontend Beginner": [
            { title: "HTML & CSS Crash Course", url: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
            { title: "JavaScript Basics", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
            { title: "Responsive Web Design", url: "https://www.youtube.com/watch?v=Oe421EPjeBE9" },
            { title: "Frontend Frameworks (React, Vue, Angular)", url: "https://www.youtube.com/watch?v=F5mRW0jo-U40" },
            { title: "Accessibility Best Practices", url: "https://www.youtube.com/watch?v=F5mRW0jo-U41" },
        ],
        "Backend Beginner": [
            { title: "Node.js Backend Basics", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
            { title: "Django Crash Course", url: "https://www.youtube.com/watch?v=F5mRW0jo-U4" },
            { title: "Ruby on Rails Fundamentals", url: "https://www.youtube.com/watch?v=F5mRW0jo-U42" },
            { title: "PHP for Beginners", url: "https://www.youtube.com/watch?v=F5mRW0jo-U43" },
            { title: "Database Concepts (SQL, NoSQL)", url: "https://www.youtube.com/watch?v=F5mRW0jo-U44" }
        ],
        "DevOps Beginner": [
            { title: "DevOps Introduction", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM" },
            { title: "Docker for Beginners", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
            { title: "Introduction to Kubernetes", url: "https://www.youtube.com/watch?v=F5mRW0jo-U45" },
            { title: "Continuous Integration/Continuous Deployment (CI/CD)", url: "https://www.youtube.com/watch?v=F5mRW0jo-U46" },
            { title: "Linux Fundamentals", url:"https://www.youtube.com/watch?v=F5mRW0jo-U47"}
        ],
        "Full Stack": [
            { title: "MERN Stack Tutorial", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
            { title: "Full Stack with Spring Boot and React", url: "https://www.youtube.com/watch?v=F5mRW0jo-U48" },
            { title: "Full Stack with Django and Vue.js", url: "https://www.youtube.com/watch?v=F5mRW0jo-U49" },
            { title: "Serverless Full Stack Development", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM0" }
        ],
        "Frontend": [
            { title: "Frontend Development Guide", url: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
             { title: "Advanced CSS Techniques", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM1" },
            { title: "JavaScript Design Patterns", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM2" },
            { title: "State Management (Redux, Context API)", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM3" },
             {title: "Web Performance Optimization", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM4"}
        ],
        "Backend": [
            { title: "Backend Development Guide", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
            { title: "Advanced Node.js", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM5" },
            { title: "Database Optimization", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM6" },
            { title: "API Security", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM7" },
            {title: "Microservices Architecture", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM8"}
        ],
        "API Design": [
            { title: "REST API Best Practices", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM" },
            { title: "GraphQL Explained", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM9" },
            { title: "API Versioning", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo0" },
            { title: "API Documentation (Swagger, OpenAPI)", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo1" },
            {title: "Websockets for Realtime APIs", url:"https://www.youtube.com/watch?v=fqMOX6JJhGo2"}
        ],
        "QA": [
            { title: "Software Testing Basics", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ" },
            { title: "Automated Testing", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo3" },
            { title: "Test-Driven Development (TDD)", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo4" },
            { title: "Performance Testing", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo5" },
            {title: "Mobile App Testing", url:"https://www.youtube.com/watch?v=fqMOX6JJhGo6"}
        ],
        "DevOps": [
            { title: "What is DevOps?", url: "https://www.youtube.com/watch?v=2jiRZ8mQFGc" },
            { title: "Infrastructure as Code (IaC)", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo7" },
            { title: "Cloud Computing (AWS, Azure, GCP)", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo8" },
            { title: "Monitoring and Logging", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo9" },
            {title:"DevSecOps", url:"https://www.youtube.com/watch?v=7CqJlxBYj-M0"}
        ],
        "Android": [
            { title: "Android Development Tutorial", url: "https://www.youtube.com/watch?v=fis26HvvDII" },
            { title: "Android UI Development", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M1" },
            { title: "Android App Architecture", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M2" },
            { title: "Working with Android Data", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M3" },
            {title: "Kotlin for Android", url:"https://www.youtube.com/watch?v=7CqJlxBYj-M4"}
        ],
        "iOS": [
            { title: "iOS Development Guide", url: "https://www.youtube.com/watch?v=aihdI8bUoAs" },
            { title: "Swift Programming", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M5" },
            { title: "iOS UI Development (SwiftUI)", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M6" },
            { title: "Core Data and Persistence", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M7" },
            {title:"Testing in iOS", url:"https://www.youtube.com/watch?v=7CqJlxBYj-M8"}
        ],
        "SQL": [
            { title: "SQL Basics", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
            { title: "Advanced SQL Queries", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M9" },
            { title: "Database Design", url: "https://www.youtube.com/watch?v=QnTH4VSIQ0Q0" },
            { title: "SQL Optimization", url: "https://www.youtube.com/watch?v=QnTH4VSIQ0Q1" },
            {title: "NoSQL databases", url:"https://www.youtube.com/watch?v=QnTH4VSIQ0Q2"}
        ],
        "Cyber Security": [
            { title: "Cyber Security Basics", url: "https://www.youtube.com/watch?v=inWWhr5tnEA" },
            { title: "Network Security", url: "https://www.youtube.com/watch?v=QnTH4VSIQ0Q3" },
            { title: "Ethical Hacking", url: "https://www.youtube.com/watch?v=QnTH4VSIQ0Q4" },
            { title: "Cryptography", url: "https://www.youtube.com/watch?v=QnTH4VSIQ0Q5" },
            {title: "Application Security", url:"https://www.youtube.com/watch?v=QnTH4VSIQ0Q6"}
        ],
        "Python": [
            { title: "Python Full Course", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
            { title: "Advanced Python", url: "https://www.youtube.com/watch?v=QnTH4VSIQ0Q7" },
            { title: "Python for Data Science", url: "https://www.youtube.com/watch?v=QnTH4VSIQ0Q8" },
            { title: "Python for Web Development (Django, Flask)", url: "https://www.youtube.com/watch?v=QnTH4VSIQ0Q9" },
            {title:"Python for Machine Learning", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM0"}
        ],
        "Java": [
            { title: "Java Beginner Guide", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
            { title: "Advanced Java", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM1" },
            { title: "Java Frameworks (Spring, Hibernate)", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM2" },
            { title: "Java Concurrency", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM3" },
            {title:"Java for Android Development", url:"https://www.youtube.com/watch?v=-MTSQjw5DrM4"}
        ],
        "Software Engineer": [
            { title: "Software Engineering Overview", url: "https://www.youtube.com/watch?v=1gZKvFo3Bjo" },
            { title: "Software Design Patterns", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM5" },
            { title: "Agile Methodologies", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM6" },
            { title: "Clean Code", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM7" },
            {title: "System Design", url:"https://www.youtube.com/watch?v=-MTSQjw5DrM8"}
        ],
        "Technical Writer": [
            { title: "Technical Writing Course", url: "https://www.youtube.com/watch?v=KTQ4hNdR8gA" },
            { title: "Documentation Tools", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM9" },
            { title: "API Documentation", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ0" },
            { title: "Writing for Different Audiences", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ1" },
            {title:"Creating Diagrams and Visuals", url:"https://www.youtube.com/watch?v=AZShFbvF2CQ2"}
        ],
        "C": [
            { title: "C Programming Basics", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
            { title: "Advanced C", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ3" },
            { title: "Data Structures in C", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ4" },
            { title: "Memory Management in C", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ5" },
            {title:"C Programming for Embedded Systems", url:"https://www.youtube.com/watch?v=AZShFbvF2CQ6"}
        ],
        "AI and Data Scientist": [
            { title: "Data Science Full Course", url: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
            { title: "Machine Learning Algorithms", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ7" },
            { title: "Deep Learning", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ8" },
            { title: "Data Visualization", url: "https://www.youtube.com/watch?v=AZShFbvF2CQ9" },
            {title:"Statistical Analysis", url:"https://www.youtube.com/watch?v=2jiRZ8mQFGc0"}
        ],
        "AI Engineer": [
            { title: "Artificial Intelligence Introduction", url: "https://www.youtube.com/watch?v=2ePf9rue1Ao" },
            { title: "Natural Language Processing (NLP)", url: "https://www.youtube.com/watch?v=2jiRZ8mQFGc1" },
            { title: "Computer Vision", url: "https://www.youtube.com/watch?v=2jiRZ8mQFGc2" },
            { title: "Reinforcement Learning", url: "https://www.youtube.com/watch?v=2jiRZ8mQFGc3" },
            {title: "AI Ethics", url:"https://www.youtube.com/watch?v=2jiRZ8mQFGc4"}
        ],
        "Data Analyst": [
            { title: "Data Analytics for Beginners", url: "https://www.youtube.com/watch?v=3C8NrXoG4mM" },
            { title: "Data Analysis with Python (Pandas)", url: "https://www.youtube.com/watch?v=2jiRZ8mQFGc5" },
            { title: "Data Analysis with R", url: "https://www.youtube.com/watch?v=2jiRZ8mQFGc6" },
            { title: "Business Intelligence (BI)", url: "https://www.youtube.com/watch?v=2jiRZ8mQFGc7" },
            {title:"Data Warehousing", url:"https://www.youtube.com/watch?v=2jiRZ8mQFGc8"}
        ],
        "MLOps": [
            { title: "MLOps Explained", url: "https://www.youtube.com/watch?v=06-AZXmwHjo" },
            { title: "ML Model Deployment", url: "https://www.youtube.com/watch?v=2jiRZ8mQFGc9" },
            { title: "ML Model Monitoring", url: "https://www.youtube.com/watch?v=fis26HvvDII0" },
            { title: "ML Pipeline Automation", url: "https://www.youtube.com/watch?v=fis26HvvDII1" },
            {title: "Version Control for ML", url:"https://www.youtube.com/watch?v=fis26HvvDII2"}
        ],
        "Product Manager": [
            { title: "Product Management 101", url: "https://www.youtube.com/watch?v=ynT1eYiuEYY" },
            { title: "Product Strategy", url: "https://www.youtube.com/watch?v=fis26HvvDII3" },
            { title: "Agile Product Management", url: "https://www.youtube.com/watch?v=fis26HvvDII4" },
            { title: "User Research", url: "https://www.youtube.com/watch?v=fis26HvvDII5" },
            {title: "Product Analytics", url:"https://www.youtube.com/watch?v=fis26HvvDII6"}
        ],
        "Engineering Manager": [
            { title: "How to be an Engineering Manager", url: "https://www.youtube.com/watch?v=F36PJUkmQ9A" },
            { title: "Team Leadership", url: "https://www.youtube.com/watch?v=fis26HvvDII7" },
            { title: "Technical Project Management", url: "https://www.youtube.com/watch?v=fis26HvvDII8" },
            { title: "Performance Management", url: "https://www.youtube.com/watch?v=fis26HvvDII9" },
            {title: "Software Development Life Cycle (SDLC)", url:"https://www.youtube.com/watch?v=aihdI8bUoAs0"}
        ],
        "Game Development": [
            { title: "Game Development Tutorial", url: "https://www.youtube.com/watch?v=g_Fwck7f0wA" },
            { title: "Game Design Principles", url: "https://www.youtube.com/watch?v=aihdI8bUoAs1" },
            { title: "Game Engines (Unity, Unreal Engine)", url: "https://www.youtube.com/watch?v=aihdI8bUoAs2" },
            { title: "3D Game Development", url: "https://www.youtube.com/watch?v=aihdI8bUoAs3" },
            {title: "Mobile Game Development", url:"https://www.youtube.com/watch?v=aihdI8bUoAs4"}
        ],
        "UX Design": [
            { title: "UX/UI Design Basics", url: "https://www.youtube.com/watch?v=5g-fYdIfR58" },
            { title: "User Research", url: "https://www.youtube.com/watch?v=aihdI8bUoAs5" },
            { title: "Interaction Design", url: "https://www.youtube.com/watch?v=aihdI8bUoAs6" },
            { title: "Usability Testing", url: "https://www.youtube.com/watch?v=aihdI8bUoAs7" },
            {title: "Information Architecture", url:"https://www.youtube.com/watch?v=aihdI8bUoAs8"}
        ],
        "Blockchain": [
            { title: "Blockchain Explained", url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4" },
            { title: "Cryptocurrency", url: "https://www.youtube.com/watch?v=aihdI8bUoAs9" },
            { title: "Smart Contracts", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY0" },
            { title: "Decentralized Applications (DApps)", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY1" },
            {title: "Blockchain Security", url:"https://www.youtube.com/watch?v=HXV3zeQKqGY2"}
        ],
        "Absolute Beginners": [
        { title: "Introduction to Programming", url: "https://www.youtube.com/watch?v=Z1Yd7upQsXY" },
        { title: "Computer Basics", url: "https://www.youtube.com/watch?v=5pF0sR5FJD4" },
        { title: "Learn to Code in 10 Minutes", url: "https://www.youtube.com/watch?v=V-y3FQ_m3qk" },
        { title: "Python for Beginners", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        { title: "JavaScript for Beginners", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" }
    ],
    "Web Development": [
        { title: "Full Web Development Course", url: "https://www.youtube.com/watch?v=zJSY8tbf_ys" },
        { title: "HTML & CSS Full Course", url: "https://www.youtube.com/watch?v=mU6anWqZJcc" },
        { title: "JavaScript Full Course", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
        { title: "Backend Development with Node.js", url: "https://www.youtube.com/watch?v=Oe421EPjeBE9" },
        { title: "Full Stack Developer Roadmap", url: "https://www.youtube.com/watch?v=MoPtwq_cVH8" }
    ],
    "Frontend": [
        { title: "HTML & CSS Crash Course", url: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
        { title: "JavaScript Basics", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
        { title: "Responsive Web Design", url: "https://www.youtube.com/watch?v=Oe421EPjeBE9" },
        { title: "Frontend Frameworks (React, Vue, Angular)", url: "https://www.youtube.com/watch?v=F5mRW0jo-U40" },
        { title: "Accessibility Best Practices", url: "https://www.youtube.com/watch?v=F5mRW0jo-U41" }
    ],
    "Backend": [
        { title: "Node.js Crash Course", url: "https://www.youtube.com/watch?v=Oe421EPjeBE9" },
        { title: "Django for Beginners", url: "https://www.youtube.com/watch?v=F5mRW0jo-U41" },
        { title: "REST API with Node.js & Express", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM" },
        { title: "SQL & Databases", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
        { title: "Authentication & Security in Web Apps", url: "https://www.youtube.com/watch?v=Ud5xKCYQTjM" }
    ],
    "Computer Science": [
        { title: "Computer Science Crash Course", url: "https://www.youtube.com/watch?v=tpIctyqH29Q" },
        { title: "Data Structures & Algorithms", url: "https://www.youtube.com/watch?v=8hly31xKli0" },
        { title: "Operating Systems Basics", url: "https://www.youtube.com/watch?v=26QPDBe-NB8" },
        { title: "Networking Fundamentals", url: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
        { title: "How Computers Work", url: "https://www.youtube.com/watch?v=O5nskjZ_GoI" }
    ],
    "Machine Learning": [
        { title: "Machine Learning Crash Course", url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" },
        { title: "Deep Learning Explained", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
        { title: "Neural Networks from Scratch", url: "https://www.youtube.com/watch?v=Ilg3gGewQ5U" },
        { title: "TensorFlow Tutorial", url: "https://www.youtube.com/watch?v=tPYj3fFJGjk" },
        { title: "AI & Machine Learning for Beginners", url: "https://www.youtube.com/watch?v=IHZwWFHWa-w" }
    ]
};
    const links = youtubeLinks[topic] || [];

    // Corrected background colors for different technologies
    const backgroundColors = {
        "Frontend Beginner": "#e0f7fa",  // Light blue
        "Backend Beginner": "#e8f5e9",  // Light green
        "DevOps Beginner": "#fff3e0",  // Light orange
        "Full Stack": "#ede7f6",      // Light purple
        "Frontend": "#e0f2fe",         // Light blue
        "Backend": "#f0fff0",        // Very light green
        "API Design": "#fce4ec",        // Light pink
        "QA": "#f3e5f5",               // Light purple
        "DevOps": "#e0ffff",           // Light cyan
        "Android": "#fff8e1",          // Light yellow
        "iOS": "#f0f4c3",              // Light olive
        "SQL": "#e1f5fe",              // Light blue
        "Cyber Security": "#fbe9e7",    // Light red
        "Python": "#e8f5e9",           // Light green
        "Java": "#fff3e0",             // Light orange
        "Software Engineer": "#ede7f6", // Light purple
        "Technical Writer": "#e0f2fe", // Light blue
        "C": "#fce4ec",                // Light pink
        "AI and Data Scientist": "#f3e5f5", // Light purple
        "AI Engineer": "#e0ffff",      // Light cyan
        "Data Analyst": "#fff8e1",      // Light yellow
        "MLOps": "#f0f4c3",            // Light olive
        "Product Manager": "#e1f5fe",  // Light blue
        "Engineering Manager": "#fbe9e7",// Light red
        "Game Development": "#f5f5f5",  // Light grey
        "UX Design": "#f8f8ff",        // Light ghost white
        "Blockchain": "#f0e6ef"      // Light Thistle
    };

    // Correct topic formatting
    const formattedTopic = topic.trim(); // Remove leading/trailing spaces

    const backgroundColor = backgroundColors[formattedTopic] || "#f4f4f8"; // Default color if not found

    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>${formattedTopic}</title>
            <style>
                body {
                    font-family: 'Roboto', sans-serif;
                    background-color: ${backgroundColor};
                    color: #333;
                    text-align: left;
                    padding: 30px;
                    line-height: 1.6;
                }
                h1 {
                    color: #0056b3;
                    border-bottom: 2px solid #ddd;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin-bottom: 15px;
                    background-color: #fff;
                    padding: 15px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                a {
                    text-decoration: none;
                    color: #007BFF;
                    font-size: 18px;
                    transition: color 0.3s ease;
                }
                a:hover {
                    color: #0056b3;
                    text-decoration: underline;
                }
                p {
                    font-style: italic;
                    color: #777;
                }
            </style>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        </head>
        <body>
            <h1>${formattedTopic} Resources</h1>
            <ul>
                ${links.length > 0
                    ? links.map(link => `<li><a href="${link.url}" target="_blank">${link.title}</a></li>`).join("")
                    : "<p>No resources available yet.</p>"
                }
            </ul>
        </body>
        </html>
    `);
    newWindow.document.close(); 
}
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Ensure the first section (Start Here) is visible on load
document.addEventListener("DOMContentLoaded", function() {
    showSection('start');
});

