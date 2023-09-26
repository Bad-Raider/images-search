const gallaryEl = document.querySelector(".gallery");
const btnUpTop = document.createElement("button");
btnUpTop.type = "button";
btnUpTop.textContent = "UP";
btnUpTop.classList.add("btn-back-to-top");
btnUpTop.style.display = 'none';
gallaryEl.insertAdjacentElement("afterend", btnUpTop);

btnUpTop.addEventListener("click", () => {
  comeBackToTopPage();
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) { 
    btnUpTop.style.display = 'block';
  } else {
    btnUpTop.style.display = 'none';
  }
});

export default function comeBackToTopPage() {
  window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
