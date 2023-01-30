let paginadiarrivo = 1;

let easing = 0.05;
let X;
let y;
let diam = 10;
let freccina;
let velocity;
let angle;
let cnv2;
let pagina = 1;
let counter;
let cnv;
let img = [];
let index;
let x;

let freccia = function (f) {
  f.preload = function () {
    freccina = f.loadImage("Assets/freccina.png");
  };

  f.setup = function () {
    cnv2 = f.createCanvas(f.windowWidth, f.windowHeight);
    cnv2.parent("tachipirina");
    X = f.mouseX;
    y = f.mouseY;
    f.imageMode(f.CENTER);
    f.angleMode(f.DEGREES);

    console.log(
      "DD18 - density design final synthesis studio a.a. 2022-2023 - Politecnico di Milano - Design della Comunicazione - Gruppo 03"
    );
  };

  f.draw = function () {
    f.clear();
    f.fill(255);

    let targetX = f.mouseX;
    let dx = targetX - X;
    X += dx * easing;

    let targetY = f.mouseY;
    let dy = targetY - y;
    y += dy * easing;

    if (pagina == 1) {
      if (diam < 100 && f.frameCount > 200) {
        diam += 10;
      } else if (diam > 90) {
        if (f.mouseIsPressed == true) {
          var element = document.getElementById("secondpage");
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else if (pagina == 2) {
      if (diam > 10) {
        diam -= 10;
        if (diam == 10) {
          diam = 0.1;
        }
      }
    }

    velocity = f.round(f.dist(X, 0, f.mouseX, 0));
    angle = f.map(velocity, 0, 500, 0, 60);

    if (f.mouseX < X) {
      f.translate(X, y);
      f.rotate(-angle);
    } else {
      f.translate(X, y);
      f.rotate(angle);
    }
    f.image(freccina, 0, 0, diam, diam);
  };

  f.windowResized = function () {
    f.resizeCanvas(f.windowWidth, f.windowHeight);
  };
};

let frecciaanimation = new p5(freccia);

let initialanimation = function (ia) {
  ia.preload = function () {
    for (let i = 0; i < 180; i++) {
      img[i] = ia.loadImage("Assets/initialanim/" + i + ".png");
    }
  };

  ia.setup = function () {
    cnv = ia.createCanvas(ia.windowWidth, ia.windowHeight);
    cnv.parent("initialanimationcont");
    cnv.class("initialanimation");
  };

  ia.draw = function () {
    x = X;
    if (x <= 0) {
      x = 0;
    }
    ia.clear();
    ia.imageMode(ia.CENTER);
    index = ia.round(x / (ia.windowWidth / 178));
    ia.image(
      img[index],
      ia.windowWidth / 2,
      ia.windowHeight / 2,
      ia.windowHeight,
      ia.windowHeight
    );
  };

  ia.windowResized = function () {
    ia.resizeCanvas(ia.windowWidth, ia.windowHeight);
  };
};

let ia = new p5(initialanimation);

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
  ease: "power4.out",
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
  ease: "power4.out",
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
      onEnterBack: () => {
        pagina = 2;

        var element = document.getElementById("pall2");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall2");
        element.classList.remove("altrepagine");
      },
      onLeaveBack: () => {
        pagina = 2;

        var element = document.getElementById("pall2");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall2");
        element.classList.remove("altrepagine");
      },
      onEnter: () => {
        pagina = 1;

        var element = document.getElementById("pall2");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall2");
        element.classList.add("altrepagine");
      },
      onLeave: () => {
        pagina = 1;

        var element = document.getElementById("pall2");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall2");
        element.classList.add("altrepagine");
      },
    },
  })
  .from(
    "#atxt1",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt2",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt3",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt4",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt5",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt6",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt7",
    {
      top: "0vh",
    },
    0
  );

let thirdpagedisplay = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tthirddpagedisp",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "none none reverse none",
      scrub: true,
    },
  })
  .from(
    "#page3",
    {
      display: "block",
    },
    0
  );

