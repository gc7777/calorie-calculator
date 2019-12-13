function showImages() {
  var div = document.createElement("div");
  div.id = "board";
  document.body.appendChild(div);

  if (results <= 1500 && results >= 1200) {
    var firstImg = document.createElement("img");
    firstImg.setAttribute("src", "images/breakfast-low.jpg");
    document.getElementById("board").appendChild(firstImg);

    var secondImg = document.createElement("img");
    secondImg.setAttribute("src", "images/lunch-low.jpg");
    document.getElementById("board").appendChild(secondImg);

    var thirdImg = document.createElement("img");
    thirdImg.setAttribute("src", "images/snack1-low.jpg");
    document.getElementById("board").appendChild(thirdImg);

    var forthImg = document.createElement("img");
    forthImg.setAttribute("src", "images/snack2-low.jpg");
    document.getElementById("board").appendChild(forthImg);

    var fifthImg = document.createElement("img");
    fifthImg.setAttribute("src", "images/dinner-low.jpg");
    document.getElementById("board").appendChild(fifthImg);
  }

  if (results <= 2000 && results > 1500) {
    var firstImg = document.createElement("img");
    firstImg.setAttribute("src", "images/breakfast-med.jpg");
    document.getElementById("board").appendChild(firstImg);

    var secondImg = document.createElement("img");
    secondImg.setAttribute("src", "images/lunch-med.jpg");
    document.getElementById("board").appendChild(secondImg);

    var thirdImg = document.createElement("img");
    thirdImg.setAttribute("src", "images/snack1-med.jpg");
    document.getElementById("board").appendChild(thirdImg);

    var forthImg = document.createElement("img");
    forthImg.setAttribute("src", "images/snack2-med.jpg");
    document.getElementById("board").appendChild(forthImg);
  }

  if (results > 2000) {
    var firstImg = document.createElement("img");
    firstImg.setAttribute("src", "images/breakfast-high.jpg");
    document.getElementById("board").appendChild(firstImg);

    var secondImg = document.createElement("img");
    secondImg.setAttribute("src", "images/lunch-high.jpg");
    document.getElementById("board").appendChild(secondImg);

    var thirdImg = document.createElement("img");
    thirdImg.setAttribute("src", "images/snack1-high.jpg");
    document.getElementById("board").appendChild(thirdImg);

    var forthImg = document.createElement("img");
    forthImg.setAttribute("src", "images/snack2-high.jpg");
    document.getElementById("board").appendChild(forthImg);

    var fifthImg = document.createElement("img");
    fifthImg.setAttribute("src", "images/snack3-high.jpg");
    document.getElementById("board").appendChild(fifthImg);

    var sixthImg = document.createElement("img");
    sixthImg.setAttribute("src", "images/dinner-high.jpg");
    document.getElementById("board").appendChild(sixthImg);
  }
}
