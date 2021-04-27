gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        defaults: {
            opacity: 0
        },
        scrollTrigger: {
            trigger: "#hourglass",
            markers: false,
            pin: true,
            start: "top 75%",
            end: "bottom 45%",
            toggleActions: "restart none none reverse"
        }
    })
    .fromTo("#hourglass", { opacity: 0 }, { duration: 1, opacity: 1, rotate: 720 })
    .fromTo("#dino-days", { opacity: 0 }, { duration: 3, opacity: 1, scale: 1.3, ease: "elastic" })