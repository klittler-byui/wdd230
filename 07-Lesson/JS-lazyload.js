// LAZY LOAD
// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
  threshold: 1.0;
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    });
  }, imgOptions);

  // Loop through each img on check status and load if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });

  else { // just load ALL images if not supported
  }

  article img[data-src] {
    filter: blur(0.2em);
  }

  article img{
    filter: blur(0em);
    transition: filter 0.5s;
  }

  <img src=