let thirdpage = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tthirddpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#page3",
    {
      top: "0vh",
      ease: "none",
    },
    0
  );

let frase1out = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tthirddpagef1out",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
      onEnterBack: () => {
        var element = document.getElementById("pall3");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall3");
        element.classList.remove("altrepagine");
      },
      onLeaveBack: () => {
        var element = document.getElementById("pall3");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall3");
        element.classList.remove("altrepagine");
      },
      onEnter: () => {
        var element = document.getElementById("pall3");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall3");
        element.classList.add("altrepagine");
      },
      onLeave: () => {
        var element = document.getElementById("pall3");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall3");
        element.classList.add("altrepagine");
      },
    },
  })
  .from(
    "#atxt2_2",
    {
      top: "-10vh",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.084,0.257 0.204,0.5 0.4,0.5 0.5,0.5 0.5,0.5 0.6,0.5 0.804,0.5 0.818,1.001 1,1 "
      ),
    },
    0
  )
  .from(
    "#atxt2_1",
    {
      top: "-10vh",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.084,0.257 0.204,0.5 0.4,0.5 0.5,0.5 0.5,0.5 0.6,0.5 0.804,0.5 0.818,1.001 1,1 "
      ),
    },
    0
  );

let frase2out = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tthirddpagef2out",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from("#atxt2_3", {
    top: "-10vh",
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.084,0.257 0.204,0.5 0.4,0.5 0.5,0.5 0.5,0.5 0.6,0.5 0.804,0.5 0.818,1.001 1,1 "
    ),
  });

let frase3out = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tthirddpagef3out",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#atxt2_5",
    {
      top: "-10vh",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.084,0.257 0.204,0.5 0.4,0.5 0.5,0.5 0.5,0.5 0.6,0.5 0.804,0.5 0.818,1.001 1,1 "
      ),
    },
    0
  )
  .from(
    "#atxt2_4",
    {
      top: "-10vh",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.084,0.257 0.204,0.5 0.4,0.5 0.5,0.5 0.5,0.5 0.6,0.5 0.804,0.5 0.818,1.001 1,1 "
      ),
    },
    0
  );

let frase4in = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tthirddpagef4in",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#atxt2_8",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt2_7",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt2_6",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#page4",
    {
      display: "block",
    },
    0
  );

let thirdpageout = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#page3",
    {
      top: "100vh",
      ease: "none",
    },
    0
  )
  .from(
    "#page4",
    {
      top: "0vh",
      ease: "none",
    },
    0
  )
  .from(
    "#page4palloz",
    {
      display: "flex",
    },
    0
  );

let page4in = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpagein",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
      onEnterBack: () => {
        var element = document.getElementById("pall4");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall4");
        element.classList.remove("altrepagine");
      },
      onLeaveBack: () => {
        var element = document.getElementById("pall4");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall4");
        element.classList.remove("altrepagine");
      },
      onEnter: () => {
        var element = document.getElementById("pall4");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall4");
        element.classList.add("altrepagine");
      },
      onLeave: () => {
        var element = document.getElementById("pall4");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall4");
        element.classList.add("altrepagine");
      },
    },
  })
  .from(
    "#atxt3_1",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt3_2",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt3_3",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt3_4",
    {
      top: "0vh",
    },
    0
  );

let fourthpagepalloz = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpagepalloz",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#page4palloz",
    {
      top: "0vh",
      ease: "none",
    },
    0
  );

let palloz2 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpagep2",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#palloz2",
    {
      top: "0vh",
      ease: "none",
    },
    0
  );

let palloz3 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpagep3",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#palloz3",
    {
      top: "0vh",
      ease: "none",
    },
    0
  );

let palloz4 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpagep4",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#palloz4",
    {
      top: "0vh",
      ease: "none",
    },
    0
  );

let palloz5 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpagep5",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#palloz5",
    {
      top: "0vh",
      ease: "none",
    },
    0
  );

