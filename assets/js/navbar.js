document.addEventListener("DOMContentLoaded", (e) => {
    let navbar = document.querySelector(".menu__navbar");

    window.addEventListener("scroll", (e) => {
        let scroll = window.scrollY;

        if(scroll > 120){
            navbar.classList.add("menu__navbar--fixed");
        }else{
            navbar.classList.remove("menu__navbar--fixed");
        }
    });
});