
// DOM elements 
const gallaryEl = document.querySelector(".gallery");
const btnUpTop = document.createElement("button");
btnUpTop.type = "button";
btnUpTop.textContent = "UP";
btnUpTop.classList.add("btn-back-to-top");
btnUpTop.style.display = 'none';
gallaryEl.insertAdjacentElement("afterend", btnUpTop);


// adding smoth scroll when you click to button "back to top"
btnUpTop.addEventListener("click", () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// is-hiden button "back to top"
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) { 
    btnUpTop.style.display = 'block';
  } else {
    btnUpTop.style.display = 'none';
  }
});
