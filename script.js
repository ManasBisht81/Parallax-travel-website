// ===== ORIGINAL PARALLAX ANIMATION (preserved) =====
gsap.registerPlugin(ScrollTrigger);

let speed = 100;
let height = document.querySelector("svg").getBBox().height;

gsap.set("#h2-1", { opacity: 0 });
gsap.set("#bg_grad", { attr: { cy: "-50" } });
gsap.set(["#dinoL", "#dinoR"], { y: 80 });
gsap.set("#dinoL", { x: -10 });

const mm = gsap.matchMedia();
mm.add("(max-width: 1922px)", () => {
    gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
});

/* SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({ animation: scene1, trigger: ".scrollElement", start: "top top", end: "45% 100%", scrub: 3 });

scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudStart-L", { x: -300 }, 0);
scene1.to("#cloudStart-R", { x: 300 }, 0);
scene1.to("#info", { y: 8 * speed }, 0);

/* Bird */
gsap.fromTo("#bird", { opacity: 1 }, {
    y: -250, x: 800, ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement", start: "15% top", end: "60% 100%", scrub: 4,
        onEnter: () => gsap.to("#bird", { scaleX: 1, rotation: 0 }),
        onLeave: () => gsap.to("#bird", { scaleX: -1, rotation: -15 })
    }
});

/* Clouds */
let clouds = gsap.timeline();
ScrollTrigger.create({ animation: clouds, trigger: ".scrollElement", start: "top top", end: "70% 100%", scrub: 1 });
clouds.to("#cloud1", { x: 500 }, 0);
clouds.to("#cloud2", { x: 1000 }, 0);
clouds.to("#cloud3", { x: -1000 }, 0);
clouds.to("#cloud4", { x: -700, y: 25 }, 0);

/* Sun motion */
let sun = gsap.timeline();
ScrollTrigger.create({ animation: sun, trigger: ".scrollElement", start: "1% top", end: "2150 100%", scrub: 2 });
sun.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

/* SCENE 2 */
let scene2 = gsap.timeline();
ScrollTrigger.create({ animation: scene2, trigger: ".scrollElement", start: "15% top", end: "40% 100%", scrub: 3 });
scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

/* Bats */
gsap.set("#bats", { transformOrigin: "50% 50%" });
gsap.fromTo("#bats", { opacity: 1, y: 400, scale: 0 }, {
    y: 20, scale: 0.8, ease: "power3.out",
    scrollTrigger: {
        trigger: ".scrollElement", start: "40% top", end: "70% 100%", scrub: 3,
        onEnter: () => {
            gsap.utils.toArray("#bats path").forEach((item, i) => {
                gsap.to(item, { scaleX: 0.5, yoyo: true, repeat: 9, transformOrigin: "50% 50%", duration: 0.15, delay: 0.7 + i / 10 });
            });
            gsap.set("#bats", { opacity: 1 });
        }
    }
});

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({ animation: sun2, trigger: ".scrollElement", start: "2000 top", end: "5000 100%", scrub: 2 });
sun2.to("#sun", { attr: { offset: "1.4" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

/* Scene transition */
gsap.set("#scene3", { y: height - 40, visibility: "visible" });
let sceneTransition = gsap.timeline();
ScrollTrigger.create({ animation: sceneTransition, trigger: ".scrollElement", start: "60% top", end: "bottom 100%", scrub: 3 });
sceneTransition.to("#h2-1", { y: -height - 100, scale: 1.5, transformOrigin: "50% 50%" }, 0);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
sceneTransition.to("#bg2", { y: 0 }, 0);

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({ animation: scene3, trigger: ".scrollElement", start: "70% 50%", end: "bottom 100%", scrub: 3 });
scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);
scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);
scene3.to("footer", { opacity: 1 }, 0.3);
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

/* Falling star */
gsap.set("#fstar", { y: -400 });
let fstarTL = gsap.timeline();
ScrollTrigger.create({
    animation: fstarTL, trigger: ".scrollElement", start: "4200 top", end: "6000 bottom", scrub: 2,
    onEnter: () => gsap.set("#fstar", { opacity: 1 }),
    onLeave: () => gsap.set("#fstar", { opacity: 0 })
});
fstarTL.to("#fstar", { x: -700, y: -250, ease: "power2.out" }, 0);

/* Stars twinkling */
[1,3,5,8,11,15,17,18,25,28,30,35,40,45,48].forEach((n, i) => {
    gsap.fromTo(`#stars path:nth-of-type(${n})`, { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: [0.8,1.8,1,1.2,0.5,2,1.1,1.4,1.1,0.9,1.3,2,0.8,1.8,1][i] });
});

window.onbeforeunload = () => window.scrollTo(0, 0);

// ===== HERO OVERLAY FADE =====
gsap.to("#heroOverlay", {
    opacity: 0, pointerEvents: "none",
    scrollTrigger: { trigger: ".scrollElement", start: "8% top", end: "20% top", scrub: 1 }
});

// ===== SCENE TEXT ANIMATIONS =====
// Scene 1 Text
gsap.fromTo("#sceneText1", { opacity: 0, y: 30 }, {
    opacity: 1, y: 0,
    scrollTrigger: { trigger: ".scrollElement", start: "5% top", end: "10% top", scrub: 1 }
});
gsap.to("#sceneText1", {
    opacity: 0, y: -30,
    scrollTrigger: { trigger: ".scrollElement", start: "15% top", end: "20% top", scrub: 1 }
});

// Scene 2 Text
gsap.fromTo("#sceneText2", { opacity: 0, y: 30 }, {
    opacity: 1, y: 0,
    scrollTrigger: { trigger: ".scrollElement", start: "30% top", end: "35% top", scrub: 1 }
});
gsap.to("#sceneText2", {
    opacity: 0, y: -30,
    scrollTrigger: { trigger: ".scrollElement", start: "45% top", end: "50% top", scrub: 1 }
});

// Scene 3 Text
gsap.fromTo("#sceneText3", { opacity: 0, y: 30 }, {
    opacity: 1, y: 0,
    scrollTrigger: { trigger: ".scrollElement", start: "65% top", end: "70% top", scrub: 1 }
});
gsap.to("#sceneText3", {
    opacity: 0, y: -30,
    scrollTrigger: { trigger: ".scrollElement", start: "80% top", end: "85% top", scrub: 1 }
});


// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 100);
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ===== FAVORITE BUTTON TOGGLE =====
document.querySelectorAll(".dest-fav").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        btn.classList.toggle("active");
        const icon = btn.querySelector("i");
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
        btn.style.transform = "scale(1.3)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
    });
});

