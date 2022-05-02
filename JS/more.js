import {getData} from "./Modules/know.js";

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    document.getElementsByClassName("success")[0].addEventListener("click", () => {
        document.querySelector("p").innerText = getData("Investors")
    });
    document.getElementsByClassName("warning")[0].addEventListener("click", () => {
        document.querySelector("p").innerText = getData("Risks")
    });
    document.getElementsByClassName("error")[0].addEventListener("click", () => {
        document.querySelector("p").innerText = getData("Error");
    });
}




