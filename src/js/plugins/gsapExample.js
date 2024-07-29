import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".gsap-example", {
  x: 100,
  duration: 2,
  scrollTrigger: {
    trigger: ".gsap-example",
    start: "top top",
  },
});
