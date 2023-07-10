const openBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".menu-close");
const mobMenu = document.querySelector(".mob-menu");
const body = document.querySelector("body");

const handleToggle = () => {
    console.log('menu', mobMenu)
  if (openBtn?.classList.contains("is-hidden-button")) {
    openBtn?.classList.remove("is-hidden-button");
    body?.classList.remove("no-scroll");
      closeBtn?.classList.add("is-hidden-button");
      mobMenu?.classList.add("is-hidden");
  } else {
    openBtn?.classList.add("is-hidden-button");
    body?.classList.add("no-scroll");
      closeBtn?.classList.remove("is-hidden-button");
    mobMenu?.classList.remove("is-hidden");
  }
};

openBtn?.addEventListener("click", handleToggle);
closeBtn?.addEventListener("click", handleToggle);

