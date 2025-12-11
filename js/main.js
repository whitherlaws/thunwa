document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("rotating-text");
  const texts = ["user testing.", "prototyping."]; // Added periods for consistency
  let index = 0;

  // Total cycle time (e.g., 3000ms) = time text is visible + transition time
  const displayTime = 2500; // Time text is fully visible (2.5s)
  const transitionTime = 300; // Time for fadeOut/fadeIn (0.3s)

  function rotateText() {
    // --- STEP 1: Fade Out ---
    // 1. Add fade-out class (removes fade-in class if present)
    textElement.classList.remove("fade-in");
    textElement.classList.add("fade-out");

    // --- STEP 2: Change Content (Wait for Fade Out) ---
    setTimeout(() => {
      // 2. Change the text content while it is fully invisible
      index = (index + 1) % texts.length;
      textElement.textContent = texts[index];

      // --- STEP 3: Fade In ---
      // 3. Remove fade-out class and add fade-in class
      textElement.classList.remove("fade-out");
      textElement.classList.add("fade-in");
    }, transitionTime); // Wait for the fadeOut animation (0.3s)
  }

  // --- Initialization ---
  // 1. Set initial text
  textElement.textContent = texts[index];
  // 2. Immediately start the first fade-in
  textElement.classList.add("fade-in");

  // --- Start Rotation Cycle ---
  // The total interval is the time the text is visible plus the time it takes to transition (one side)
  setInterval(rotateText, displayTime);

  // Optional: Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
