// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

window.scroll({behavior:"smooth"})
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         // document.querySelector(this.getAttribute("href")).scrollIntoView({
//         //     behavior: "smooth",
//         //     offset: "100px",
//         // });
//         var element = document.querySelector(this.getAttribute("href"));
//         var headerOffset = 45;
//         var elementPosition = element.getBoundingClientRect().top;
//         var offsetPosition =
//             elementPosition + window.scrollY - headerOffset;

//         window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth",
//         });
//     });
// });

// Animate on Scroll (AOS) Functionality
document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll(".animate-on-scroll");
    const navSections = document.querySelectorAll("section")
    const nav = document.querySelector("nav")
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: "0px",
      threshold: 0.1, // Trigger animation when 10% of the element is visible
    };
  
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        const delay = entry.target.getAttribute("data-delay") || "0s"; // Default delay is 0s
        entry.target.style.transitionDelay = delay; // Apply the delay
        if (entry.isIntersecting) {
          entry.target.classList.add("animated"); // Add animated class
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };
  
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    animateElements.forEach((el) => {
      observer.observe(el);
    });
  });
  const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };
  
  const radius = 80;
  const diameter = radius * 2;
  
  const circle = document.querySelector("#circle");
  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  
  const text = circle.dataset.text;
  const characters = text.split("");
  
  const deltaAngle = 360 / characters.length;
  const characterOffsetAngle = 8;
  let currentAngle = -90;
  
  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.innerText = character;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
  
    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
    span.style.transform = `${transform} ${rotate}`;
  
    currentAngle += deltaAngle;
    circle.appendChild(span);
  });

const navtoggle = document.getElementById("nav-toggle");
navtoggle.addEventListener("click",(e)=>{
    e.target.classList.toggle("hidden")
})