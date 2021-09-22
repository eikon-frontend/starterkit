import Masonry from "masonry-layout";

const grid = document.querySelector(".masonry-example");

var msnry = new Masonry(grid, {
  itemSelector: ".masonry-example-item",
});
