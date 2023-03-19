import './styles/style.css'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  ...Fancybox.defaults,
  closeButton: true,
  dragToClose: false,
  defaultDisplay: "flex",
  on: {
    ready: function () {
        document.body.classList.remove("loaded");
    },
  },
});

const greeting = document.querySelector("#greetings");
const chars = greeting?.querySelectorAll("span");

chars?.forEach(function(char: HTMLSpanElement, index: number) {
  char.style.animationDelay = `0.${index}s`;
});
