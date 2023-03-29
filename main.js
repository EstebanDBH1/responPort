/*===================END SCROLLTRIGGER===================*/
gsap.registerPlugin(ScrollTrigger)





let tl = gsap.timeline();

gsap.from(".social-media-header a", {
  opacity: 0,
  ease: Power2.easeOut,
  duration: 0.4,
  stagger: 0.5,
});

gsap.from(".txt-header .span1 .sp", {
  y: 60,
  opacity: 0,
  ease: Power2.easeOut,
  duration: 1,
  stagger: {},
});

gsap.from(".cta p span, .title h1 span, .logo span, .info", {
  y: 60,
  opacity: 0,
  ease: Power2.easeOut,
  duration: 1,
  stagger: {
    amount: 0.5,
  },
});






/*================text rotate=========================*/


/*
let pageTran = () => {
  var tl = gsap.timeline();

  tl.to(".page-transition", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 0.8,
  });

  tl.to(".page-transition", {
    y: "-100%",
    delay: 0.5,
    duration: 0.3,
  });

  tl.set(".page-transition", {
    y: "-100%",
    opacity: 1,
  });
};

let mainAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let reveal = gsap.timeline();

  reveal.to(".description .txt-parrafo span", {
    y: 0,
    stagger: 0.01,
    duration: 0.7,
    ease: "Power3,InOut",
  });

  ScrollTrigger.create({
    trigger: ".description",
    start: "top 100%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    animation: reveal,
  });

  let tl2 = gsap.timeline();

  tl2.to(".img-box", {
    x: 0,
    ease: "Power2,InOut",
    duration: 1.5,
    stagger: 0.5,
    delay: 0.6,
  });

  tl2.to(".wrapper-img1", {
    x: "100%",
    ease: Expo.easeInOut,
    duration: 1,
  });

  ScrollTrigger.create({
    trigger: ".img-box",
    start: "top 100%",
    end: "bottom 50%",
    animation: tl2,
    markers: true,
  });

  let tl3 = gsap.timeline();

  tl3.to(".linea-estudio", {
    x: 0,
    ease: Power2.InOut,
    duration: 1.5,
    stagger: 0.5
  });

  tl3.from(".col-left, .col-right",{
    opacity:0,
    ease: Expo.easeInOut,
    duration: 1.5,
    stagger: 0.7


  })

  ScrollTrigger.create({
    trigger: ".texto-estudio",
    start: "top 100%",
    end: "bottom 100%",
    animation: tl3,
    markers: true
  });

  TweenMax.staggerFrom("header > *", 1.5, {
    y: 30,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(".other", 3, {
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 1.5,
    // delay: 1
  });

  const tl = gsap.timeline({ paused: true });

  const openNav = () => {
    animateOpenNav();
    const navBtn = document.querySelector(".menu-toggle-btn");

    navBtn.onclick = function (e) {
      tl.reversed(!tl.reversed());

      tl.play();
    };

    let btnClose = document.querySelector(".btnClose");

    btnClose.onclick = function (e) {
      tl.reverse();
    };
  };

  openNav();

  function animateOpenNav() {
    tl.to(".nav-container", 0.2, {
      autoAlpha: 1,
      delay: 0.1,
    });

    tl.to(
      ".site-logo",
      0.2,
      {
        color: "#fff",
      },
      "-=0.1"
    );

    tl.from(".flex > div", 0.4, {
      opacity: 0,
      y: 10,
      stagger: {
        amount: 0.04,
      },
    });

    tl.to(
      ".nav-link > a",
      1,
      {
        top: 0,
        ease: "Power2,InOut",
        stagger: {
          amount: 0.1,
        },
      },
      "-=0.4"
    );

    tl.from(
      ".nav-footer",
      0.3,
      {
        opacity: 0,
      },
      "-=0.5"
    );
  }
};

delay = (n) => {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTran();
        await delay(1000);
        done();
      },

      async enter(data) {
        mainAnimation();
      },

      async once(data) {
        mainAnimation();
      },
    },
  ],
});
*/
