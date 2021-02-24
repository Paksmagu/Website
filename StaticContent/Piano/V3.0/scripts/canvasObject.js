let canvasObject;

class Canvas {
    constructor() {
        this.canvas = undefined;
        this.canvasContext = undefined;

        this.whiteKeyWidth = undefined;
        this.whiteKeyHeight = undefined;

        this.blackKeyWidth = undefined;
        this.blackKeyHeight = undefined;

        this.playableOctave = 4;

        this.whiteKeys = [];
        this.blackKeys = [];

        this.displayTooltips = false;

        this.whiteKeyDefaultGradient = "rgb(255,255,255)";
        this.whiteKeyPressGradient = undefined;
        this.whiteKeyHoverGradient = undefined;

        this.blackKeyDefaultGradient = "rgb(0,0,0)";
        this.blackKeyPressGradient = undefined;
        this.blackKeyHoverGradient = undefined;

        this.octaveIndicatorGradient = "rgb(166, 42, 71)";
    }

    setDisplayTooltips(displayBoolean) {
        this.displayTooltips = displayBoolean;
        this.render();
    }

    resetCanvas() {
        this.whiteKeys = [];
        this.blackKeys = [];
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    initialize() {
        try {
            this.canvas = document.getElementById("canvas");
            this.canvasContext = this.canvas.getContext('2d');

            window.addEventListener('resize', function (event) {
                canvasObject.initKeyboard();
            });

            this.initKeyboard();
        } catch (error) {
            console.log(error);
            alert('Ilmnes viga klaviatuuri loomisel. Palun värskendage lehekülg, et uuesti proovida.');
        }
    };

    initKeyboard() {
        let windowHeight = window.innerHeight / 2;
        if (windowHeight > constants.maxPianoHeight) {
            windowHeight = constants.maxPianoHeight;
        }
        this.canvas.height = windowHeight;
        const widthElement = window.getComputedStyle(document.getElementById(constants.widthElement));
        this.canvas.width = widthElement.width.replace("px", "")
            - widthElement.paddingLeft.replace("px", "")
            - widthElement.paddingRight.replace("px", "");

        const whiteKeyBorderOffset = (constants.numberOfWhiteKeys) * constants.halfBorderThickness;

        this.whiteKeyWidth = constants.round((this.canvas.width - whiteKeyBorderOffset) / constants.numberOfWhiteKeys, 2);
        this.whiteKeyHeight = constants.round(this.canvas.height - constants.borderThickness, 2);

        this.blackKeyWidth = constants.round(this.whiteKeyWidth * 2 / 3, 2);
        this.blackKeyHeight = constants.round(this.whiteKeyHeight * 2 / 3, 2);
        this.initGradients();

        this.resetCanvas();
        this.initKeys();

        this.render();
    };

    initKeys() {
        for (let octaveIndex = 0; octaveIndex < constants.numberOfOctaves; octaveIndex++) {
            this.drawWhiteKeys(octaveIndex);
            this.drawBlackKeys(octaveIndex);
        }
    };

    initGradients() {
        this.whiteKeyPressGradient = this.canvasContext.createLinearGradient(0, 0, 0, this.whiteKeyHeight);
        this.whiteKeyPressGradient.addColorStop(0.1, "white");
        this.whiteKeyPressGradient.addColorStop(0.95, "rgb(177, 177, 177)");
        this.whiteKeyPressGradient.addColorStop(1, "rgb(101, 101, 101)");

        this.whiteKeyHoverGradient = this.canvasContext.createLinearGradient(0, 0, 0, this.whiteKeyHeight);
        this.whiteKeyHoverGradient.addColorStop(0.1, "white");
        this.whiteKeyHoverGradient.addColorStop(1, "rgb(207, 207, 207)");

        this.blackKeyHoverGradient = this.canvasContext.createLinearGradient(0, 0, 0, this.blackKeyHeight);
        this.blackKeyHoverGradient.addColorStop(0.1, "black");
        this.blackKeyHoverGradient.addColorStop(1, "gray");

        this.blackKeyPressGradient = this.canvasContext.createLinearGradient(0, 0, 0, this.blackKeyHeight);
        this.blackKeyPressGradient.addColorStop(0.3, "gray");
        this.blackKeyPressGradient.addColorStop(0.9, "black");
    };

    renderLogic(keyList, isWhiteKey) {
        for (let i = 0; i < keyList.length; i++) {
            switch (keyList[i].mouse) {
                case constants.pressed: {
                    this.canvasContext.fillStyle = keyList[i].pressGradient;
                    break;
                }
                case constants.hover: {
                    this.canvasContext.fillStyle = keyList[i].hoverGradient;
                    break;
                }
                default: {
                    if (isWhiteKey && this.playableOctave === keyList[i].octaveIndex
                        && (keyList[i].keyInOctave === 0 || keyList[i].keyInOctave === constants.whiteKeysInOctave - 1)) {
                        this.canvasContext.fillStyle = keyList[i].octaveGradient;
                    } else {
                        this.canvasContext.fillStyle = keyList[i].defaultGradient;
                    }
                    break;
                }
            }
            this.canvasContext.lineWidth = constants.borderThickness;
            this.canvasContext.stroke(keyList[i]);
            this.canvasContext.fill(keyList[i]);
        }
    }

    renderTooltips(keyList, keyWidth, keyHeight, isWhiteKey) {
        this.canvasContext.font = keyWidth / 1 + "px serif";
        if (isWhiteKey) this.canvasContext.fillStyle = "black";
        else this.canvasContext.fillStyle = "white";

        for (let i = 0; i < keyList.length; i++) {
            if (keyList[i].keybind != null) {
                let keyBindString = keyList[i].keybind.replace("Key", "")
                if (isWhiteKey) keyBindString = keyBindString.toLowerCase()
                this.canvasContext.fillText(
                    keyBindString,
                    keyList[i].x + (keyWidth / 2) - (this.canvasContext.measureText(keyBindString).width / 2),
                    keyHeight * 0.9)
            }
        }
    }

    render() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderLogic(this.whiteKeys, true)
        this.renderLogic(this.blackKeys, false)
        if (this.displayTooltips) {
            this.renderTooltips(this.whiteKeys, this.whiteKeyWidth, this.whiteKeyHeight, true);
            this.renderTooltips(this.blackKeys, this.blackKeyWidth, this.blackKeyHeight, false);
        }
        document.getElementById("keyboard-tooltip").checked = this.displayTooltips;
    };

