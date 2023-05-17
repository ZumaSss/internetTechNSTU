const popupQuerySelector = "#popup";
const popupEl = document.querySelector(popupQuerySelector);
const popupBtn = document.querySelector("#popup-trigger");

popupBtn.addEventListener("click", () => {
    setTimeout(() => {
        if (!popupEl.classList.contains("show")) {
            popupEl.classList.add("show");
        }
    }, 250);
});
document.addEventListener("click", (e) => {
    const isClosest = e.target.closest(popupQuerySelector);

    if (!isClosest && popupEl.classList.contains("show")) {
        popupEl.classList.remove("show");
    }
    if (!isClosest && popupSuccessEl.classList.contains("show")) {
        popupSuccessEl.classList.remove("show");
    }
});

const popupSuccessQuerySelector = "#popupSuccess";
const popupSuccessEl = document.querySelector(popupSuccessQuerySelector)
const popupSuccessBtn = document.querySelector('#popupSuccess-trigger')

popupSuccessBtn.addEventListener("click", () => {
    setTimeout(() => {
        popupSuccessEl.classList.add("show")
        popupEl.classList.remove("show");
    }, 250)
})