gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "",
            markers: true,
            pin: true,
            start: "top 60%",
            end: "bottom 40%",

        }
    })
    .fromTo("#", { opacity: 0 }, { opacity: 1 })
    .fromTo("", { opacity: 0 }, { opacity: 1 })
    .fromTo("", { opacity: 0 }, { opacity: 1 })