gsap.registerPlugin(ScrollTrigger);

function disableScroll() {
  console.log("prova");
  var element = document.getElementById("container");
  element.classList.add("noscroll");
}

function enableScroll() {
  console.log("prova1");
  var element = document.getElementById("container");
  element.classList.remove("noscroll");
}

gsap.from("#containerpallozzi", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#snapper",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
    toggleActions: "none none reverse none",
    snap: {
      snapTo: [
        0, 0.083, 0.166, 0.249, 0.332, 0.415, 0.498, 0.581, 0.664, 0.747, 0.83,
        0.913, 1,
      ],
      duration: { min: 0.1, max: 1 },
    },
    onUpdate: (self) => {
      console.log(self.progress);
    },
  },
  top: "150vh",
  ease: "none",
});

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
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to(
    "#atxt1",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#atxt2",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#atxt3",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#atxt3",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#atxt4",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#atxt5",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#atxt6",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#atxt7",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  );

let atxt2 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tthirdpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "none none play none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to("#htxt1", 0.3, {
    top: "0vh",
  })
  .to(
    "#htxt1_1",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#htxt0",
    0.3,
    {
      top: "0vh",
    },
    "<"
  )
  .to(
    "#htxt1",
    0.3,
    {
      top: "-10vh",
    },
    "<1.5"
  )
  .to(
    "#htxt1_1",
    0.3,
    {
      top: "-10vh",
    },
    "<0.1"
  )
  .to(
    "#htxt2",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#htxt2_1",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#htxt2",
    0.3,
    {
      top: "-10vh",
    },
    "<1.5"
  )
  .to(
    "#htxt2_1",
    0.3,
    {
      top: "-10vh",
    },
    "<0.1"
  )
  .to(
    "#htxt3",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#htxt3_1",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#htxt3",
    0.3,
    {
      top: "-10vh",
    },
    "<1.5"
  )
  .to(
    "#htxt3_1",
    0.3,
    {
      top: "-10vh",
    },
    "<0.1"
  )
  .to(
    "#htxt4",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#htxt4_1",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#htxt4_2",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#htxt5",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#allphases",
    0.3,
    {
      opacity: 1,
    },
    "<1.5"
  )
  .to(
    "#htxt4",
    0.3,
    {
      top: "-10vh",
    },
    "<0.1"
  )
  .to(
    "#htxt4_1",
    0.3,
    {
      top: "-10vh",
    },
    "<0.1"
  )
  .to(
    "#htxt0",
    0.3,
    {
      top: "-10vh",
    },
    "<"
  )
  .to(
    "#htxt4_2",
    0.3,
    {
      opacity: 0,
    },
    "<0.1"
  )
  .to(
    "#htxt5",
    0.3,
    {
      top: "-10vh",
    },
    "<0.1"
  )
  .to(
    "#bar",
    0,
    {
      display: "block",
    },
    "<0.1"
  )
  .to(
    "#triangle",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    ".greendot",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g1",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g3",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g2",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g4",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g5",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g6",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#PhaseLabel",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#bar",
    0.3,
    {
      opacity: 1,
    },
    "<0.1"
  )
  .to(
    "#triangle",
    0.3,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    ".greendot",
    0.3,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#g3",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g2",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g4",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g5",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g6",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#PhaseLabel",
    0.3,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#l1",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  );

let atxt3 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "none none play none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to(
    "#human",
    0,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#htxt6",
    0,
    {
      opacity: 1,
    },
    "<"
  );

let atxt4 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none none none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to("#bar", 0.3, {
    opacity: 0,
  })
  .to(
    "#triangle",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#PhaseLabel",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#allphases",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g3",
    0,
    {
      display: "none",
    },
    "<"
  )
  .to(
    "#g4",
    0,
    {
      display: "none",
    },
    "<"
  )
  .to(
    "#g5",
    0,
    {
      display: "none",
    },
    "<"
  )
  .to(
    "#g3",
    0,
    {
      display: "none",
    },
    "<"
  )
  .to(
    "#g4",
    0,
    {
      display: "none",
    },
    "<"
  )
  .to(
    "#g2",
    0,
    {
      display: "none",
    },
    "<"
  )
  .to(
    "#g5",
    0,
    {
      display: "none",
    },
    "<"
  )
  .to(
    "#g6",
    0,
    {
      display: "none",
    },
    "<"
  )
  .to(
    "#g1",
    0,
    {
      display: "none",
    },
    "<"
  );

