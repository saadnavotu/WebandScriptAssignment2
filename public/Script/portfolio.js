// IIFI
// Imediately invoked function expression
(function () {

    function start() {
        console.log("App started");
    }
    window.addEventListener("load", start);
})();

// personal video in about me section functionality
function playPause() {
    const video = document.getElementById("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// home card color change
document.addEventListener("DOMContentLoaded", function () {
    const homeCard = document.querySelector('.home-card');
    if (homeCard) {
        homeCard.addEventListener('mouseenter', function () {
            homeCard.classList.add('animate-gradient');
        });
        homeCard.addEventListener('mouseleave', function () {
            homeCard.classList.remove('animate-gradient');
        });
    }
});

// home card animation
document.addEventListener("DOMContentLoaded", function () {
    // Home card animation ease in animation when page loaded
    const homeCard = document.querySelector(".home-card");
    if (homeCard) {
        homeCard.style.opacity = 0;
        homeCard.style.transform = "translateY(40px)";
        setTimeout(() => {
            homeCard.style.transition = "all 1s ease";
            homeCard.style.opacity = 1;
            homeCard.style.transform = "translateY(0)";
        }, 200);
        // hover color change
        homeCard.addEventListener("mouseenter", () => homeCard.classList.add("animate-gradient"));
        homeCard.addEventListener("mouseleave", () => homeCard.classList.remove("animate-gradient"));
    }

    // Home profile picture image hover animation
    const myImg = document.querySelector('.home-img');
    if (myImg) {
        myImg.addEventListener('mouseenter', () => myImg.classList.add('spin-3d'));
        myImg.addEventListener('mouseleave', () => myImg.classList.remove('spin-3d'));
    }

    // Contact box hover color change
    const contactBox = document.querySelector('.contact-main');
    if (contactBox) {
        contactBox.addEventListener('mouseenter', function () {
            contactBox.style.background = "linear-gradient(115deg,#7fadf8 0%, #96fbc4 100%)";
        });
        contactBox.addEventListener('mouseleave', function () {
            contactBox.style.background = "linear-gradient(to right,#FFF461 0%, #DEAE54 50%,#f59169 100%)";
        });
    }
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
    // show/hide on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // mouse click animation
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// projects feature functionality
document.addEventListener("DOMContentLoaded", function () {
    // Project Slider Functionality
    const cards = document.querySelectorAll('.project-card');
    const leftBtn = document.getElementById('slideLeft');
    const rightBtn = document.getElementById('slideRight');
    let current = 0;

    // What project is active functionality
    function showCard(index) {
        cards.forEach((c, i) => c.classList.remove('active'));
        if (cards[index]) {
            cards[index].classList.add('active');
            leftBtn.disabled = (index === 0);
            rightBtn.disabled = (index === cards.length - 1);
        }
    }

    // left and right project change animation
    if (cards.length && leftBtn && rightBtn) {
        showCard(current);
        leftBtn.addEventListener('click', function () {
            if (current > 0) { current--; showCard(current); }
        });
        rightBtn.addEventListener('click', function () {
            if (current < cards.length - 1) { current++; showCard(current); }
        });
    }
});

