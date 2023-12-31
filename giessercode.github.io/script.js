let loaded = !1;
function callPhoneNumber(e) {
    window.location.href = "tel:" + e
}
function hideWholeScreen() {
    !1 == loaded && (document.querySelector(".whole-screen").style.display = "none",
    loaded = !0)
}
function navigateToSite(e) {
    let t = document.querySelector(".whole-screen");
    t.style.animationDirection = "reverse",
    t.style.display = "flex",
    setTimeout(()=>{
        window.location.href = e
    }
    , 900)
}
function navigateToSiteScroll(e, t) {
    window.innerWidth;
    let o = document.querySelector(".whole-screen");
    o.style.animationDirection = "reverse",
    o.style.display = "flex",
    checkTouchSupport() && "h2" == t ? window.location.href = e : setTimeout(()=>{
        window.location.href = `${e}#${t}`
    }
    , 900)
}
function navigateToSiteBig(e) {
    if (!1 == checkTouchSupport()) {
        let t = document.querySelector(".whole-screen");
        t.style.animationDirection = "reverse",
        t.style.display = "flex",
        setTimeout(()=>{
            window.location.href = e
        }
        , 900)
    }
}
function sendEmail(e, t, o) {
    let l = `mailto:${e}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(o)}`;
    window.location.href = l
}
function toggleDropdown(e) {
    var t = e.querySelector(".line-dropdown")
      , o = e.querySelector(".dropdown-arrow");
    e.querySelector(".line-flex"),
    "flex" === t.style.display ? (t.style.display = "none",
    o.style.transform = "rotate(0deg)") : (t.style.display = "flex",
    o.style.transform = "rotate(180deg)")
}
function sendEmail(e, t, o) {
    let l = `mailto:${e}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(o)}`;
    window.location.href = l
}
function copy(e, t, o) {
    navigator.clipboard.writeText(e),
    document.querySelector(t).style.display = "block",
    document.querySelector(o).style.display = "none"
}
function handleHash() {
    let e = window.location.hash.slice(1)
      , t = e.split("-");
    if (2 === t.length) {
        let o = t[0]
          , l = parseInt(t[1]);
        initImages(o, l)
    }
    1 === t.length && scrollToPosition(t)
}
function scrollToPosition(e) {
    console.log(e),
    setTimeout(function() {
        var t = document.querySelector(e);
        t && t.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }, 100)
}
document.addEventListener("DOMContentLoaded", function() {
    handleHash()
});
const observer = new IntersectionObserver(e=>{
    e.forEach(e=>{
        e.isIntersecting && e.target.classList.add("show")
    }
    )
}
)
  , hiddenElements = document.querySelectorAll(".hidden");
function initImages(e, t) {
    let o = document.querySelector(".images");
    o.innerHTML = "";
    for (let l = 1; l <= t; l++) {
        let n = document.createElement("img");
        n.src = `../images/${e}/${l}.jpg`,
        n.alt = `picture ${l}`,
        n.classList.add("gallery-image"),
        o.appendChild(n)
    }
    o.addEventListener("click", function(l) {
        if (l.target.classList.contains("gallery-image")) {
            let n = Array.from(o.children).indexOf(l.target);
            showCarousel(e, t, n + 1),
            console.log(e, t, n + 1)
        }
    })
}
function showCarousel(e, t, o) {
    let l = document.querySelector(".carousel-section")
      , n = l.querySelector("ul")
      , i = document.querySelector(".maincontent");
    n.innerHTML = "";
    for (let r = 1; r <= t; r++) {
        let c = document.createElement("li");
        c.classList.add("slide"),
        r === o && c.setAttribute("data-active", "");
        let s = document.createElement("img");
        s.src = `../images/${e}/${r}.jpg`,
        s.alt = `picture ${r}`,
        c.appendChild(s),
        n.appendChild(c)
    }
    l.style.display = "block",
    i.style.zIndex = "3"
}
function closeCarousel() {
    let e = document.querySelector(".carousel-section")
      , t = document.querySelector(".maincontent");
    e.style.display = "none",
    t.style.zIndex = "2"
}
function checkTouchSupport() {
    return !!("maxTouchPoints"in navigator && navigator.maxTouchPoints > 0 || "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
}
function back() {
    let e = document.querySelector(".whole-screen");
    e.style.animationDirection = "reverse",
    e.style.display = "flex",
    setTimeout(()=>{
        window.history.back()
        e.style.display = "none",
    }
    , 900)
}
hiddenElements.forEach(e=>observer.observe(e)),
window.addEventListener("load", function() {
    setTimeout(function() {
        window.scrollTo(0, 1)
    }, 0)
});
