let donatorCards;

class DonatorCards {
    constructor() {
        this.donatorsDiv = undefined;
        this.listOfDonators = undefined;
    }

    initialize() {
        this.donatorsDiv = document.getElementById("donators");
    }

    createDonatorInfo(json) {
        for (let jsonIndex = 0; jsonIndex < json.length; jsonIndex++) {
            let jsonRow = json[jsonIndex];
            let card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "15rem";
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let firstName = jsonRow["first_name"];
            let lastName = jsonRow["last_name"];
            let donationText = jsonRow["donation_text"];
            let note = jsonRow["note"];
            let personName = document.createElement("h5");
            personName.classList.add("card-title");
            personName.textContent = `${firstName} ${lastName}`;
            let noteDonated = document.createElement("h6");
            noteDonated.classList.add("card-subtitle");
            noteDonated.classList.add("mb-2");
            noteDonated.classList.add("text-muted");
            noteDonated.textContent = `Annetus noodile: ${note}`;
            let donationPar = document.createElement("p");
            donationPar.classList.add("card-text");
            donationPar.textContent = donationText;
            cardBody.append(personName);
            cardBody.append(noteDonated);
            cardBody.append(donationPar);
            card.append(cardBody);
            this.donatorsDiv.append(card);
        }

    }

    clearDonatorInfo() {
        while (this.donatorsDiv.firstChild) {
            this.donatorsDiv.removeChild(this.donatorsDiv.firstChild);
        }
    }
}

window.addEventListener('load', function (ev) {
    donatorCards = new DonatorCards();
    donatorCards.initialize();

}, false);