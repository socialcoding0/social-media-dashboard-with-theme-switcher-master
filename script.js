const darkMode = document.querySelector("#darkmode-btn");
const circle = document.querySelector(".circle");


darkMode.addEventListener("click", function () {

    if (document.body.classList.contains("light")) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");

    }
    else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
    circle.classList.toggle("darkmode-active");
});