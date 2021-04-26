gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#dino-days",
            test: "second-caveman",
            markers: false,
            pin: true,
            start: "top 75%",
            end: "bottom 45%",
            toggleActions: "play none reverse play"
        }
    })
    .fromTo("#dino-days", { x: -300, opacity: 0 }, { duration: 2.5, opacity: 1, x: 10, ease: "elastic" })
    .fromTo("#hourglass", { opacity: 0 }, { duration: 1, rotate: 360, opacity: 1 })
    .fromTo("#first-cloud", { opacity: 0 }, { duration: 1.2, opacity: 1, ease: "back", scale: "1.2", repeat: "-1" })
    .fromTo("#second-cloud", { opacity: 0 }, { duration: 4, opacity: 1, ease: "back", scale: "1.1", repeat: "-1" })
    .to("#first-volcano", { opacity: 1, duration: .1, x: 1, repeat: "-1" })
    .fromTo("#first-red-bubble", { opacity: 0 }, { duration: 2, opacity: 1, scale: 1.2, ease: "bounce.inOut", repeat: "-1" })
    .fromTo("#first-bubble-group", { opacity: 0 }, { duration: 2.1, opacity: 1, scale: 1.2, ease: "elastic", repeat: "-1" })
    .fromTo("#redline-asset53", { opacity: .6 }, { duration: 1, opacity: 1, scale: 1.2, ease: "power1", repeat: 3 })
    .fromTo("#redline-asset52", { opacity: 0 }, { duration: 1, opacity: 1, scale: 1.2, ease: "power1" })
    .fromTo("#redline-asset51", { opacity: 0 }, { duration: 1, opacity: 1, scale: 1.2, ease: "power1" })



.fromTo("#redline-asset34", { opacity: .6 }, { duration: 1, opacity: 1, ease: "power1", repeat: "-1" })
    .fromTo("#redline-asset55", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power1" })
    .fromTo("#redline-asset54", { opacity: 0 }, { duration: 1, opacity: 1, scale: 1, ease: "power1" })
    .fromTo("#second-bubble-group", { opacity: 0 }, { duration: .5, opacity: 1, scale: 1.2, ease: "elastic", repeat: "-1" })
    .fromTo("#last-red-bubble", { scale: 1, opacity: 0 }, { opacity: 1, scale: .2, duration: 5, repeat: "-1" })
    .fromTo("#dark-stream", { opacity: .2 }, { opacity: 1, duration: 3, ease: "power3" })
    .fromTo("#first-blue-bubble-group", { opacity: 0 }, { duration: 2.1, opacity: 1, scale: 1.2, ease: "back.OutIn", repeat: "3" })
    .fromTo("#first-blue-bubble-group", { opacity: 0 }, { duration: 2.1, opacity: 1, scale: 1.2, ease: "elastic", repeat: "-1" })
    .fromTo("#skull", { y: -10, opacity: 1 }, { opacity: 0, y: 1, duration: 6, ease: "bounce" })
    .fromTo("#second-blue-bubble-group", { opacity: 0 }, { duration: 3, opacity: 1, scale: 1.2, ease: "elastic", repeat: "-1" })
    .to("#nature-overlay", { duration: .2, y: 2, x: 10, repeat: "3" })
    .fromTo("#roar", { opacity: 0 }, { duration: 3, opacity: 1, scale: 1.2, ease: "elastic", repeat: "-1" })
    .fromTo("#terry", { x: -200 }, { duration: 5, x: 400 })
    .to("#first-caveman", { duration: 1, y: -100, ease: "bounce.in" })
    .to("#second-caveman", { duration: 1, x: -60, y: 57, ease: "bounce.in", zIndex: "0" })