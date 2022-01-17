const canvas = document.getElementById("canvas1");
const width = canvas.width;

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
    console.log(width);
    if (width < 400) {        
        var old_seperator = document.getElementById("seperator");
        old_seperator.remove();
        var new_seperator = document.createElement("hr");
        new_seperator.id = "new_seperator";
        var greeting_paragraph = document.getElementById("greeting-name");
        var parent_div = document.getElementById("personal-info");
        parent_div.insertBefore(new_seperator, greeting_paragraph);
        openMenuPersonalInfo.classList.add("shrink");
    } else {
        openMenuPersonalInfo.classList.add("active");
    }
    openMenuPersonalIntro.classList.add("active");
    openMenuProject.classList.add("active");
    openMenuResume.classList.add("active");
    openMenunContact.classList.add("active");
    openMenuCanvas.classList.add("active");
    openMenuSkill.classList.add("active");
})

hideMenuIcon.addEventListener("click", function() {
    sideMenu.classList.remove("active")
    if (width < 400) {
        var new_seperator = document.getElementById("new_seperator");
        new_seperator.remove();
        var old_seperator = document.createElement("div");
        old_seperator.id = "seperator";
        var greeting_paragraph = document.getElementById("greeting-name");
        var parent_div = document.getElementById("personal-info");
        parent_div.insertBefore(old_seperator, greeting_paragraph);
        openMenuPersonalInfo.classList.remove("shrink");
    } else {
        openMenuPersonalInfo.classList.remove("active");
    }
    openMenuPersonalIntro.classList.remove("active")
    openMenuProject.classList.remove("active")
    openMenuResume.classList.remove("active")
    openMenunContact.classList.remove("active")
    openMenuCanvas.classList.remove("active");
    openMenuSkill.classList.remove("active");
})
