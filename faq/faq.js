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

function toggleDropdown(clickedDiv) {
    var dropdown = clickedDiv.querySelector('.line-dropdown');
    var arrow = clickedDiv.querySelector('.dropdown-arrow');

    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'flex';
        arrow.style.rotate = '0deg';
    } else {
        dropdown.style.display = 'none';
        arrow.style.rotate = '180deg';
    }
}