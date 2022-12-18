const shareBtn = document.querySelector(".hero__social--share");
const toolTip = document.querySelector(".tooltip");

shareBtn.addEventListener("click", () => {
  toolTip.style.opacity = 1;
});
