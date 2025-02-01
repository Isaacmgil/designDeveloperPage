document.addEventListener("DOMContentLoaded", (e) => {

    //Seleccionar los dos elementos principales.
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu__mobile");
    let close = document.querySelector(".menu__close");

    mobile_btn.addEventListener("click", (e) => {
        let show = document.querySelector(".menu__mobile--show");
        if(show){
            mobile_menu.classList.remove("menu__mobile--show")
        }else{
            mobile_menu.classList.add("menu__mobile--show")
        }
    });

    close.addEventListener("click", () => {
        mobile_menu.classList.remove("menu__mobile--show")
    });

    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if(window_width >= "1000"){
            mobile_menu.classList.remove("menu__mobile--show")
        }
    });

    let menu_item = document.querySelectorAll(".menu__item");
    
    menu_item.forEach(item => {
        
        item.addEventListener("click", (e) => {
            let submenu = item.lastElementChild;
                
            if(submenu.className === "nav__submenu-mobile"){
                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                }else{
                    submenu.style.display = "block";
                }
            }
        });


    });



});