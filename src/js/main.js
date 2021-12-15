// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import Controls from "./modules/Controls";

$(function () {
  objectFitImages();
  Controls.init();
});
