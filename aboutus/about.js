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

function sendEmail(mail, title, des) {
    const recipientEmail = mail; // Replace with the recipient's email address
    const subject = title; // Replace with the subject of your email
    const body = des; // Replace with the body of your email

    // Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if a hash fragment is present in the URL
    if (window.location.hash) {
        // Extract the target element's ID from the hash fragment
        const targetElementId = window.location.hash.slice(1);
        const targetElement = document.getElementById(targetElementId);

        // If the target element exists, scroll to it using scroll method
        if (targetElement) {
            const mainContent = document.querySelector('.maincontent');
            const scrollPosition = targetElement.offsetTop;
            mainContent.scroll({ top: scrollPosition, behavior: "smooth" });

            // Add a slight delay before the console.log to ensure it works
            setTimeout(() => {
                console.log(targetElement.offsetTop);
            }, 500);
        }
    }
});