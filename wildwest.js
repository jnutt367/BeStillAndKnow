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
    .fromTo("#clouds", { x: -300, opacity: 1 }, { duration: 3, x: 300, opacity: 0.9, ease: "power2.inOut", repeat: -1 }, 0)
    .fromTo("#sun", { x: -40, opacity: 1 }, { duration: 5, x: 300, opacity: 1, repeat: -1 }, 0)
    .to("#cow1", { x: -10, opacity: 1 })
    .fromTo("#sheriff", { y: -40, opacity: 1 }, { duration: 1.5, x: 20, y: 60, scale: "1.3", opacity: 1 }, 1)
    .fromTo("#outlaw", { x: 10, opacity: 1 }, { x: 50, y: 70, opacity: 1 }, +0.5)
    .fromTo("#draw", { opacity: 0 }, { opacity: 1 }, 2.5)