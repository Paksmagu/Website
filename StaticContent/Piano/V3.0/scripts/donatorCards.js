let donatorCards;

class DonatorCards {
    constructor() {
        this.donatorStack = undefined;
        this.isSwapping = false;
    }

    initialize() {
        this.donatorStack = document.getElementById("donator-stack");
    }

    swap() {
        let card = document.querySelector("#donator-stack > .donator-card:last-child");
        card.style.animation = "swapCards 700ms forwards";
        setTimeout(() => {
            card.style.animation = "";
            donatorCards.donatorStack.prepend(card);
            if ([...donatorCards.donatorStack.children].length > constants.amountOfDonatorsShown) {
                card.remove();
            }
        }, 700);
        setTimeout(() => {
            if ([...donatorCards.donatorStack.children].length > 1) {
                donatorCards.isSwapping = true;
                donatorCards.swap();
            }
        }, constants.cardSwappingRate)
    }

    createDonatorInfo(json) {
        for (let jsonIndex = 0; jsonIndex < json.length; jsonIndex++) {
            let jsonRow = json[jsonIndex];
            let fullName = jsonRow.first_name + " " + jsonRow.last_name;

            let donatorCard = document.createElement("div")
            donatorCard.classList.add("donator-card")
            let nameSpan = document.createElement("span")
            let bold = document.createElement("b")
            nameSpan.classList.add("donator-name")
            bold.innerText = fullName;
            nameSpan.appendChild(bold)

            let noteSpan = document.createElement("span")
            noteSpan.style.marginLeft = "10px"
            let note = document.createElement("i")
            note.innerText = jsonRow.note
            noteSpan.appendChild(note)


            let donationElement = document.createElement("div");
            donationElement.classList.add("text-concat");
            donationElement.innerText = jsonRow.donation_text;

            donatorCard.appendChild(nameSpan);
            donatorCard.appendChild(noteSpan);
            donatorCard.appendChild(donationElement);

            this.donatorStack.prepend(donatorCard);
        }
        if (json.length > 1 && !donatorCards.isSwapping) {
            setTimeout(() => {
                donatorCards.swap();
            }, constants.cardSwappingRate)
        }

    }

}

window.addEventListener('load', function (ev) {
    donatorCards = new DonatorCards();
    donatorCards.initialize();

}, false);