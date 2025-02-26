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

  //Loader
  window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Ẩn preloader khi trang tải xong
});