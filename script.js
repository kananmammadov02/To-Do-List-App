let addToDoButton = document.getElementById("addButton");
let toDoContainer = document.getElementById("toDoContainer");
let myInput = document.getElementById("myInput");
let clearInput = document.getElementById("clearInput");
checkList();
function checkList() {
  if (toDoContainer.children.length == 0) {
    toDoContainer.className = "empty-list";
  }
}

var myNodelist = document.getElementsByTagName("p");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.toDoContainer;
    div.style.display = "none";
  };
}
addToDoButton.addEventListener("click", function () {
  toDoContainer.className = "add-list";
  let paragraph = document.createElement("p");
  let inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("Mətn daxil edilməyib!");
  } else {
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = myInput.value;
    myInput.value = "";
  }
  clearInput.addEventListener("click", function () {
    myInput.value = "";
  });

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  paragraph.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
      checkList();
    };
  }
});

