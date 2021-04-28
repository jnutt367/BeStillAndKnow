gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
    defaults: {
        opacity: 0
    },
    scrollTrigger: {
        trigger: "",
        markers: false,
        pin: true,
        start: "top 75%",
        end: "bottom 45%",
        toggleActions: "restart none none reverse"
    }
})