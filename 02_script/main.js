let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/fallguys.png");
  } else {
    myImage.setAttribute("src", "images/ps4.jpg");
  }
};