// ===== SEARCH FILTER =====
document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchDest").value.toLowerCase().trim();
    const cards = document.querySelectorAll(".dest-card");
    let found = false;
    cards.forEach(card => {
        const name = card.dataset.name;
        if (!query || name.includes(query)) {
            card.style.display = "";
            found = true;
        } else {
            card.style.display = "none";
        }
    });
    if (!found) {
        cards.forEach(c => c.style.display = "");
        alert("No destinations found for \"" + query + "\". Showing all.");
    }
    document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

// ===== TRIP TRACKER ANIMATION =====
const trackerSection = document.querySelector(".tracker-section");
const trackerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateTracker();
            trackerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (trackerSection) trackerObserver.observe(trackerSection);

function animateTracker() {
    const progress = document.getElementById("trackerProgress");
    const steps = document.querySelectorAll(".tracker-step");
    const stages = [
        { progress: "10%", activeIdx: 0, delay: 0 },
        { progress: "25%", activeIdx: 1, delay: 1200 },
        { progress: "42%", activeIdx: 2, delay: 2400 },
    ];
    stages.forEach(({ progress: w, activeIdx, delay }) => {
        setTimeout(() => {
            if (progress) progress.style.width = w;
            steps.forEach((step, i) => {
                step.classList.remove("active");
                if (i < activeIdx) step.classList.add("completed");
                if (i === activeIdx) step.classList.add("active");
            });
        }, delay);
    });
}

// ===== SMOOTH NAV SCROLL =====
document.querySelectorAll('.nav-links a, .hero-cta').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== STATS COUNTER ANIMATION =====
const statsBar = document.querySelector(".stats-bar");
if (statsBar) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".stat-number span").forEach(el => {
                    const text = el.textContent;
                    el.style.opacity = "0";
                    el.style.transform = "translateY(20px)";
                    setTimeout(() => {
                        el.style.transition = "opacity 0.6s, transform 0.6s";
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    }, 200);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    statsObserver.observe(statsBar);
}

// ===== DESTINATION IMAGE PARALLAX =====
gsap.utils.toArray(".dest-card img").forEach(img => {
    gsap.to(img, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// ===== DESTINATION 3D HOVER IMAGE EFFECT =====
document.querySelectorAll('.dest-card').forEach(card => {
    const img = card.querySelector('img');
    card.addEventListener('mouseenter', () => {
        gsap.to(img, { scale: 1.15, rotation: -2, duration: 0.5, ease: "back.out(1.7)", overwrite: "auto" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(img, { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)", overwrite: "auto" });
    });
});