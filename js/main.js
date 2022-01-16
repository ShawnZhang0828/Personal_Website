const openMenu = document.querySelector("#show-menu");
const openMenuPersonalInfo = document.querySelector("#info-container");
const openMenuPersonalIntro = document.querySelector("#self-intro");
const openMenuProject = document.querySelector("#project-container");
const openMenuResume = document.querySelector("#resume-container")
const openMenunContact = document.querySelector("#contact-container")
const hideMenuIcon = document.querySelector("#hide-menu");
const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function() {
    sideMenu.classList.add("active")
    openMenuPersonalInfo.classList.add("active")
    openMenuPersonalIntro.classList.add("active")
    openMenuProject.classList.add("active")
    openMenuResume.classList.add("active")
    openMenunContact.classList.add("active")
})

hideMenuIcon.addEventListener("click", function() {
    sideMenu.classList.remove("active")
    openMenuPersonalInfo.classList.remove("active")
    openMenuPersonalIntro.classList.remove("active")
    openMenuProject.classList.remove("active")
    openMenuResume.classList.remove("active")
    openMenunContact.classList.remove("active")
})

// const about_button = document.getElementById("about-btn");
// const skills_button = document.getElementById("skills-btn");
// const projects_button = document.getElementById("projetcs-btn");
// const resume_button = document.getElementById("resume-btn");
// const contact_button = document.getElementById("contact-btn");
// about_button.addEventListener("click", () => {
//     document.getElementById("info-container").scrollIntoView({behavior: 'smooth'})
// })
// skills_button.addEventListener("click", () => {
//     document.getElementById("project-container").scrollIntoView({behavior: 'smooth'})
// })
// projects_button.addEventListener("click", () => {
//     document.getElementById("project-container").scrollIntoView({behavior: 'smooth'})
// })
// resume_button.addEventListener("click", () => {
//     document.getElementById("resume-container").scrollIntoView({behavior: 'smooth'})
// })
// contact_button.addEventListener("click", () => {
//     document.getElementById("contact-container").scrollIntoView({behavior: 'smooth'})
// })
