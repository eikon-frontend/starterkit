import ScrollMagic from "scrollmagic";

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  duration: 100,
  offset: 50,
})
  .setPin(".scrollmagic-example")
  .addTo(controller);
