
class KeyBindMapping {
    constructor() {
    }

    static getNoteMapping(note) {
        switch (note.toUpperCase()) {
            case "C3":
            case "C#3":
                return "KeyQ";
            case "D3":
            case "D#3":
                return "KeyW";
            case "E3":
                return "KeyE";
            case "F3":
            case "F#3":
                return "KeyR";
            case "G3":
            case "G#3":
                return "KeyT";
            case "A3":
            case "A#3":
                return "KeyY";
            case "B3":
                return "KeyU";
            case "C4":
            case "C#4":
                return "KeyA";
            case "D4":
            case "D#4":
                return "KeyS";
            case "E4":
                return "KeyD";
            case "F4":
            case "F#4":
                return "KeyF";
            case "G4":
            case "G#4":
                return "KeyG";
            case "A4":
            case "A#4":
                return "KeyH";
            case "B4":
                return "KeyJ";
            case "C5":
            case "C#5":
                return "KeyZ";
            case "D5":
            case "D#5":
                return "KeyX";
            case "E5":
                return "KeyC";
            case "F5":
            case "F#5":
                return "KeyV";
            case "G5":
            case "G#5":
                return "KeyB";
            case "A5":
            case "A#5":
                return "KeyN";
            case "B5":
                return "KeyM";
            default:
                return undefined;
        }
    }

    static getKeyboardMapping(keyEvent) {
        switch (keyEvent.code) {
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowUp":
            case "ArrowDown":
                return keyEvent.code
            case "Digit1":
                if (keyEvent.shiftKey) return "AChord minor";
                else return "AChord major";
            case "Digit2":
                if (keyEvent.shiftKey) return "CChord minor";
                else return "CChord major";
            case "Digit3":
                if (keyEvent.shiftKey) return "DChord minor";
                else return "DChord major";
            case "Digit4":
                if (keyEvent.shiftKey) return "EChord minor";
                else return "EChord major";
            case "Digit5":
                if (keyEvent.shiftKey) return "FChord minor";
                else return "FChord major";
            case "Digit6":
                if (keyEvent.shiftKey) return "GChord minor";
                else return "GChord major";
            case "KeyQ":
                if (keyEvent.shiftKey) return "C#3";
                else return "C3";
            case "KeyW":
                if (keyEvent.shiftKey) return "D#3";
                else return "D3";
            case "KeyE":
                return "E3";
            case "KeyR":
                if (keyEvent.shiftKey) return "F#3";
                else return "F3";
            case "KeyT":
                if (keyEvent.shiftKey) return "G#3";
                else return "G3";
            case "KeyY":
                if (keyEvent.shiftKey) return "A#3";
                else return "A3";
            case "KeyU":
                return "B3";
            case "KeyA":
                if (keyEvent.shiftKey) return "C#4";
                else return "C4";
            case "KeyS":
                if (keyEvent.shiftKey) return "D#4";
                else return "D4";
            case "KeyD":
                return "E4";
            case "KeyF":
                if (keyEvent.shiftKey) return "F#4";
                else return "F4";
            case "KeyG":
                if (keyEvent.shiftKey) return "G#4";
                else return "G4";
            case "KeyH":
                if (keyEvent.shiftKey) return "A#4";
                else return "A4";
            case "KeyJ":
                return "B4";
            case "KeyZ":
                if (keyEvent.shiftKey) return "C#5";
                else return "C5";
            case "KeyX":
                if (keyEvent.shiftKey) return "D#5";
                else return "D5";
            case "KeyC":
                return "E5";
            case "KeyV":
                if (keyEvent.shiftKey) return "F#5";
                else return "F5";
            case "KeyB":
                if (keyEvent.shiftKey) return "G#5";
                else return "G5";
            case "KeyN":
                if (keyEvent.shiftKey) return "A#5";
                else return "A5";
            case "KeyM":
                return "B5";
            default:
                return undefined;
        }
    }
}