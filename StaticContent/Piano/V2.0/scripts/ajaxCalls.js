let ajax;

class Ajax {
    constructor() {
        this.xhttp = undefined;
    }

    initialize() {
        this.xhttp = new XMLHttpRequest();
    };

    getAllUsers() {
        this.xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let json = JSON.parse(this.responseText);
                console.log(json);
            }
        }
        this.xhttp.open("GET", constants.websiteURL + "api/donators/", true);
        this.xhttp.send();
    }

    getUserForNote(note) {
        this.xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let json = JSON.parse(this.responseText);
                donatorCards.createDonatorInfo(json);
            }
        }
        this.xhttp.open("GET", constants.websiteURL + "api/donators.php?id=" + encodeURIComponent(note), true);
        this.xhttp.send();
    }

    getUserFromNoteList(noteList) {
        if (noteList.length < 1) return
        this.xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let json = JSON.parse(this.responseText);
                donatorCards.createDonatorInfo(json);
                noteList.pop()
                ajax.getUserFromNoteList(noteList)
            }
        }
        this.xhttp.open("GET", constants.websiteURL + "api/donators.php?id=" + encodeURIComponent(noteList[noteList.length - 1]), true);
        this.xhttp.send();
    }
}

window.addEventListener('load', function () {
    ajax = new Ajax();
    ajax.initialize();

}, false);