    drawWhiteKeys(octaveIndex) {
        let keysToDrawPerOctave;
        if (octaveIndex === 0) {
            keysToDrawPerOctave = constants.whiteKeysInZeroOctave;
        } else if (octaveIndex === 8) {
            keysToDrawPerOctave = constants.whiteKeysInEighthOctave;
        } else {
            keysToDrawPerOctave = constants.whiteKeysInOctave;
        }

        let keysPreviouslyDrawn = this.whiteKeys.length

        let whiteKeyBorderOffset = keysPreviouslyDrawn * constants.borderThickness; //Take into account the border thickness of the white keys
        const octaveOffset = (keysPreviouslyDrawn * this.whiteKeyWidth); //when a new octave starts increase the width
        for (let keyInOctave = 0; keyInOctave < keysToDrawPerOctave; keyInOctave++) {
            let keyIndex = keyInOctave
            if (octaveIndex === 0) keyIndex = keyIndex + constants.whiteKeysInOctave - constants.whiteKeysInZeroOctave

            const totalOffset = constants.round((keyInOctave * this.whiteKeyWidth) + octaveOffset + whiteKeyBorderOffset, 2);
            const whiteKey = this.newKey(totalOffset, this.whiteKeyWidth, this.whiteKeyHeight,
                this.createNoteForKey(constants.notes[keyIndex], octaveIndex),
                keyInOctave, octaveIndex + constants.lowestOctave, true); //+lowestOctave bcz index starts from 0 and we want Octaves 2-6
            this.whiteKeys.push(whiteKey);

            whiteKeyBorderOffset += constants.borderThickness;
        }
    };

