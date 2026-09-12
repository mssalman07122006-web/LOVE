/* =========================================================
   BABY LOVE WEBSITE ❤️
========================================================= */


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 2200);

});


/* =========================================================
   CUSTOM HEART CURSOR
========================================================= */

const cursorHeart =
    document.querySelector(".cursor-heart");

const cursorDot =
    document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {

    if (!cursorHeart || !cursorDot) return;

    cursorHeart.style.left =
        e.clientX + "px";

    cursorHeart.style.top =
        e.clientY + "px";

    cursorDot.style.left =
        e.clientX + "px";

    cursorDot.style.top =
        e.clientY + "px";

});


/* =========================================================
   HEART TRAIL
========================================================= */

let lastHeart = 0;

document.addEventListener("mousemove", (e) => {

    const now = Date.now();

    if (now - lastHeart < 140) return;

    lastHeart = now;

    const heart =
        document.createElement("div");

    heart.innerHTML =
        Math.random() > .5 ? "♥" : "♡";

    heart.style.position = "fixed";

    heart.style.left =
        e.clientX + "px";

    heart.style.top =
        e.clientY + "px";

    heart.style.pointerEvents =
        "none";

    heart.style.color =
        "#ff6c9d";

    heart.style.fontSize =
        Math.random() * 8 + 7 + "px";

    heart.style.zIndex =
        "9997";

    heart.style.opacity =
        ".55";

    heart.style.transition =
        "1s ease";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            "translateY(-25px) scale(1.7)";

        heart.style.opacity =
            "0";

    }, 20);

    setTimeout(() => {

        heart.remove();

    }, 1000);

});


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML =
        Math.random() > .5
            ? "♥"
            : "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 18 + 8 + "px";

    heart.style.animationDuration =
        Math.random() * 7 + 7 + "s";

    heart.style.setProperty(
        "--move",
        (Math.random() * 200 - 100) + "px"
    );

    document
        .querySelector(".floating-hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 15000);

}


setInterval(createFloatingHeart, 600);


/* =========================================================
   ROSE PETALS
========================================================= */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.className =
        "petal";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        Math.random() * 7 + 7 + "s";

    petal.style.setProperty(
        "--x",
        (Math.random() * 300 - 150) + "px"
    );

    document
        .querySelector(".petals")
        .appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 15000);

}


setInterval(createPetal, 900);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const reveals =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                }

            });

        },
        {
            threshold: .12
        }
    );


reveals.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   START LOVE
========================================================= */

const startLove =
    document.getElementById("startLove");

if (startLove) {

    startLove.addEventListener("click", () => {

        createHeartExplosion(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

        const intro =
            document.querySelector(".intro");

        if (intro) {

            intro.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* =========================================================
   3D PHOTO TILT
========================================================= */

const cards =
    document.querySelectorAll(".tilt-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        if (window.innerWidth < 700) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 28;

        const rotateY =
            (centerX - x) / 28;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});


/* =========================================================
   RELATIONSHIP COUNTER
========================================================= */

const relationshipDate =
    new Date("2026-04-21T00:00:00");


function updateCounter() {

    const now =
        new Date();

    let difference =
        now - relationshipDate;

    if (difference < 0) {

        difference = 0;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (daysElement) {

        daysElement.textContent =
            days.toLocaleString();

    }


    if (hoursElement) {

        hoursElement.textContent =
            String(hours).padStart(2, "0");

    }


    if (minutesElement) {

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

    }


    if (secondsElement) {

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }

}


updateCounter();


setInterval(
    updateCounter,
    1000
);


/* =========================================================
   LOVE LETTER
========================================================= */

const envelope =
    document.getElementById("envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

        createHeartExplosion(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

    });

}


/* =========================================================
   HEART EXPLOSION
========================================================= */

function createHeartExplosion(x, y) {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "burst-heart";

        heart.innerHTML =
            Math.random() > .5
                ? "♥"
                : "♡";

        heart.style.left =
            x + "px";

        heart.style.top =
            y + "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() *
            220 + 80;


        const moveX =
            Math.cos(angle) *
            distance;


        const moveY =
            Math.sin(angle) *
            distance;


        heart.style.setProperty(
            "--x",
            moveX + "px"
        );


        heart.style.setProperty(
            "--y",
            moveY + "px"
        );


        heart.style.fontSize =
            Math.random() * 20 + 10 + "px";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 1000);

    }

}


/* =========================================================
   CLICK HEART EFFECT
========================================================= */

document.addEventListener("click", (e) => {

    if (
        e.target.closest(".envelope") ||
        e.target.closest(".forever-button") ||
        e.target.closest(".love-button") ||
        e.target.closest(".close-modal") ||
        e.target.closest(".music-btn")
    ) {

        return;

    }


    createHeartExplosion(
        e.clientX,
        e.clientY
    );

});


/* =========================================================
   MUSIC BUTTON — RATHINAMO ❤️
========================================================= */

const musicBtn =
    document.getElementById("musicBtn");

const loveSong =
    new Audio("Rathinamo.mp3");

loveSong.loop = true;

loveSong.volume = 0.45;

let musicPlaying = false;


if (musicBtn) {

    musicBtn.addEventListener(
        "click",
        async (e) => {

            e.stopPropagation();


            try {

                if (!musicPlaying) {

                    await loveSong.play();

                    musicPlaying = true;

                    musicBtn.innerHTML =
                        "♫";

                    musicBtn.classList.add(
                        "playing"
                    );

                }

                else {

                    loveSong.pause();

                    musicPlaying = false;

                    musicBtn.innerHTML =
                        "♡";

                    musicBtn.classList.remove(
                        "playing"
                    );

                }

            }

            catch (error) {

                console.log(
                    "Music could not be played:",
                    error
                );

            }

        }
    );

}


/* =========================================================
   SURPRISE MODAL
========================================================= */

const foreverBtn =
    document.getElementById("foreverBtn");

const modal =
    document.getElementById("surpriseModal");

const closeModal =
    document.getElementById("closeModal");


if (foreverBtn && modal) {

    foreverBtn.addEventListener(
        "click",
        () => {

            modal.classList.add("show");

            document.body.style.overflow =
                "hidden";

            startKissStorm();

            startSurpriseHearts();

            createHeartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }
    );

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeSurprise
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        (e) => {

            if (
                e.target === modal
            ) {

                closeSurprise();

            }

        }
    );

}


function closeSurprise() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* =========================================================
   💋 KISS STORM
========================================================= */

let kissInterval = null;


function startKissStorm() {

    const container =
        document.getElementById(
            "kissContainer"
        );


    if (!container) return;


    /* Initial MASSIVE burst */

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {

            createKiss(container);

        }, i * 18);

    }


    /* Continuous kisses */

    if (kissInterval) {

        clearInterval(kissInterval);

    }


    kissInterval =
        setInterval(() => {

            for (let i = 0; i < 5; i++) {

                createKiss(container);

            }

        }, 220);

}


