document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);


  if (window.matchMedia("(pointer: coarse)").matches) {
    document.getElementById("cursor-glow").style.display = "none";
  }


  const cursor = document.getElementById("cursor-glow");
  window.addEventListener("mousemove", (e) => {
    gsap.set(cursor, { x: e.clientX, y: e.clientY });
  });


  const loader = document.getElementById("loader");
  const bigB = document.getElementById("big-b");
  const content = document.getElementById("content");
  const heroB = document.getElementById("hero-b");
  const heroName = document.getElementById("hero-name");
  const heroItems = document.querySelectorAll("#hero-content > *");

  gsap.set(bigB, { scale: 0.8, opacity: 0 });
  gsap.set(heroName, { opacity: 0, x: -20 });
  gsap.set(heroItems, { opacity: 0, y: 30 });

  const tl = gsap.timeline();

  tl.to(bigB, { opacity: 1, scale: 1, duration: 0.6 })
    .to(bigB, { scale: 1.1, yoyo: true, repeat: 1, duration: 0.8 })
    .to(loader, {
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      onComplete: () => (loader.style.display = "none"),
    })
    .to(content, { opacity: 1, duration: 0.2 }, "-=.6")
    .from(
      heroB,
      { scale: 2, x: "30vw", y: "20vh", opacity: 0, duration: 1.2 },
      "-=.4",
    )
    .to(heroName, { opacity: 1, x: 0, duration: 1 }, "-=.6")
    .to(heroItems, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 }, "-=.5");

  /* menu */
  const menuBtn = document.getElementById("menu-btn");
  const menuOverlay = document.getElementById("menu-overlay");
  const menuLinks = document.querySelectorAll(".menu-link");

  menuBtn.addEventListener("click", () => {
    const open = menuBtn.classList.toggle("active");
    if (open) {
      gsap.to(menuOverlay, { opacity: 1, pointerEvents: "all", duration: 0.5 });
      gsap.fromTo(
        menuLinks,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 },
      );
    } else {
      gsap.to(menuOverlay, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
      });
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      gsap.to(menuOverlay, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
      });
    });
  });

  /* about animation */
  gsap
    .timeline({
      scrollTrigger: { trigger: "#about", start: "top 70%" },
    })
    .to(".about-image-container", { opacity: 1, x: 0, duration: 1.2 })
    .to(".about-text", { opacity: 1, x: 0, duration: 1.2 }, "-=1");

  gsap.to(".about-image-container img", {
    y: -30,
    scrollTrigger: {
      trigger: "#about",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Experience Section Reveal
  gsap.to(".exp-item", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 75%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: 0.3, // Animates one after the other
    ease: "power3.out",
  });

  // Animate the dots separately for a glow effect
  gsap.utils.toArray(".dot-marker").forEach((dot) => {
    gsap.to(dot, {
      scrollTrigger: {
        trigger: dot,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      backgroundColor: "#F75D02",
      boxShadow: "0 0 15px #F75D02",
      duration: 0.5,
    });
  });

  // Add inside your DOMContentLoaded listener
  gsap.to(".exp-item", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    stagger: 0.4,
    ease: "power4.out",
  });

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 1. Animate the central glowing line
  gsap.to("#glow-line", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 60%",
      end: "bottom 80%",
      scrub: 1, // Follows scroll position
    },
    scaleY: 1,
  });

  // 2. Animate Left Cards
  gsap.utils.toArray(".left-card").forEach((card) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
    });
  });

  // 3. Animate Right Cards
  gsap.utils.toArray(".right-card").forEach((card) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
    });
  });

  // Skills Entrance Animation
  gsap.from("#skills .max-w-6xl", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".marquee-container", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    stagger: 0.2,
    ease: "power2.out",
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Reveal entire section on scroll
    gsap.from("#skills .max-w-6xl", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    // Magnetic Effect for Skill Pills
    const pills = document.querySelectorAll(".skill-pill");

    pills.forEach((pill) => {
      pill.addEventListener("mousemove", (e) => {
        const rect = pill.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(pill, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      pill.addEventListener("mouseleave", () => {
        gsap.to(pill, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Reveal Project Cards
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
    });

    // Project Card Hover (Tilt)
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(card, {
          rotateY: x * 15,
          rotateX: -y * 15,
          transformPerspective: 1000,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      });
    });
  });

  gsap.from(".reveal-up", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: "expo.out",
  });


  const emailLink = document.querySelector('a[href^="mailto"]');
  emailLink.addEventListener("mousemove", (e) => {
    const rect = emailLink.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    gsap.to(emailLink, { x, y, duration: 0.4 });
  });

  emailLink.addEventListener("mouseleave", () => {
    gsap.to(emailLink, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  });

  
  gsap.from("#contact-form .glass-card", {
    scrollTrigger: {
      trigger: "#contact-form",
      start: "top 85%",
    },
    y: 100,
    opacity: 0,
    scale: 0.95,
    duration: 1.5,
    ease: "expo.out",
  });

  
  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;",
    );
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }


  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    btn.innerHTML = "Sending...";
    btn.style.opacity = "0.5";

   
    setTimeout(() => {
      btn.innerHTML = "Message Sent";
      btn.style.backgroundColor = "#22c55e"; 
      btn.style.color = "white";
      btn.style.opacity = "1";
    }, 1500);
  });

 
  const heroTl = gsap.timeline();

  heroTl
    .to("#content", { opacity: 1, duration: 1 })
    .from("#hero-b", { x: -50, opacity: 0, duration: 0.8 }, "-=0.5")
    .from("#hero-name", { x: -30, opacity: 0, duration: 0.8 }, "-=0.6")
    .from(
      "#hero-content > *",
      { y: 20, opacity: 0, stagger: 0.2, duration: 0.8 },
      "-=0.4",
    )
   
    .from(
      ".social-side-icon",
      {
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.5",
    )
    .from(
      ".absolute.right-10 div",
      { scaleY: 0, duration: 1, stagger: 0.2 },
      "-=0.8",
    );
});

const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log(data);
  
  statusText.innerText = "Sending...";

  try {
    const response = await fetch("https://script.google.com/macros/library/d/1KD2SlfRa9WZ9eovFtJAUN2dX2PCwFGB9l1VnGJu4coBS1tqUENGrhn8w/1", {
      method: "POST",
      body: formBody,
    });

    statusText.innerText = "Message sent successfully!";
    form.reset();
  } catch (error) {
    statusText.innerText = "Error sending message.";
  }
});
