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
    .fromTo("#dino-days", { opacity: 0 }, { duration: 3, opacity: 1, scale: 1.3, ease: "elastic" })
    .fromTo("#small-redline-asset53", { opacity: 0 }, { opacity: 1, scale: "1.1", ease: "elastic.inOut", repeat: 2 })
    .fromTo("#small-redline-asset54", { opacity: 0 }, { opacity: 1, ease: "elastic.inOut", repeat: 2 })
    .fromTo("#redline-asset34", { opacity: 0 }, { opacity: 1, ease: "elastic.inOut", repeat: 2 })
    .fromTo("#small-redline-asset55", { opacity: 0 }, { opacity: 1, ease: "elastic.inOut", repeat: 2 })
    .fromTo("#small-redline-asset56", { opacity: 0 }, { opacity: 1, ease: "elastic.inOut", repeat: 2 })
    .fromTo("#small-redline-asset52", { opacity: 0 }, { opacity: 1, ease: "elastic.inOut", repeat: 2 })
    .fromTo("#small-lavastream-asset57", { opacity: 0 }, { opacity: 1, ease: "elastic.inOut", repeat: 2 })