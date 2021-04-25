gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#dino-days",
            markers: false,
            pin: true,
            start: "top 75%",
            end: "bottom 55%",
            toggleActions: "play none reverse play"
        }
    })
    .fromTo("#dino-days", { x: -300, opacity: 0 }, { duration: 2.5, opacity: 1, x: 10, ease: "elastic" })
    .fromTo("#hourglass", { opacity: 0 }, { duration: 1, rotate: 360, opacity: 1 })
    .fromTo("#first-cloud", { opacity: 0 }, { duration: 1.2, opacity: 1, ease: "back", scale: "1.2", repeat: -1 })
    .fromTo("#second-cloud", { opacity: 0 }, { duration: 1.2, opacity: 1, ease: "back", scale: "1.1", repeat: -1 })
    .to("#first-volcano", { opacity: 1, duration: .1, x: 1, repeat: -1 })
    .fromTo("#first-red-bubble", { opacity: 0 }, { duration: 2, opacity: 1, scale: 1.2, ease: "bounce.inOut", repeat: -1 })
    .fromTo("#first-bubble-group", { opacity: 0 }, { duration: 2.1, opacity: 1, scale: 1.2, ease: "elastic", repeat: -1 })
    .fromTo("#redline-asset53", { opacity: .6 }, { duration: 1, opacity: 1, scale: 1.2, ease: "power1", repeat: 3 })
    .fromTo("#redline-asset52", { opacity: 0 }, { duration: 1, opacity: 1, scale: 1.2, ease: "power1" })
    .fromTo("#redline-asset51", { opacity: 0 }, { duration: 1, opacity: 1, scale: 1.2, ease: "power1" })



.fromTo("#redline-asset34", { opacity: .6 }, { duration: 1, opacity: 1, ease: "power1", repeat: -1 })
    .fromTo("#redline-asset55", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power1" })
    .fromTo("#redline-asset54", { opacity: 0 }, { duration: 1, opacity: 1, scale: 1, ease: "power1" })
    .fromTo("#second-bubble-group", { opacity: 0 }, { duration: .5, opacity: 1, scale: 1.2, ease: "elastic", repeat: -1 })
    .to("#last-red-bubble", { scale: .2, duration: 5, repeat: -1 })