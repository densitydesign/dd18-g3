gsap.registerPlugin(ScrollTrigger);

//------------------------ SHOW NAVBAR ------------------------------------------------------------

gsap.from("#titolo", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  opacity: 1,
});

gsap.from(".bottoncini", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  opacity: 1,
});

gsap.from("#coperchio1", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  left: "0vw",
  ease: "power2.out",
});

gsap.from("#titolone", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  top: "200vh",
});

gsap.from("#initialanimationcont", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  top: "200vh",
});

gsap.from("#coperchio2", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  left: "-100vw",
  ease: "power2.out",
});

//------------------------ SCROLLITELLING ------------------------------------------------------------

let atxt1 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tsecondpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "none none reverse none",
      scrub: true,
    },
  })
  .from(
    "#atxt1",
    {
      top: "0vh",
    },
    "<0.1"
  )
  .from(
    "#atxt2",
    {
      top: "0vh",
    },
    "<0.1"
  )
  .from(
    "#atxt3",
    {
      top: "0vh",
    },
    "<0.1"
  )
  .from(
    "#atxt4",
    {
      top: "0vh",
    },
    "<0.1"
  )
  .from(
    "#atxt5",
    {
      top: "0vh",
    },
    "<0.1"
  )
  .from(
    "#atxt6",
    {
      top: "0vh",
    },
    "<0.1"
  )
  .from(
    "#atxt7",
    {
      top: "0vh",
    },
    "<0.1"
  );
