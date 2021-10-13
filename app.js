"use strict";

const buttonMain = document.querySelector(".main_button");
const main = document.querySelector(".links");
const navegador = document.querySelector("#navigator");


buttonMain.addEventListener("click", ()=>{
    main.classList.toggle("disabled");
    setTimeout(() => {
        main.classList.toggle("altura");
    }, 300);
    setTimeout(() => {
        main.classList.toggle("bloqued");
    }, 300);
});


addEventListener("scroll", ()=>{
    window.pageYOffset > 200 ? navegador.classList.add("fixed") : navegador.classList.remove("fixed");
});
