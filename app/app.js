// dot slash (./) goes to the root folder.
import * as MODEL from "./model.js";

function initListeners() {
  $("nav a").click((e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;

    MODEL.setCurrentPageContent(btnID);
  });
}

$(document).ready(function () {
  // comment out setcurrentpagecontent when developing new pages.
  // MODEL.setCurrentPageContent("home");
  initListeners();
});