function createKiss(container) {

    const kiss =
        document.createElement("div");

    kiss.className =
        "kiss";

    kiss.innerHTML =
        Math.random() > .35
            ? "💋"
            : "😘";


    /*
       Start from random positions
       around the screen.
    */

    const startX =
        Math.random() *
        window.innerWidth;


    const startY =
        Math.random() *
        window.innerHeight;


    const moveX =
        (Math.random() * 600) - 300;


    const moveY =
        -(
            Math.random() *
            700 + 300
        );


    const scale =
        Math.random() *
        1.6 + .7;


    const rotate =
        Math.random() *
        100 - 50;


    const duration =
        Math.random() *
        3 + 3;


    kiss.style.left =
        startX + "px";


    kiss.style.top =
        startY + "px";


    kiss.style.setProperty(
        "--x",
        moveX + "px"
    );


    kiss.style.setProperty(
        "--y",
        moveY + "px"
    );


    kiss.style.setProperty(
        "--scale",
        scale
    );


    kiss.style.setProperty(
        "--rotate",
        rotate + "deg"
    );


    kiss.style.setProperty(
        "--duration",
        duration + "s"
    );


    container.appendChild(kiss);


    setTimeout(() => {

        kiss.remove();

    }, duration * 1000 + 500);

}


/* =========================================================
   SURPRISE HEARTS
========================================================= */

let surpriseHeartInterval = null;


function startSurpriseHearts() {

    const container =
        document.getElementById(
            "surpriseHearts"
        );


    if (!container) return;


    for (let i = 0; i < 60; i++) {

        setTimeout(() => {

            createSurpriseHeart(
                container
            );

        }, i * 40);

    }


    if (surpriseHeartInterval) {

        clearInterval(
            surpriseHeartInterval
        );

    }


    surpriseHeartInterval =
        setInterval(() => {

            createSurpriseHeart(
                container
            );

        }, 350);

}


function createSurpriseHeart(container) {

    const heart =
        document.createElement("div");

    heart.innerHTML =
        Math.random() > .5
            ? "♥"
            : "♡";


    heart.style.position =
        "absolute";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.top =
        Math.random() * 100 + "%";


    heart.style.color =
        Math.random() > .5
            ? "#ff6f9e"
            : "#ffb0c7";


    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";


    heart.style.opacity =
        ".7";


    heart.style.pointerEvents =
        "none";


    heart.style.transition =
        "2s ease";


    container.appendChild(
        heart
    );


    setTimeout(() => {

        heart.style.transform =
            "scale(2) rotate(25deg)";

        heart.style.opacity =
            "0";

    }, 50);


    setTimeout(() => {

        heart.remove();

    }, 2000);

}


/* =========================================================
   HOVER CURSOR
========================================================= */

const interactive =
    document.querySelectorAll(
        "button, .envelope, .photo-card"
    );


