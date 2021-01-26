
let constants;

class  Constants {
    constructor() {
        this.websiteURL = "http://resentful.tk/V2.0/"

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
        this.lowestOctave = 2;
        this.highestOctave = 6;
        this.numberOfOctaves = 5; //getNoteForKey(note, octaveIndex) {
        this.whiteKeysInOctave = 7;
        this.blackKeysInOctave = 5;
        this.numberOfWhiteKeys = this.numberOfOctaves * this.whiteKeysInOctave + 2; //1 free note on each side
        this.numberOfBlackKeys = this.numberOfOctaves * this.blackKeysInOctave;
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
    }

    round(value, decimals) {
        return Number(Math.round(value + "e" + decimals) + 'e-' + decimals);
    }
}

window.addEventListener('load', function (ev) {
    constants = new Constants();
}, false);