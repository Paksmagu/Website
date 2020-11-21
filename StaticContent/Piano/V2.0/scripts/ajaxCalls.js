let ajax;

class Ajax {
    constructor() {
        this.xhttp = undefined;
    }

    initialize() {
        this.xhttp = new XMLHttpRequest();
    };

    getAllUsers() {
        this.xhttp.onreadystatechange = function (event) {
            if (this.readyState === 4 && this.status === 200) {
                let json = JSON.parse(this.responseText);
                console.log(json);
            }
        }
        this.xhttp.open("GET", constants.websiteURL + "api/donators/", true);
        this.xhttp.send();
    }

    getUserForNote(note) {
        this.xhttp.onreadystatechange = function (event) {
            if (this.readyState === 4 && this.status === 200) {
                let json = JSON.parse(this.responseText);
                donatorCards.createDonatorInfo(json);
            }
        }
        donatorCards.clearDonatorInfo();
        this.xhttp.open("GET", constants.websiteURL + "api/donators.php?id=" + encodeURIComponent(note), true);
        this.xhttp.send();
    }

}

window.addEventListener('load', function (ev) {
    ajax = new Ajax();
    ajax.initialize();

}, false);