let palloz6 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpagep6",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#palloz6",
    {
      top: "0vh",
      ease: "none",
    },
    0
  );

let fifthpage = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfifthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
      onEnterBack: () => {
        var element = document.getElementById("pall5");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall5");
        element.classList.remove("altrepagine");
      },
      onLeaveBack: () => {
        var element = document.getElementById("pall5");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall5");
        element.classList.remove("altrepagine");
      },
      onEnter: () => {
        var element = document.getElementById("pall5");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall5");
        element.classList.add("altrepagine");
      },
      onLeave: () => {
        var element = document.getElementById("pall5");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall5");
        element.classList.add("altrepagine");
      },
    },
  })
  .from(
    "#page4out",
    {
      display: "block",
    },
    0
  )
  .from(
    "#page4palloz2",
    {
      display: "flex",
    },
    0
  )
  .from(
    "#page4out",
    {
      top: "100vh",
      ease: "none",
    },
    0
  )
  .from(
    "#page4palloz2",
    {
      top: "100vh",
      ease: "none",
    },
    0
  );

let fifthpaged = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfifthpaged",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#page4",
    {
      display: "none",
    },
    0
  )
  .from(
    "#page4palloz",
    {
      display: "none",
    },
    0
  );

let frasegoogle = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfifthpagetext",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#atxt4_1",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt4_2",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt4_3",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt4_4",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt4_5",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt4_6",
    {
      top: "0vh",
    },
    0
  );

let frase6 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tsixthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
      onEnterBack: () => {
        var element = document.getElementById("pall6");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall6");
        element.classList.remove("altrepagine");
      },
      onLeaveBack: () => {
        var element = document.getElementById("pall6");
        element.classList.add("paginacorrente");

        var element = document.getElementById("pall6");
        element.classList.remove("altrepagine");
      },
      onEnter: () => {
        var element = document.getElementById("pall6");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall6");
        element.classList.add("altrepagine");
      },
      onLeave: () => {
        var element = document.getElementById("pall6");
        element.classList.remove("paginacorrente");

        var element = document.getElementById("pall6");
        element.classList.add("altrepagine");
      },
    },
  })
  .from(
    "#atxt5_1",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt5_2",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt5_3",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt5_4",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt5_5",
    {
      top: "0vh",
    },
    0
  );

let frase7 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tseventhpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    "#atxt6_1",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt6_2",
    {
      top: "0vh",
    },
    0
  )
  .from(
    "#atxt6_3",
    {
      top: "0vh",
    },
    0
  );

let pallinoultimo = gsap.timeline({
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tpallimg",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "restart none reverse none",
    scrub: true,
    onEnterBack: () => {
      var element = document.getElementById("pall7");
      element.classList.add("paginacorrente");

      var element = document.getElementById("pall7");
      element.classList.remove("altrepagine");
    },
    onLeaveBack: () => {
      var element = document.getElementById("pall7");
      element.classList.add("paginacorrente");

      var element = document.getElementById("pall7");
      element.classList.remove("altrepagine");
    },
    onEnter: () => {
      var element = document.getElementById("pall7");
      element.classList.remove("paginacorrente");

      var element = document.getElementById("pall7");
      element.classList.add("altrepagine");
    },
    onLeave: () => {
      var element = document.getElementById("pall7");
      element.classList.remove("paginacorrente");

      var element = document.getElementById("pall7");
      element.classList.add("altrepagine");
    },
  },
});

let scompare = gsap.from(".pallinospaziale", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tpallimgdots",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "restart none reverse none",
    scrub: true,
  },
  opacity: 0,
});

let testo = gsap.from("#testo", {
  x: -3000,
  duration: 30,
  repeat: -1,
  ease: "none",
});

let immagini = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#timmagini",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "restart none reverse none",
      scrub: true,
    },
  })
  .from(
    ".colonnasu",
    {
      top: "-100vh",
    },
    0
  )
  .from(
    ".colonnagiu",
    {
      bottom: "-100vh",
    },
    0
  );
