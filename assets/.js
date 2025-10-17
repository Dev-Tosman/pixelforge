document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("change", function() {
        if (menuToggle.checked) {
            navList.classList.add("active");
        } else {
            navList.classList.remove("active");
        }
    });
})


