function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("myBlends").innerHTML =  localStorage.clickcount;
  }
  else {
    document.getElementById("myBlends").innerHTML = "Sorry, your browser does not support web storage...";
  }
}