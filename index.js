(function(){
    var nextString = "X";
    var nextMoveELement = document.getElementById("nextMove");
    window.addEventListener("click", function (event) {
        var clickedElement = event.target;
        if (clickedElement.className === "app-square" && clickedElement.innerHTML === "") {
            clickedElement.innerHTML = nextString;
            if (nextString === "X") {
                nextString = "O";
            }
            else {
                nextString = "X";
            }
            nextMoveELement.innerHTML = nextString;
        }
    });
})();