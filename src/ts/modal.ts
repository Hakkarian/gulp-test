const openBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".menu-close");
const mobMenu = document.querySelector(".mob-menu");

const handleToggle = () => {
    console.log('menu', mobMenu)
  if (openBtn?.classList.contains("is-hidden-button")) {
    openBtn?.classList.remove("is-hidden-button");
      closeBtn?.classList.add("is-hidden-button");
      mobMenu?.classList.add("is-hidden");
  } else {
      openBtn?.classList.add("is-hidden-button");
      closeBtn?.classList.remove("is-hidden-button");
      mobMenu?.classList.remove("is-hidden");
  }
};

openBtn?.addEventListener("click", handleToggle);
closeBtn?.addEventListener("click", handleToggle);

