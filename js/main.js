const openMenu = document.querySelector("#show-menu");
const openMenuPersonalInfo = document.querySelector("#info-container");
const openMenuPersonalIntro = document.querySelector("#self-intro");
const openMenuProject = document.querySelector("#project-container");
const openMenuResume = document.querySelector("#resume-container");
const openMenunContact = document.querySelector("#contact-container");
const openMenuCanvas = document.querySelector("#canvas1");
const openMenuSkill = document.querySelector("#skillset-container");
const hideMenuIcon = document.querySelector("#hide-menu");
const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function() {
    sideMenu.classList.add("active")
    openMenuPersonalInfo.classList.add("active")
    openMenuPersonalIntro.classList.add("active")
    openMenuProject.classList.add("active")
    openMenuResume.classList.add("active")
    openMenunContact.classList.add("active")
    openMenuCanvas.classList.add("active");
    openMenuSkill.classList.add("active");
})

hideMenuIcon.addEventListener("click", function() {
    sideMenu.classList.remove("active")
    openMenuPersonalInfo.classList.remove("active")
    openMenuPersonalIntro.classList.remove("active")
    openMenuProject.classList.remove("active")
    openMenuResume.classList.remove("active")
    openMenunContact.classList.remove("active")
    openMenuCanvas.classList.remove("active");
    openMenuSkill.classList.remove("active");
})
