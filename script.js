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
    }, 900);
}

function navigateToSiteScroll(url, scrollPosition) {
    const wholeScreen = document.querySelector(".whole-screen");
    wholeScreen.style.animationDirection = "reverse";
    wholeScreen.style.display = "flex";

    setTimeout(() => {
        window.location.href = `${url}#${scrollPosition}`;
    }, 900);
}

function navigateToSiteBig(url) {
    if (window.innerWidth > 1200) {
        const wholeScreen = document.querySelector(".whole-screen");
        wholeScreen.style.animationDirection = "reverse";
        wholeScreen.style.display = "flex";

        setTimeout(() => {
            window.location.href = url;
        }, 900);
    }
}

function sendEmail(mail, title, des) {
    const recipientEmail = mail;
    const subject = title;
    const body = des;


    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


    window.location.href = mailtoLink;
}

function toggleDropdown(clickedDiv) {
    var dropdown = clickedDiv.querySelector('.line-dropdown');
    var arrow = clickedDiv.querySelector('.dropdown-arrow');
    var colors = clickedDiv.querySelector('.line-flex');

    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        dropdown.style.display = 'flex';
        arrow.style.transform = 'rotate(180deg)';
    }
}

function sendEmail(mail, title, des) {
    const recipientEmail = mail;
    const subject = title;
    const body = des;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

function copy(text, showid, hideid) {
    navigator.clipboard.writeText(text);
    document.querySelector(showid).style.display = 'block';
    document.querySelector(hideid).style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    // Function to scroll to the specified position
    function scrollToHashPosition() {
        if (window.location.hash) {
            const screenWidth = window.innerWidth;
            const scrollPosition = parseInt(window.location.hash.slice(1));

            if (screenWidth < 1200) {
                if (scrollPosition < 1000) {
                    if (!isNaN(scrollPosition)) {
                        const mainContent = document.querySelector('.maincontent');
                        mainContent.scroll({ top: 0, behavior: "smooth" });
                    }
                }
                if (scrollPosition > 1000) {
                    const mainContent = document.querySelector('.maincontent');
                    const kontaktSection = document.querySelector('.kontaktdaten');
                    if (mainContent && kontaktSection) {
                        setTimeout(function () {
                            mainContent.scroll({ top: kontaktSection.offsetTop, behavior: "smooth" });
                        }, 300);
                    }
                }
            } else {
                if (!isNaN(scrollPosition)) {
                    const mainContent = document.querySelector('.maincontent');
                    mainContent.scroll({ top: scrollPosition, behavior: "smooth" });
                }
            }
        }
    }

    scrollToHashPosition();

    window.addEventListener("hashchange", scrollToHashPosition);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } //else {
        //entry.target.classList.remove('show');
        //}
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));