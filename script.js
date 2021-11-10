
//button interactivity

  btn.addEventListener('click', toggleButtonText)


function toggleButtonText() {
      let btn = document.getElementById('btn')
      if (btn.innerHTML === "Show Images") {
         btn.innerHTML = "Hide Images";
      } else {
         btn.innerHTML = "Show Images";
      }
      const images = document.querySelectorAll(".image")
      for(i=0; i < images.length; i++) {
        images[i].classList.toggle('hidden')
      }
  }   

 // Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});