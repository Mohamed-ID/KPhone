let menuBtn = document.querySelector("header .container i");
let menuClose = document.querySelector("header nav i.close");
let infoCards = document.querySelectorAll(".info");

// Show Menu
menuBtn.onclick = () => {
    document.querySelector("header .container nav").className = "in";
}

// Close Menu
menuClose.onclick = () => {
    document.querySelector("header .container nav").className = "";
}

// Show Details
onclick = e => {
    showDts(e)
}



// Functions

// Show Details
function showDts(e) {
    // 
    if(e.target.classList.contains("fa-caret-down")) {
        if(e.target.parentElement.classList.contains("active")) {
            infoCards.forEach(e => {
                if(e.classList.contains("active")) {
                    e.classList.remove("active");
                }
            });

            // Edit Icon
            e.target.classList.remove("rt");
        } else {
            infoCards.forEach(e => {
                if(e.classList.contains("active")) {
                    e.classList.remove("active");
                    e.children[2].classList.remove("rt");
                    
                }
            });

            // Edit Icon And Parent Elemet
            e.target.classList.add("rt");
            e.target.parentElement.classList.add("active");
        }
    }
}