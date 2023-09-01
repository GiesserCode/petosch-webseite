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
    const screenWidth = window.innerWidth;
    const wholeScreen = document.querySelector(".whole-screen");
    wholeScreen.style.animationDirection = "reverse";
    wholeScreen.style.display = "flex";

    if (checkTouchSupport() && scrollPosition == 'h2') {
        window.location.href = url
    } else {
        setTimeout(() => {
            window.location.href = `${url}#${scrollPosition}`;
        }, 900);
    }
}

function navigateToSiteBig(url) {
    if (checkTouchSupport() == false) {
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

document.addEventListener('DOMContentLoaded', function () {
    handleHash()
});


function handleHash() {
    const hash = window.location.hash.slice(1); // Remove the leading #
    const parts = hash.split('-'); // Split the hash into parts

    if (parts.length === 2) {
        const arg1 = parts[0];
        const arg2 = parseInt(parts[1]);

        initImages(arg1, arg2)
    } if (parts.length === 1) {
        scrollToPosition(parts);
    } else {
        return
    }
}

// Function to scroll to the specified position
function scrollToPosition(scrollPosition) {
    console.log(scrollPosition)

    setTimeout(function () {
        var element = document.querySelector(scrollPosition);


        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    }, 100);

}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } //else {
        //entry.target.classList.remove('show');
        //}
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener("load", function () {
    setTimeout(function () {
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

function initImages(foldername, numberofpics) {
    const gallery = document.querySelector('.images')
    gallery.innerHTML = ''

    for (let i = 1; i <= numberofpics; i++) {
        const img = document.createElement('img');
        img.src = `../images/${foldername}/${i}.jpg`;
        img.alt = `picture ${i}`;

        // Add the class for selecting the images, if not already added
        img.classList.add('gallery-image');

        // Append the image to the gallery
        gallery.appendChild(img);
    }

    // Event delegation for handling clicks on images
    gallery.addEventListener('click', function (event) {
        if (event.target.classList.contains('gallery-image')) {
            const imgIndex = Array.from(gallery.children).indexOf(event.target);
            showCarousel(foldername, numberofpics, imgIndex + 1);
            console.log(foldername, numberofpics, imgIndex + 1)
        }
    });
}

function showCarousel(foldername, numberofpics, currentpic) {
    const section = document.querySelector('.carousel-section');
    const carousel = section.querySelector('ul');
    const maincontent = document.querySelector('.maincontent');
    carousel.innerHTML = ''; // Clear existing slides

    for (let i = 1; i <= numberofpics; i++) {

        const slide = document.createElement('li');
        slide.classList.add('slide');
        if (i === currentpic) {
            slide.setAttribute('data-active', ''); // Set data-active on the first slide
        }
        const img = document.createElement('img');
        img.src = `../images/${foldername}/${i}.jpg`;
        img.alt = `picture ${i}`;

        slide.appendChild(img); // Append the img to the li
        carousel.appendChild(slide); // Append the li to the ul
    }
    section.style.display = 'block';
    maincontent.style.zIndex = '3';
    // Show the carousel section
}

function closeCarousel() {
    const section = document.querySelector('.carousel-section');
    const maincontent = document.querySelector('.maincontent');
    section.style.display = 'none';
    maincontent.style.zIndex = '2';
}

function checkTouchSupport() {
    if ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) {
        alert('Touchscreen is supported.');
        return true;
    }
    if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
        alert('Touchscreen is supported.');
        return true;
    }
    alert('Touchscreen is not supported.');
    return false;
}