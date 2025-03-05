class SimpleAnime {
  constructor() {
    this.items = document.querySelectorAll("[data-anime]");
    this.init();
  }

  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute("data-anime"));
      if (!isNaN(e)) {
        setTimeout(() => {
          t.classList.add("anime");
        }, e);
      }
    });
  }

  handleVisibility() {
    if (document.visibilityState !== undefined) {
      if (document.visibilityState === "visible") {
        this.animateItems();
      }
    } else {
      this.animateItems();
    }
  }

  init() {
    this.handleVisibility = this.handleVisibility.bind(this);
    this.handleVisibility();
    document.addEventListener("visibilitychange", this.handleVisibility);
  }
}


new SimpleAnime();
