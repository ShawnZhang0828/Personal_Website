const openMenu = document.querySelector("#show-menu");
const openMenuPersonalInfo = document.querySelector("#info-container");
const openMenuPersonalIntro = document.querySelector("#self-intro");
const openMenuProject = document.querySelector("#project-container");
const hideMenuIcon = document.querySelector("#hide-menu");
const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function() {
    sideMenu.classList.add("active")
    openMenuPersonalInfo.classList.add("active")
    openMenuPersonalIntro.classList.add("active")
    openMenuProject.classList.add("active")
})

hideMenuIcon.addEventListener("click", function() {
    sideMenu.classList.remove("active")
    openMenuPersonalInfo.classList.remove("active")
    openMenuPersonalIntro.classList.remove("active")
    openMenuProject.classList.remove("active")
})