    drawBlackKeys(octaveIndex) {
        let keysToDrawPerOctave;
        if (octaveIndex === 0) {
            keysToDrawPerOctave = constants.blackkeysInZeroOctave;
        } else if (octaveIndex > 7) {
            return
        } else {
            keysToDrawPerOctave = constants.blackKeysInOctave;
        }

        let whiteKeysToDrawPerOctave;
        if (octaveIndex === 0) {
            whiteKeysToDrawPerOctave = constants.whiteKeysInZeroOctave;
        } else if (octaveIndex === 8) {
            whiteKeysToDrawPerOctave = constants.whiteKeysInEighthOctave;
        } else {
            whiteKeysToDrawPerOctave = constants.whiteKeysInOctave;
        }

        let whiteKeysPreviouslyDrawn = this.whiteKeys.length - whiteKeysToDrawPerOctave


        let blackKeyBorderOffset = 0;
        const blackKeyStartPlace = this.whiteKeyWidth + constants.halfBorderThickness - (this.blackKeyWidth / 2); //Between 2 white notes
        const octaveOffset = whiteKeysPreviouslyDrawn * (this.whiteKeyWidth + constants.borderThickness); //when a new octave starts increase the width
        for (let keyInOctave = 0; keyInOctave < keysToDrawPerOctave; keyInOctave++) {
            let keyIndex = keyInOctave
            if (octaveIndex === 0) keyIndex = keyIndex + constants.blackKeysInOctave - constants.blackkeysInZeroOctave

            const blackKeyOffset = this.calculateBlackKeyOffset(keyInOctave); // C# D# ?? F# G# A#   - skipib 1 note
            const totalOffset = constants.round(blackKeyOffset + blackKeyStartPlace + octaveOffset + blackKeyBorderOffset, 2); //Total offset

            const blackKey = this.newKey(totalOffset, this.blackKeyWidth, this.blackKeyHeight,
                this.createNoteForKey(constants.higherBlackNotes[keyIndex], octaveIndex),
                keyInOctave, octaveIndex + constants.lowestOctave, false); //+lowestOctave bcz index starts from 0 and we want Octaves 2-6
            this.blackKeys.push(blackKey);

            blackKeyBorderOffset += constants.borderThickness;
        }
    };

    createNoteForKey(note, octaveIndex) {
        return note + (octaveIndex + constants.lowestOctave); //+lowestOctave bcz index starts from 0 and we want from sepcific octave
    }

    newKey(totalOffset, width, height, note, keyInOctave, octaveIndex, whiteKey) {
        const key = new Path2D();
        key.rect(totalOffset + constants.halfBorderThickness, constants.halfBorderThickness, width, height);
        key.x = totalOffset + constants.halfBorderThickness;
        key.y = constants.halfBorderThickness;
        key.note = note;
        key.mouse = constants.released;
        key.keybind = KeyBindMapping.getNoteMapping(note);
        key.octaveIndex = octaveIndex;
        key.keyInOctave = keyInOctave;
        let defaultGradient, pressGradient, hoverGradient, octaveGradient;
        if (whiteKey) {
            defaultGradient = this.whiteKeyDefaultGradient;
            pressGradient = this.whiteKeyPressGradient;
            hoverGradient = this.whiteKeyHoverGradient;
            octaveGradient = this.octaveIndicatorGradient;
        } else {
            defaultGradient = this.blackKeyDefaultGradient;
            pressGradient = this.blackKeyPressGradient;
            hoverGradient = this.blackKeyHoverGradient;
        }
        key.defaultGradient = defaultGradient;
        key.pressGradient = pressGradient;
        key.hoverGradient = hoverGradient;
        key.octaveGradient = octaveGradient;
        return key;
    };

    calculateBlackKeyOffset(index) { // C# D# ?? F# G# A#   - skipib 1 note
        if (index < 2) {
            return (index * (this.whiteKeyWidth));
        } else {
            return (index * (this.whiteKeyWidth)) + this.whiteKeyWidth + constants.borderThickness;
        }
    };

    // this is bad way of implementing.
    getNoteFromList(noteString) {
        if (noteString == null) return undefined;
        if (noteString.length > 3) {
            for (let i = 0; i < constants.chords.length; i++) {
                // Chords are in format "AChord minor"
                if (constants.chords[i].chord === noteString.split(" ")[0]) {
                    if (noteString.split(" ")[1] === constants.minor) return constants.chords[i].minorNotes;
                    else return constants.chords[i].majorNotes;
                }
            }
        } else {
            for (let i = 0; i < this.blackKeys.length; i++) {
                if (this.blackKeys[i].note === noteString) {
                    return this.blackKeys[i];
                }
            }
            for (let i = 0; i < this.whiteKeys.length; i++) {
                if (this.whiteKeys[i].note === noteString) {
                    return this.whiteKeys[i];
                }
            }
        }
        //if nothing found return undefined
        return undefined;
    }

    changePlayableOctave(keyDown) {
        //true = right, false = left
        if (keyDown.code === "ArrowLeft") {
            if (canvasObject.playableOctave > constants.lowestOctave)
                canvasObject.playableOctave--;
        } else {
            if (canvasObject.playableOctave < constants.highestOctave)
                canvasObject.playableOctave++;
        }
        this.render();
    }
}

window.addEventListener('load', function (ev) {
    canvasObject = new Canvas();
    canvasObject.initialize();
}, false);