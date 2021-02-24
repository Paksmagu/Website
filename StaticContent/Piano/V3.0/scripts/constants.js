let constants;

class Constants {
    constructor() {
        this.websiteURL = "http://resentful.tk/V3.0/"

        this.widthElement = "content_a"

        this.cardSwappingRate = 4000 //in Millisec
        this.amountOfDonatorsShown = 4

        this.chords = [
            {chord: "AChord", majorNotes: ['A', 'C#', 'E'], minorNotes: ['A', 'C', 'E']},
            {chord: "CChord", majorNotes: ['C', 'E', 'G'], minorNotes: ['C', 'D#', 'G']},
            {chord: "DChord", majorNotes: ['D', 'F#', 'A'], minorNotes: ['D', 'F', 'A']},
            {chord: "EChord", majorNotes: ['E', 'G#', 'B'], minorNotes: ['E', 'G', 'B']},
            {chord: "FChord", majorNotes: ['F', 'A', 'C'], minorNotes: ['F', 'G#', 'C']},
            {chord: "GChord", majorNotes: ['G', 'B', 'D'], minorNotes: ['G', 'A#', 'D']}
        ]
        this.notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        this.higherBlackNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
        this.lowestOctave = 0;
        this.highestOctave = 8;
        this.numberOfOctaves = 9; //getNoteForKey(note, octaveIndex) {
        this.whiteKeysInZeroOctave = 2;
        this.whiteKeysInEighthOctave = 1;
        this.blackkeysInZeroOctave = 1;
        this.whiteKeysInOctave = 7;
        this.blackKeysInOctave = 5;
        this.numberOfWhiteKeys = (this.numberOfOctaves - 2) * this.whiteKeysInOctave + 2 + 3; //1 free note on each side + 2 infront 1 inback
        this.numberOfBlackKeys = (this.numberOfOctaves - 2) * this.blackKeysInOctave + 1; // 1 infront
        this.borderThickness = 1;
        this.halfBorderThickness = this.round(this.borderThickness / 2, 2);

        this.maxPianoHeight = 200;

        this.mobileSoundGain = 1;
        this.pcSoundGain = 3;
        this.instrumentName = "acoustic_grand_piano";

        this.pressed = "Pressed";
        this.hover = "Hover";
        this.released = "Released";

        this.major = "major";
        this.minor = "minor";

        this.isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (constants.isMobile.Android() || constants.isMobile.BlackBerry()
                    || constants.isMobile.iOS() || constants.isMobile.Opera()
                    || constants.isMobile.Windows());
            }
        };

        /**
         *The same information as in Notes database table (perhaps DB table can be completly ignored
         * @type List of {note: string, id: number}
         */
        this.noteIDList = [
            {id: 1, note: "A#0"},
            {id: 2, note: "A#1"},
            {id: 3, note: "A#2"},
            {id: 4, note: "A#3"},
            {id: 5, note: "A#4"},
            {id: 6, note: "A#5"},
            {id: 7, note: "A#6"},
            {id: 8, note: "A#7"},
            {id: 9, note: "A0"},
            {id: 10, note: "A1"},
            {id: 11, note: "A2"},
            {id: 12, note: "A3"},
            {id: 13, note: "A4"},
            {id: 14, note: "A5"},
            {id: 15, note: "A6"},
            {id: 16, note: "A7"},
            {id: 17, note: "B0"},
            {id: 18, note: "B1"},
            {id: 19, note: "B2"},
            {id: 20, note: "B3"},
            {id: 21, note: "B4"},
            {id: 22, note: "B5"},
            {id: 23, note: "B6"},
            {id: 24, note: "B7"},
            {id: 25, note: "C#1"},
            {id: 26, note: "C#2"},
            {id: 27, note: "C#3"},
            {id: 28, note: "C#4"},
            {id: 29, note: "C#5"},
            {id: 30, note: "C#6"},
            {id: 31, note: "C#7"},
            {id: 32, note: "C1"},
            {id: 33, note: "C2"},
            {id: 34, note: "C3"},
            {id: 35, note: "C4"},
            {id: 36, note: "C5"},
            {id: 37, note: "C6"},
            {id: 38, note: "C7"},
            {id: 39, note: "C8"},
            {id: 40, note: "D#1"},
            {id: 41, note: "D#2"},
            {id: 42, note: "D#3"},
            {id: 43, note: "D#4"},
            {id: 44, note: "D#5"},
            {id: 45, note: "D#6"},
            {id: 46, note: "D#7"},
            {id: 47, note: "D1"},
            {id: 48, note: "D2"},
            {id: 49, note: "D3"},
            {id: 50, note: "D4"},
            {id: 51, note: "D5"},
            {id: 52, note: "D6"},
            {id: 53, note: "D7"},
            {id: 54, note: "E1"},
            {id: 55, note: "E2"},
            {id: 56, note: "E3"},
            {id: 57, note: "E4"},
            {id: 58, note: "E5"},
            {id: 59, note: "E6"},
            {id: 60, note: "E7"},
            {id: 61, note: "F#1"},
            {id: 62, note: "F#2"},
            {id: 63, note: "F#3"},
            {id: 64, note: "F#4"},
            {id: 65, note: "F#5"},
            {id: 66, note: "F#6"},
            {id: 67, note: "F#7"},
            {id: 68, note: "F1"},
            {id: 69, note: "F2"},
            {id: 70, note: "F3"},
            {id: 71, note: "F4"},
            {id: 72, note: "F5"},
            {id: 73, note: "F6"},
            {id: 74, note: "F7"},
            {id: 75, note: "G#1"},
            {id: 76, note: "G#2"},
            {id: 77, note: "G#3"},
            {id: 78, note: "G#4"},
            {id: 79, note: "G#5"},
            {id: 80, note: "G#6"},
            {id: 81, note: "G#7"},
            {id: 82, note: "G1"},
            {id: 83, note: "G2"},
            {id: 84, note: "G3"},
            {id: 85, note: "G4"},
            {id: 86, note: "G5"},
            {id: 87, note: "G6"},
            {id: 88, note: "G7"}
        ]
    }

    getIDFromNote(note) {
        let id = undefined;
        this.noteIDList.forEach(it => {
            if (it.note === note) {
                id = it.id;
            }
        });
        return id;
    }

    round(value, decimals) {
        return Number(Math.round(value + "e" + decimals) + 'e-' + decimals);
    }
}

window.addEventListener('load', function (ev) {
    constants = new Constants();
}, false);