let atxt5 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "none none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to(
    ".greendot",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g1",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g3",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g2",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g4",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g5",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to(
    "#g6",
    0,
    {
      display: "block",
    },
    "<"
  )
  .to("#bar", 0.3, {
    opacity: 1,
  })
  .to(
    "#triangle",
    0.3,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    ".greendot",
    0.3,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#PhaseLabel",
    0.3,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#allphases",
    0.3,
    {
      opacity: 1,
    },
    "<"
  );

let atxt6 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to("#l1", 0.3, {
    top: "-10vh",
  })
  .to(
    "#l2",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#g3",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g4",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g5",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g6",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g2",
    0,
    {
      opacity: 1,
    },
    "<"
  );

let atxt7 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfifthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to("#l2", 0.3, {
    top: "-10vh",
  })
  .to(
    "#l3",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#g3",
    0,
    {
      opacity: 1,
    },
    "<0.1"
  )
  .to(
    "#g4",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g5",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g6",
    0.3,
    {
      opacity: 0,
    },
    "<"
  );

let atxt8 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tsixthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to("#l3", 0.3, {
    top: "-10vh",
  })
  .to(
    "#l4",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#g4",
    0,
    {
      opacity: 1,
    },
    "<0.1"
  )
  .to(
    "#g5",
    0.3,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#g6",
    0.3,
    {
      opacity: 0,
    },
    "<"
  );

let atxt9 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tseventhpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to("#l4", 0.3, {
    top: "-10vh",
  })
  .to(
    "#l5",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#g5",
    0,
    {
      opacity: 1,
    },
    "<0.1"
  )
  .to(
    "#g6",
    0.3,
    {
      opacity: 0,
    },
    "<"
  );

let atxt10 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#teighthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to("#l5", 0.3, {
    top: "-10vh",
  })
  .to(
    "#l6",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#g6",
    0,
    {
      opacity: 1,
    },
    "<0.5"
  )
  .to(
    "#bar2",
    0,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#triangle2",
    0,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#dot2",
    0,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#phrase2",
    0,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#label2",
    0,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#bar",
    0,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#triangle",
    0,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#allphases",
    0,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#PhaseLabel",
    0,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    ".greendot",
    0,
    {
      opacity: 0,
    },
    "<"
  );

let atxt11 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tninthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to(
    "#gtxt1",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#gtxt2",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#gtxt3",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#gtxt3",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#gtxt4",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#gtxt5",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#gtxt6",
    0.3,
    {
      top: "0vh",
    },
    "<0.1"
  )
  .to(
    "#gughelfix",
    0.3,
    {
      opacity: 1,
    },
    "<0.1"
  )
  .to(
    "#gughel",
    0.3,
    {
      opacity: 0,
    },
    "<0.1"
  );

let atxt12 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#ttenthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to(
    ".pallozzibianchi",
    0,
    {
      opacity: 0,
    },
    "<0.5"
  )
  .to(
    ".pallozzibianchistick",
    0,
    {
      opacity: 1,
    },
    "<"
  );

let atxt13 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#ttwelvethpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "reverse none restart none",
      scrub: false,
    },
    onUpdate: () => {
      disableScroll();
    },
    onComplete: () => {
      enableScroll();
    },
    onReverseComplete: () => {
      enableScroll();
    },
  })
  .to(
    ".pallozzibianchistickimg",
    1,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    ".pallozzibianchistick",
    0,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    ".pallozzibianchistickimg",
    1,
    {
      border: "transparent solid 0.7vw",
    },
    "<"
  )
  .to(".pallozzibianchistickimg", 1, {
    width: "20vw",
    height: "20vw",
    borderRadius: "20vw",
  })
  .to(
    ".pallozzibianchistickimg",
    0.4,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    ".imgpb",
    1,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    "#gughelfix",
    1,
    {
      opacity: 0,
    },
    "<"
  )
  .to(
    "#gughel2",
    0.6,
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    ".imgpb",
    0.6,
    {
      opacity: 1,
    },
    "<"
  );
