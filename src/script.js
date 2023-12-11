var boxesContainer = document.getElementById("boxes");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () { return boxesContainer.classList.toggle("big"); });
function createBoxes() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundPosition = "".concat(-j * 125, "px ").concat(-i * 125, "px");
            boxesContainer.appendChild(box);
        }
    }
}
createBoxes();