interactive.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            if (!cursorHeart) return;

            cursorHeart.style.transform =
                "translate(-50%, -50%) scale(1.5)";

            cursorHeart.style.color =
                "#ffb2c9";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            if (!cursorHeart) return;

            cursorHeart.style.transform =
                "translate(-50%, -50%) scale(1)";

            cursorHeart.style.color =
                "#ff7fa9";

        }
    );

});


/* =========================================================
   KEYBOARD SECRET
========================================================= */

document.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key.toLowerCase() === "l"
        ) {

            createHeartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }


        if (
            e.key === "Escape" &&
            modal &&
            modal.classList.contains("show")
        ) {

            closeSurprise();

        }

    }
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

          ♥ BABY ♥

    Our story started here.

          21 • 04 • 2026

       You + Me = Forever

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);


/* =========================================================
   💗 CHERRY LOVE INTERACTION UPGRADE
========================================================= */

(() => {

    "use strict";


    const $ = (s, root = document) =>
        root.querySelector(s);


    const $$ = (s, root = document) =>
        [...root.querySelectorAll(s)];


    /* -----------------------------
       Scroll progress
    ----------------------------- */

    const progress =
        $(".scroll-progress span");


    const updateProgress = () => {

        if (!progress) return;


        const max =
            document.documentElement.scrollHeight -
            window.innerHeight;


        progress.style.width =
            max > 0
                ? `${(window.scrollY / max) * 100}%`
                : "0%";

    };


    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );


    window.addEventListener(
        "resize",
        updateProgress
    );


    updateProgress();


    /* -----------------------------
       Smooth cursor + glow
    ----------------------------- */

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;


    document.addEventListener(
        "mousemove",
        (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

        }
    );


    const animateCursor =
        () => {

            currentX +=
                (mouseX - currentX) * .18;

            currentY +=
                (mouseY - currentY) * .18;


            if (cursorHeart) {

                cursorHeart.style.left =
                    currentX + "px";

                cursorHeart.style.top =
                    currentY + "px";

            }


            if (cursorDot) {

                cursorDot.style.left =
                    mouseX + "px";

                cursorDot.style.top =
                    mouseY + "px";

            }


            requestAnimationFrame(
                animateCursor
            );

        };


    animateCursor();


    /* -----------------------------
       Photo shine
    ----------------------------- */

    $$(".photo-card").forEach(card => {

        card.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    ((e.clientX - rect.left) /
                        rect.width) * 100;


                const y =
                    ((e.clientY - rect.top) /
                        rect.height) * 100;


                card.style.setProperty(
                    "--mx",
                    `${x}%`
                );


                card.style.setProperty(
                    "--my",
                    `${y}%`
                );

            }
        );

    });


    /* -----------------------------
       Random love dust
    ----------------------------- */

    const dust =
        $(".love-dust");


    if (dust) {

        for (let i = 0; i < 28; i++) {

            const particle =
                document.createElement("span");


            particle.style.left =
                Math.random() * 100 + "%";


            particle.style.top =
                Math.random() * 100 + "%";


            particle.style.animationDelay =
                Math.random() * 8 + "s";


            particle.style.animationDuration =
                Math.random() * 6 + 5 + "s";


            dust.appendChild(
                particle
            );

        }

    }


    /* -----------------------------
       Scroll reveal safety
    ----------------------------- */

    $$(".reveal").forEach(
        element => {

            if (
                element.classList.contains(
                    "active"
                )
            ) return;


            const observer =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(
                            entry => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target
                                        .classList
                                        .add("active");

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: .08
                    }
                );


            observer.observe(element);

        }
    );


    /* -----------------------------
       Button ripple
    ----------------------------- */

    $$("button").forEach(button => {

        button.addEventListener(
            "click",
            (e) => {

                const rect =
                    button.getBoundingClientRect();


                const ripple =
                    document.createElement("span");


                ripple.className =
                    "button-ripple";


                ripple.style.left =
                    (e.clientX - rect.left) + "px";


                ripple.style.top =
                    (e.clientY - rect.top) + "px";


                button.appendChild(
                    ripple
                );


                setTimeout(() => {

                    ripple.remove();

                }, 700);

            }
        );

    });


    /* -----------------------------
       Double click love
    ----------------------------- */

    document.addEventListener(
        "dblclick",
        (e) => {

            if (
                e.target.closest(
                    "button, .envelope, a"
                )
            ) return;


            createHeartExplosion(
                e.clientX,
                e.clientY
            );

        }
    );


    /* -----------------------------
       Final section heartbeat
    ----------------------------- */

    const finalHeart =
        $(".final-heart");


    if (finalHeart) {

        setInterval(() => {

            finalHeart.classList.toggle(
                "pulse"
            );

        }, 1800);

    }


    /* -----------------------------
       Page loaded
    ----------------------------- */

    document.body.classList.add(
        "cherry-ready"
    );


})();