// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import Controls from "./modules/Controls";
import Menu from "./modules/Menu";

$(function () {
  objectFitImages();
  Controls.init();
  Menu.init();
});
