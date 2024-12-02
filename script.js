// Initial setup: Hide header, footer, and show only the "Let's Go" button
document.getElementById("header").style.display = "none";
document.getElementById("footer").style.display = "none";
document.getElementById("main-content").innerHTML = `
    <div class="welcome-container">
        <button id="lets-go-button">Let's Go</button>
    </div>
`;

// Add event listener to the "Let's Go" button
document.getElementById("lets-go-button").addEventListener("click", () => {
    document.querySelector(".welcome-container").style.display = "none";

    // Show the home content only
    loadHomeContent();
});

// Populate header content
document.getElementById("header").innerHTML = `
    <div id="logo">
        <p id="gmail-link">esplanajigo@gmail.com</p>
    </div>
    <nav id="navigation">
        <ul>
            <li><button onclick="scrollToSection('home')">Home</button></li>
            <li><button onclick="scrollToSection('skills')">Skill</button></li>
            <li><button onclick="scrollToSection('services')">Services</button></li>
            <li><button onclick="scrollToSection('contact')">Hire Me</button></li>
        </ul>
    </nav>
`;

// Populate footer content
document.getElementById("footer").innerHTML = `
    <div id="footer">
        <div id="copyright-jigo">
            <p id="gmail-link">esplanajigo@gmail.com</p>
        </div>
        <div class="foot">
            <nav id="navigation">
                <ul>
                    <li id="facebook-link">Facebook</li>
                    <li id="telegram-link">Telegram</li>
                    <li id="gmail-link">Gmail</li>
                </ul>
            </nav>
        </div>
    </div>
`;

// Add onclick event listeners for each li in the footer
document.getElementById("facebook-link").addEventListener("click", () => {
    window.location.href = "https://www.facebook.com/jigo.esplana.16/?_rdc=1&_rdr";
});

document.getElementById("telegram-link").addEventListener("click", () => {
    window.location.href = "https://t.me/K4K4ROT16"; // Replace with your actual Telegram link
});

document.getElementById("gmail-link").addEventListener("click", () => {
    window.location.href = "mailto:esplanajigo@gmail.com";
});


// Load only the home content initially
function loadHomeContent() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section id="home" class="home-container">
            <div class="myImage">
                <img src="images/ogi.jpg" alt="Jigo's Portrait">
            </div>
            <div class="home-right">
                <h1>Hi, I am Jigo, an Information Technology student passionate about technology and design.</h1>
                <button id="hire-me-button">Hire Me</button>
            </div>
        </section>
    `;

    // Add event listener for "Hire Me" button
    document.getElementById("hire-me-button").addEventListener("click", () => {
        // Show the header, footer, and additional sections
        document.getElementById("header").style.display = "flex";
        document.getElementById("footer").style.display = "block";

        // Load all sections under home content
        loadAllSections();
    });
}

// Load all sections (home, skills with logos, projects, about)
function loadAllSections() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section id="home" class="home-container">
            <div class="myImage">
                <img src="images/ogi.jpg" alt="Jigo's Portrait">
            </div>
            <div class="home-right">
                <h1>Hi, I am Jigo, an Information Technology student passionate about technology and design.</h1>
                <button id="hire-me-button">Hire Me</button>
            </div>
        </section>

        <section id="skills" class="skills-container">
            <div class="skills-cards">
                <div class="skill-card">
                    <img src="images/HTML.png" alt="HTML Logo">
                </div>
                <div class="skill-card">
                    <img src="images/CSS.svg" alt="CSS Logo">
                </div>
                <div class="skill-card">
                    <img src="images/JS.png.png" alt="JavaScript Logo">
                </div>
                <div class="skill-card">
                    <img src="images/REACT.png" alt="React Logo">
                </div>
                <div class="skill-card">
                    <img src="images/PHP-logo.svg.png" alt="PHP Logo">
                </div>
            </div>
        </section>

        <section id="services" class="projects-container">
            <div class="projects">
                <h2>Take a look at the services I can offer you, and let's work together</h2>
            </div>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>UI & UX</h3>
                    <p>Designing intuitive and user-friendly interfaces with a focus on enhancing user experience across web and mobile platforms.</p>
                </div>
                <div class="project-card">
                    <h3>Web & App</h3>
                    <p>Developing responsive websites and mobile applications that deliver high performance and an engaging user experience.</p>
                </div>
                <div class="project-card">
                    <h3>Design</h3>
                    <p>Crafting visually stunning designs that align with brand identity and communicate messages effectively through creative solutions.</p>
                </div>
                <div class="project-card">
                    <h3>Development</h3>
                    <p>Building robust, scalable web and app solutions, utilizing the latest technologies to ensure optimal functionality and user satisfaction.</p>
                </div>
            </div>
        </section>

        <section id="contact" class="contact-container">
            <div class="myImage-contact">
                <img src="images/ogi.jpg" alt="Jigo's Portrait">
            </div>
            <div class="contact-right">
                <h1> Tell me about your next project</h1>
                <button id="email-button">Email Me!</button>
                <button id="facebook-button">Facebook</button>
            </div>
        </section>
    `;

    // Handle "Email Me!" button click to scroll to the contact section
    document.getElementById("hire-me-button").addEventListener("click", () => {
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    // Handle "Email Me!" button click for redirection to your email
    document.getElementById("email-button").addEventListener("click", () => {
    window.location.href = "mailto:esplanajigo@gmail.com";
    });

    // Handle "Facebook" button click for redirection
    document.getElementById("facebook-button").addEventListener("click", () => {
        window.location.href = "https://www.facebook.com/jigo.esplana.16/?_rdc=1&_rdr";
    });
}

// Smooth scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}
