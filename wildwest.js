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
    .fromTo("#hourglass", { opacity: 0 }, { opacity: 1, rotate: 720 })
    .fromTo("#train", { x: 300, opacity: 1 }, { duration: 5, x: -300, opacity: 1, repeat: -1 }, 0)
    .fromTo("#smoke", { x: 300, opacity: 1 }, { duration: 5, x: -300, opacity: 1, repeat: -1 }, 0)
    .fromTo("#clouds", { x: -300, opacity: 1 }, { x: 300, opacity: 1, repeat: -1 }, 0)
    .fromTo("#sun", { x: -40, opacity: 1 }, { duration: 5, x: 300, opacity: 1, repeat: -1 }, 0)