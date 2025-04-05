const roles = ["Web Developer", "Frontend Developer", "React Developer", "Backend Developer", "Full Stack MERN Developer"];
  let index = 0;

  function changeText() {
    document.getElementById("role").textContent = roles[index];
    index = (index + 1) % roles.length;
  }

  changeText(); 
  setInterval(changeText, 2000); 

//humburger
  $(document).ready(function () {

    $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
    });
});
    //scroll
    const scrollTopBtn = document.getElementById("scroll-top");

    // Show/hide scroll-top button
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("active");
      } else {
        scrollTopBtn.classList.remove("active");
      }
    });
  
    // Scroll on click
    scrollTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Step 1: Scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  
      // Step 2: Define sections to scroll through
      const sections = [
        document.getElementById("home"),
        document.getElementById("about"),
        document.getElementById("skills"),
        document.getElementById("education"),
        document.getElementById("work"),
        document.getElementById("contact"),
        document.getElementById("footer")
      ];
  
      // Step 3: Scroll through sections with 2s delay each
      const scrollWithDelay = (index) => {
        if (index >= sections.length) return;
        setTimeout(() => {
          sections[index].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          scrollWithDelay(index + 1);
        }, 2000); // 2s delay between each scroll
      };
  
      // Start scrolling sections after 0.5 second of reaching top
      setTimeout(() => {
        scrollWithDelay(0);
      }, 500);
    });