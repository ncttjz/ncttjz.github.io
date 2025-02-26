 // Animation xuất hiện nội dung
 document.addEventListener("DOMContentLoaded", function () {
      document.querySelector(".content").classList.add("show");
    });

// Thanh Skills
  document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".skill");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressBar = entry.target;
                let percent = progressBar.getAttribute("data-percent");
                progressBar.style.width = percent + "%";
                progressBar.textContent = percent + "%";
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});

//Top bar section
document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll(".content");
  let menuItems = document.querySelectorAll(".btn-topbar");

  let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              let activeSection = entry.target.id;
              
              menuItems.forEach(item => {
                  if (item.getAttribute("data-section") === activeSection) {
                      item.classList.add("seeing");
                  } else {
                      item.classList.remove("seeing");
                  }
              });
          }
      });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));
});

function smoothScrollTo(targetY, duration = 600) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let startTime;
  
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      window.scrollTo(0, startY + diff * percent);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".smooth-scroll");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          const targetY = targetSection.getBoundingClientRect().top + window.scrollY;
          smoothScrollTo(targetY-70, 300); // 600ms cho hiệu ứng cuộn
        }
      });
    });
  });
  

  //Loader
  window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Ẩn preloader khi trang tải xong
});