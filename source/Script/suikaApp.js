document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById("game-container");
  
    gameContainer.addEventListener("click", function(event) {
      createFallingCircle(event.clientX - gameContainer.getBoundingClientRect().left, event.clientY - gameContainer.getBoundingClientRect().top);
    });
  
    function createFallingCircle(x, y) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.top = `${y}px`;
      circle.style.left = `${x}px`;
  
      gameContainer.appendChild(circle);
  
      // Animate the falling motion using CSS animation
      circle.style.animation = "fallingAnimation 1.5s linear";
  
      // Adjust the position of the circle to stay at the bottom after the animation ends
      circle.addEventListener("animationend", function() {
        circle.style.animation = "none"; // Stop the animation
        circle.style.top = `calc(100% - 20px)`; // Adjust the value based on the circle's size
      });
    }
  });
  