const toTop = document.querySelector(".to-top-button");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 800) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
});