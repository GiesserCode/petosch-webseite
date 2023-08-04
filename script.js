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
    //wholeScreen.classList.add("hide-on-animationend");
    setTimeout(() => {
        window.location.href = url;
    }, 900);
}

function navigateToSiteScroll(url, scrollPosition) {
    const wholeScreen = document.querySelector(".whole-screen");
    wholeScreen.style.animationDirection = "reverse";
    wholeScreen.style.display = "flex";
    //wholeScreen.classList.add("hide-on-animationend");

    // Append the scrollPosition as a URL hash fragment
    setTimeout(() => {
        window.location.href = `${url}#${scrollPosition}`;
    }, 900);
}

function navigateToSiteBig(url) {
    if (window.innerWidth > 1200) {
        const wholeScreen = document.querySelector(".whole-screen");
        wholeScreen.style.animationDirection = "reverse";
        wholeScreen.style.display = "flex";
        //wholeScreen.classList.add("hide-on-animationend");
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

function toggleDropdown(clickedDiv) {
    var dropdown = clickedDiv.querySelector('.line-dropdown');
    var arrow = clickedDiv.querySelector('.dropdown-arrow');

    if (dropdown.style.display === 'flex') { // Change this to check for 'flex'
        dropdown.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)'; // Use transform instead of rotate
    } else {
        dropdown.style.display = 'flex';
        arrow.style.transform = 'rotate(180deg)'; // Use transform instead of rotate
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
    // Function to scroll to the specified position
    function scrollToHashPosition() {
        if (window.location.hash) {
            const scrollPosition = parseInt(window.location.hash.slice(1));
            if (!isNaN(scrollPosition)) {
                const mainContent = document.querySelector('.maincontent');
                mainContent.scroll({ top: scrollPosition, behavior: "smooth" });
            }
        }
    }

    // Scroll to the position on page load
    scrollToHashPosition();

    // Scroll to the position when the hash changes
    window.addEventListener("hashchange", scrollToHashPosition);
});