//data Edukasi
const edukasiData = [
  {
    imgSrc: "./assets/img/imgedu/edukasi1.png",
    title: "Apa Peredaan Bank Syariah dan Bank Konvesional?",
  },
  {
    imgSrc: "./assets/img/imgedu/edukasi2.png",
    title: "Waspadai Modus Cyber Crime, Ini Cara Aman Transaksi Internet Banking",
  },
  {
    imgSrc: "./assets/img/imgedu/edukasi3.png",
    title: "Jangan Sampai Tertipu, Ini Ciri-ciri Investasi Bodong yang Perlu Diwaspadai",
  },
  {
    imgSrc: "./assets/img/imgedu/edukasi4.png",
    title: "Waspada! Modus Sosial Engineering",
  },
  {
    imgSrc: "./assets/img/imgedu/edukasi3.png",
    title: "Apa Peredaan Bank Syariah dan Bank Konvesional?",
  },
  {
    imgSrc: "./assets/img/imgedu/edukasi1.png",
    title: "Apa Peredaan Bank Syariah dan Bank Konvesional?",
  },
];

//data Promo
const promoData = [
  {
    imgSrc: "./assets/img/promo/promo1.png",
    title: "Promo BCA Gallery Blibli Maret 2024",
  },
  {
    imgSrc: "./assets/img/promo/promo2.png",
    title: "Promo Diskon 50% All Menu di Chatime dengan Kartu Debit BTN VISA",
  },
  {
    imgSrc: "./assets/img/promo/promo3.png",
    title: "Bayar Parkir Scan QRIS di BRImo",
  },
  {
    imgSrc: "./assets/img/promo/promo4.png",
    title: "Program KPR BTN Rumah Cepat",
  },
  {
    imgSrc: "./assets/img/promo/promo1.png",
    title: "Apa Peredaan Bank Syariah dan Bank Konvesional?",
  }
];


document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   *  header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100 ? selectHeader.classList.add("sticked") : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerClick: "true",
    fade: "true",
    grabCursor: "true",

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3.5,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});

// Card Edukasi Home
document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-wrapper-edukasi");
  edukasiData.map((data) => {
    const card = `
        <div class="card swiper-slide">
          <div class="image-content">
            <div class="card-image">
              <img src="${data.imgSrc}" alt="" class="card-img" />
            </div>
            <div class="card-content">
              <h4 class="name">${data.title}</h4>
            </div>
          </div>
        </div>
      `;
    cardContainer.innerHTML += card;
  });
});

// Card Promo Home
document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-wrapper");
  promoData.map((data) => {
    const card = `
      <div class="card swiper-slide">
        <div class="image-content">
          <div class="card-image">
            <img src="${data.imgSrc}" alt="" class="card-img" />
          </div>
          <div class="card-content">
            <h4 class="name">${data.title}</h4>
          </div>
        </div>
      </div>
    `;
    cardContainer.innerHTML += card;
  });
});
