let toggleNavStatus = false;

let toggleNav = function() {
     let getSidebar = document.querySelector(".nav-sidebar");
     let getSidebarUL = document.querySelector(".nav-sidebar ul");
     let getSidebarTitle = document.querySelector(".nav-sidebar span");
     let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

     if (toggleNavStatus === false) {
         getSidebarUL.style.visibility = "visible";
         getSidebar.style.width = "272px";
         getSIdebarTotle.style.opacity = "0.4";

         let arrayLegnth = getSidebarLinks.length;
         for (let i=0; i < arrayLegnth; i++) {
             getSidebarLinks[i].style.opacity = "1";
         }

         toggleNavStatus = true;
     }
    }

     else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSIdebarTotle.style.opacity = "0";

        let arrayLegnth = getSidebarLinks.length;
        for (let i=0; i < arrayLegnth; i++){
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUL.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}