   const video = document.getElementById('projectVideo');
      let hasPlayed = false;

      function playVideo() {
         if (!hasPlayed) {
               video.play();
               hasPlayed = true;
         }
      }

      function checkVideoScroll() {
         const projectSection = document.getElementById('project-img');
         const rect = projectSection.getBoundingClientRect();

         // Check if the project section is in the viewport
         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
               playVideo();
         } else {
               // Pause the video when not in the viewport
               video.pause();
               video.currentTime = 0; // Reset video to the beginning
               hasPlayed = false; // Allow the video to play again when re-entering the section
         }
      }

      window.addEventListener('scroll', checkVideoScroll);
      window.addEventListener('resize', checkVideoScroll);
      checkVideoScroll(); // Check on page load


  function slideProjects(direction) {
    const container = document.getElementById('projectContainer');
    const scrollAmount = 400; // Adjust scroll size per click

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  }

  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");

  function toggleMenu() {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      hamburger.innerHTML = "&#10006;"; // ✖
    } else {
      hamburger.innerHTML = "&#9776;";  // ☰
    }
  }

  // Auto-close on link click
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.innerHTML = "&#9776;";
    });
  });

  const reveals = document.querySelectorAll('.reveal');

  // Function to handle scroll and animate elements
  function handleScroll() {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll); // Also trigger on load
