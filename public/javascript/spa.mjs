class Components {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }
  hide() {
      this.element.classList.add("hide");
}
    show() {
      this.element.classList.remove("hide");
  }
}
const regPanel = new Components("#regPanel");
const booksPanel = new Components("#booksPanel");
const readersPanel = new Components("#readersPanel");
const loansPanel = new Components("#loansPanel");
const formBooks = new Components("#formBooks");
const formReaders = new Components("#formReaders");
const navRegBooks = document.getElementById("navRegBooks");
const navRegReaders = document.getElementById("navRegReaders");

navRegBooks.addEventListener("click", () => {
  formBooks.show();
  formReaders.hide();
});
navRegReaders.addEventListener("click", () => {
  formBooks.hide();
  formReaders.show();
});
