document.addEventListener("DOMContentLoaded", function () {



    const navItems = document.querySelectorAll(".nav-item");
    const navLinks = document.querySelectorAll(".nav-link");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    const navbarNav = document.querySelector(".navbar-nav");
    const menuCheckbox = document.getElementById("menu-checkbox");
    const menuToggle = document.querySelector(".menu-toggle");
    let isNavbarVisible = false; // Track the visibility state

    // Function to hide all dropdown menus
    function hideAllDropdownMenus() {
        dropdownMenus.forEach((menu) => {
            menu.style.display = "none";
            menu.classList.remove("slide-in");
        });
        navItems.forEach((item) => {
            item.classList.remove("active");
        });
    }

    // ... (other parts of your code)

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            const isActive = this.classList.contains("active");
            if (isActive) {
                hideAllDropdownMenus();
                if (window.innerWidth < 1200) {
                    navbarNav.classList.remove("slide-in"); // Apply slide-out animation
                    navbarNav.classList.add("slide-out");
                    setTimeout(() => {
                        navbarNav.style.display = "none";
                        navbarNav.classList.remove("slide-out");
                        hideAllDropdownMenus();
                    }, 300);
                    menuCheckbox.checked = false;
                    isNavbarVisible = false;
                }
            } else {
                hideAllDropdownMenus();
                this.classList.add("active");
                const dropdownMenu = this.querySelector(".dropdown-menu");
                dropdownMenu.style.display = "flex";
                dropdownMenu.classList.add("slide-in");
            }
        });
    });

    const navMenuSmall = document.querySelector(".nav-menu-small");
    //const navbarNav = document.querySelector(".navbar-nav");
    //const menuCheckbox = document.getElementById("menu-checkbox");
    //const menuToggle = document.querySelector(".menu-toggle");
    //let isNavbarVisible = false; // Track the visibility state

    navMenuSmall.addEventListener("click", function () {
        if (isNavbarVisible) {
            navbarNav.classList.remove("slide-in");
            navbarNav.classList.add("slide-out");
            setTimeout(() => {
                navbarNav.style.display = "none";
                navbarNav.classList.remove("slide-out");
                hideAllDropdownMenus(); // Hide dropdown menus when navbar is closed
            }, 300);
            isNavbarVisible = false;
        } else {
            navbarNav.classList.remove("slide-out");
            navbarNav.classList.add("slide-in");
            navbarNav.style.display = "block";
            hideAllDropdownMenus(); // Hide dropdown menus when navbar is opened
            isNavbarVisible = true;
        }
        menuCheckbox.checked = isNavbarVisible;
    });

    // Listen for checkbox change event
    menuCheckbox.addEventListener("change", function () {
        menuToggle.classList.toggle("checked", this.checked);
        isNavbarVisible = this.checked;
        if (!isNavbarVisible) {
            hideAllDropdownMenus(); // Hide dropdown menus when navbar is closed by unchecking checkbox
        }
    });

    // Disable pointer events for the label
    menuToggle.style.pointerEvents = "none";

    // Listen for window resize event
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1200) {
            navbarNav.style.display = "flex";
            isNavbarVisible = true;
        } else {
            navbarNav.style.display = "none";
            isNavbarVisible = false;
            hideAllDropdownMenus(); // Hide dropdown menus when screen is less than 1200px
        }
    });

});



