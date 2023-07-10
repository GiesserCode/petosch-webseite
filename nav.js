document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const navLinks = document.querySelectorAll(".nav-link");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            const isActive = this.classList.contains("active");
            closeAllDropdownMenus(); // Close all dropdown menus before opening a new one
            if (isActive) {
                this.classList.remove("active");
            } else {
                this.classList.add("active");
                const dropdownMenu = this.querySelector(".dropdown-menu");
                dropdownMenu.style.display = "flex";
            }
        });
    });

    dropdownMenus.forEach((menu) => {
        menu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    const navMenuSmall = document.querySelector(".nav-menu-small");
    const navbarNav = document.querySelector(".navbar-nav");
    const menuCheckbox = document.getElementById("menu-checkbox");
    const menuToggle = document.querySelector(".menu-toggle");
    let isNavbarVisible = false; // Track the visibility state

    navMenuSmall.addEventListener("click", function () {
        if (isNavbarVisible) {
            navbarNav.style.display = "none";
            isNavbarVisible = false;
        } else {
            navbarNav.style.display = "block";
            isNavbarVisible = true;
        }
        menuCheckbox.checked = isNavbarVisible;
    });

    // Listen for checkbox change event
    menuCheckbox.addEventListener("change", function () {
        menuToggle.classList.toggle("checked", this.checked);
        isNavbarVisible = this.checked;
        if (!isNavbarVisible && window.innerWidth < 1300) {
            navbarNav.style.display = "none";
        }
    });

    // Disable pointer events for the label
    menuToggle.style.pointerEvents = "none";

    // Listen for window resize event
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1300) {
            navbarNav.style.display = "flex";
            isNavbarVisible = true;
        } else {
            navbarNav.style.display = "none";
            isNavbarVisible = false;
        }
    });

    function closeAllDropdownMenus() {
        dropdownMenus.forEach((menu) => {
            menu.style.display = "none";
            const parentNavItem = menu.closest(".nav-item");
            parentNavItem.classList.remove("active");
        });
    }
});
