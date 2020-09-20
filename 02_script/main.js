let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "03_images/ps4.jpg") {
    myImage.setAttribute("src", "03_images/fallguys.png");
  } else {
    myImage.setAttribute("src", "03_images/ps4.jpg");
  }
};
