// Reveal elements on scroll
const fadeEls = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  fadeEls.forEach((el) => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200, // Smooth transition time for animations
    easing: "ease-out", // Smooth easing function
    once: false, // Allow animations to trigger every time an element comes into view
    offset: 100, // Offset to trigger animations a bit earlier than the element's position
    delay: 200, // Delay for smooth sequential animation
    mirror: true, // Enable animation to reverse when scrolling up
  });
});
