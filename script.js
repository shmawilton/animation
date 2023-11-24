gsap.to("#notification-container", {
  duration: 0.5,
  scaleX: 1,
  autoAlpha: 1,
  ease: "power1.inOut",
  onComplete: function() {
    // Start the bowing effect
    gsap.to("#notification-container", {
      duration: 0.5,
      scaleY: 1.2, // Adjust for the bowing effect
      y: -70, // Adjust the position if needed
      transformOrigin: "center bottom",
      ease: "power1.inOut"
    });
  }
});
