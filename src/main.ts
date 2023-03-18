import './styles/style.css'
import gsap  from "gsap"

const title = document.querySelector("#greetings");
const letters = title?.querySelectorAll("span");
let tl = gsap.timeline({ repeat: -1, });

letters?.forEach(function(letter: HTMLSpanElement, index: number) {
    tl.to(letter, 1, { className: "glow" }).to(letter, 1, {
      className: "",
      repeat: -1,
      yoyo: true,
    });
})


