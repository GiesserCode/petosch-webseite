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
    setTimeout(() => {
        window.location.href = url;
    }, 600);
}

function navigateToSiteBig(url) {
    if (window.innerWidth > 1300) {
        const wholeScreen = document.querySelector(".whole-screen");
        wholeScreen.style.animationDirection = "reverse";
        wholeScreen.style.display = "flex";
        setTimeout(() => {
            window.location.href = url;
        }, 600);
    }
}
