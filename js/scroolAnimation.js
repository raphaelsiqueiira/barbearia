class ScrollAnimation {
  constructor() {
    this.sections = document.querySelectorAll("[data-scroll]");
    this.windowHalf = window.innerHeight * 0.6;
    this.init();
  }

  checkVisibility() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < this.windowHalf) {
        section.classList.add("active");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.checkVisibility();
      window.addEventListener("scroll", () => this.checkVisibility());
    }
  }
}

new ScrollAnimation();
