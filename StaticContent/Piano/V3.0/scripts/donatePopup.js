let donatePopup;

class DonatePopup {
    constructor() {
        this.modal = undefined;
        this.modalButton = undefined;
        this.closeButton = undefined;
    }

    initialize() {
        this.modal = document.getElementById("donateModal");
        this.modalButton = document.getElementById("donateButton");
        this.closeButton = document.getElementsByClassName("close")[0];
        this.modalButton.onclick = function () {
            if (movementLogic.previousePressedKey != null) {
                console.log(movementLogic.previousePressedKey.note)
            }
            donatePopup.modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        this.closeButton.onclick = function () {
            donatePopup.modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target === donatePopup.modal) {
                donatePopup.modal.style.display = "none";
            }
        }
    }
}

window.addEventListener('load', function (ev) {
    donatePopup = new DonatePopup();
    donatePopup.initialize();
}, false);