const openBtn = document.querySelector<HTMLButtonElement>(".menu-open")!;
const closeBtn = document.querySelector<HTMLButtonElement>(".menu-close")!;
const mobMenu = document.querySelector<HTMLDivElement>(".mob-menu")!;

const mobSubscribe = document.querySelector<HTMLDivElement>(".mob-subscribe")!;
const heroBtn = document.querySelector<HTMLButtonElement>(".hero__button")!;
const subBtn = document.querySelector<HTMLButtonElement>(".mob-subscribe__button.button")!;

const body = document.querySelector("body")!;


const toggleSubscribe = (e: MouseEvent | KeyboardEvent) => {
  console.log(e.target)
  if (mobSubscribe.classList.contains("is-hidden")) {
    mobSubscribe.classList.remove("is-hidden");
    body.classList.add("no-scroll");
    return
  } else {
    body.classList.remove("no-scroll");
    if (e.target === mobSubscribe) {
      return mobSubscribe.classList.add("is-hidden");
    }

  }
}

const closeByKeyup = (e: KeyboardEvent) => {
  if (e instanceof KeyboardEvent) {
    mobSubscribe.classList.add("is-hidden");
    mobMenu.classList.add("is-hidden");
    closeBtn.classList.add("is-hidden-button");
    openBtn.classList.remove("is-hidden-button");
    body.classList.remove("no-scroll");
  }
}

heroBtn?.addEventListener("click", toggleSubscribe);

const handleToggle = () => {
  if (openBtn.classList.contains("is-hidden-button")) {
    openBtn.classList.remove("is-hidden-button");
    body.classList.remove("no-scroll");
    closeBtn.classList.add("is-hidden-button");
    mobMenu.classList.add("is-hidden");
  } else {
    openBtn.classList.add("is-hidden-button");
    body.classList.add("no-scroll");
    closeBtn.classList.remove("is-hidden-button");
    mobMenu.classList.remove("is-hidden");
  }
};

openBtn.addEventListener("click", handleToggle);
closeBtn.addEventListener("click", handleToggle);
mobSubscribe.addEventListener("click", toggleSubscribe)
subBtn.addEventListener("click", toggleSubscribe)
document.addEventListener("keydown", closeByKeyup);


