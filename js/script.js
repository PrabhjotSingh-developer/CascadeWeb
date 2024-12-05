const navLink = document.querySelector(".nav-links ul");
console.log(navLink);
const clickbutton = document.querySelector(".menuicon");
console.log(clickbutton)
clickbutton.addEventListener("click",()=>{
    console.log(navLink.className)
    if(navLink.className === "flex toggle")
    {

        navLink.classList.remove("toggle");
    }
    else
    {
        navLink.classList.add("toggle");
    }
})