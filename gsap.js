gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#dino-days",
            markers: true,
            pin: true,
            start: "top 75%",
            end: "bottom 55%",
            toggleActions: "play none reverse play"
        }
    })
    .fromTo("#dino-days", { x: -300, opacity: 0 }, { duration: 2.5, opacity: 1, x: 10, ease: "elastic" })
    .fromTo("#hourglass", { opacity: 0 }, { duration: 3, rotate: 360, opacity: 1 })
    .fromTo("#first-cloud", { opacity: 0 }, { duration: 2, opacity: 1, ease: "back", scale: "1.2", repeat: -1 })
    .fromTo("#second-cloud", { opacity: 0 }, { duration: 2, opacity: 1, ease: "back", scale: "1.1", repeat: -1 })
    .to("#first-volcano", { opacity: 1, duration: 1, x: .2, repeat: -1 })