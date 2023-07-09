document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const navLinks = document.querySelectorAll(".nav-link");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            const isActive = this.classList.contains("active");
            if (isActive) {
                this.classList.remove("active");
                const dropdownMenu = this.querySelector(".dropdown-menu");
                dropdownMenu.classList.remove("slide-in");
                dropdownMenu.classList.add("slide-out");
                setTimeout(() => {
                    dropdownMenu.style.display = "none";
                    dropdownMenu.classList.remove("slide-out");
                }, 300);
            } else {
                this.classList.add("active");
                const dropdownMenu = this.querySelector(".dropdown-menu");
                dropdownMenu.classList.remove("slide-out");
                dropdownMenu.classList.add("slide-in");
                dropdownMenu.style.display = "flex";
            }
        });
    });

    const navMenuSmall = document.querySelector(".nav-menu-small");
    const navbarNav = document.querySelector(".navbar-nav");
    const menuCheckbox = document.getElementById("menu-checkbox");
    const menuToggle = document.querySelector(".menu-toggle");
    let isNavbarVisible = false; // Track the visibility state

    navMenuSmall.addEventListener("click", function () {
        if (isNavbarVisible) {
            navbarNav.classList.remove("slide-in");
            navbarNav.classList.add("slide-out");
            setTimeout(() => {
                navbarNav.style.display = "none";
                navbarNav.classList.remove("slide-out");
            }, 300);
            isNavbarVisible = false;
        } else {
            navbarNav.classList.remove("slide-out");
            navbarNav.classList.add("slide-in");
            navbarNav.style.display = "block";
            isNavbarVisible = true;
        }
        menuCheckbox.checked = isNavbarVisible;
    });

    // Listen for checkbox change event
    menuCheckbox.addEventListener("change", function () {
        menuToggle.classList.toggle("checked", this.checked);
        isNavbarVisible = this.checked;
    });

    // Disable pointer events for the label
    menuToggle.style.pointerEvents = "none";

    // Listen for window resize event
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1000) {
            navbarNav.style.display = "flex";
            isNavbarVisible = true;
        } else {
            navbarNav.style.display = "none";
            isNavbarVisible = false;
        }
    });
});
