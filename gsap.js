gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#dino-days",
            markers: true,
            pin: true,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none reverse play"
        }
    })
    .fromTo("#hourglass", { opacity: 0 }, { duration: 3, rotate: 360, opacity: 1 })
    .fromTo("#first-cloud", { opacity: 0 }, { duration: 2, opacity: 1, ease: "elastic", scale: "1.1", repeat: -1 })
    .fromTo("#second-cloud", { opacity: 0 }, { duration: 2, opacity: 1, ease: "elastic", scale: "1.1", repeat: -1 })
    .to("#first-volcano", { opacity: 1, duration: 1, x: .2, repeat: -1 })