function openJoinPopup() {
    const popup = document.getElementById("joinPopup");

    popup.classList.add("active");
}


function closeJoinPopup() {
    const popup = document.getElementById("joinPopup");

    popup.classList.remove("active");
}


/* Close popup when clicking outside the box */

document
    .getElementById("joinPopup")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeJoinPopup();
        }

    });


/* Close popup with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeJoinPopup();
    }

});
