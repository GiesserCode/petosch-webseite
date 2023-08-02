function callPhoneNumber(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

function hideWholeScreen() {
    document.querySelector(".whole-screen").style.display = "none";
}

function navigateToSite(url) {
    const wholeScreen = document.querySelector(".whole-screen");
    wholeScreen.style.animationDirection = "reverse";
    wholeScreen.style.display = "flex";
    wholeScreen.classList.add("hide-on-animationend");
    setTimeout(() => {
        window.location.href = url;
    }, 900);
}

function navigateToSiteScroll(url, scrollPosition) {
    const wholeScreen = document.querySelector(".whole-screen");
    wholeScreen.style.animationDirection = "reverse";
    wholeScreen.style.display = "flex";
    wholeScreen.classList.add("hide-on-animationend");
    setTimeout(() => {
        window.location.href = url;
        window.scrollTo(0, scrollPosition); // Scroll to the specified position
    }, 900);
}

function navigateToSiteBig(url) {
    if (window.innerWidth > 1200) {
        const wholeScreen = document.querySelector(".whole-screen");
        wholeScreen.style.animationDirection = "reverse";
        wholeScreen.style.display = "flex";
        wholeScreen.classList.add("hide-on-animationend");
        setTimeout(() => {
            window.location.href = url;
        }, 900);
    }
}