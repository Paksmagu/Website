let movementLogic;

class Movement {
    constructor() {
        this.previouseKey = undefined;
        this.pressedDownKey = undefined;
        this.mousePressed = false;
        this.keyList = {};
        this.eventTypes = {};
    }

    resetPreviousValues() {
        this.mousePressed = false;
        if (this.previouseKey != null) {
            this.previouseKey.mouse = constants.released;
        }
        this.previouseKey = undefined;
        if (this.pressedDownKey != null) {
            this.pressedDownKey.mouse = constants.released;
        }
        this.pressedDownKey = undefined;
    };

    initEventListeners() {
        if (constants.isMobile.any()) {
            this.eventTypes.pressEvent = "touchstart";
            this.eventTypes.releaseEvent = "touchend";
            this.eventTypes.moveEvent = "touchmove";
            this.eventTypes.cancelEvent = "touchcancel";
        } else {
            this.eventTypes.pressEvent = "mousedown";
            this.eventTypes.releaseEvent = "mouseup";
            this.eventTypes.moveEvent = "mousemove";
            this.eventTypes.cancelEvent = "mouseleave";
        }
        this.initEvents();
    };

    keyboardLogic(noteFromMapping, keyEvent, keyPressed) {
        const key = canvasObject.getNoteFromList(noteFromMapping)
        if (key == null) return;
        else if (key instanceof Array) {
            let noteList = [];
            for (let i = 0; i < key.length; i++) {
                noteList.push(key[i] + canvasObject.playableOctave)
            }
            if (keyPressed) {
                noteList.forEach(note => {
                    const noteKey = canvasObject.getNoteFromList(note);
                    noteKey.mouse = constants.pressed;
                })
                sound.schedule(noteList)
            } else {
                noteList.forEach(note => {
                    const noteKey = canvasObject.getNoteFromList(note);
                    noteKey.mouse = constants.released;
                })
            }
        } else {
            if (keyPressed) {
                key.mouse = constants.pressed;
                sound.play(key, constants.pressed);
            } else {
                key.mouse = constants.released;
            }
        }
        canvasObject.render();
    }

    initEvents() {
        canvasObject.canvas.onselectstart = function () {
            return false;
        };

        canvasObject.canvas.addEventListener(movementLogic.eventTypes.pressEvent, this.mousePressLogic);

        canvasObject.canvas.addEventListener(movementLogic.eventTypes.releaseEvent, this.mouseReleaseLogic);

        canvasObject.canvas.addEventListener(movementLogic.eventTypes.moveEvent, this.moveEventLogic);

        canvasObject.canvas.addEventListener(movementLogic.eventTypes.cancelEvent, this.mouseReleaseLogic);

        document.addEventListener("keydown", function (keyDown) {
            if (!movementLogic.keyList[keyDown.code]) {
                const noteFromMapping = KeyBindMapping.getKeyboardMapping(keyDown);
                if (noteFromMapping == null) {
                    movementLogic.keyList[keyDown.code] = keyDown.code;
                    return;
                }
                movementLogic.keyList[keyDown.code] = noteFromMapping;
                if (keyDown.code === "ArrowLeft" || keyDown.code === "ArrowRight") {
                    canvasObject.changePlayableOctave(keyDown);
                } else {
                    movementLogic.keyboardLogic(noteFromMapping, keyDown, true);
                }
            }
        });

        document.addEventListener("keyup", function (keyUp) {
            const noteFromMapping = movementLogic.keyList[keyUp.code];
            delete movementLogic.keyList[keyUp.code];
            movementLogic.keyboardLogic(noteFromMapping, keyUp, false);
        });
    };

    mousePressLogic(event) {
        event.preventDefault();
        movementLogic.mousePressed = true;
        const key = movementLogic.collides(event);
        if (key == null) return false;
        key.mouse = constants.pressed;
        sound.play(key, constants.pressed);
        canvasObject.render();
        movementLogic.pressedDownKey = key;
        return false;
    };

    mouseReleaseLogic(event) {
        event.preventDefault();
        movementLogic.resetPreviousValues();
        movementLogic.moveEventLogic(event);
        return false;
    };

    moveEventLogic(event) {
        event.preventDefault();
        const key = movementLogic.collides(event);
        if (key == null) {
            canvasObject.render();
            return false;
        }
        if (key.mouse !== constants.pressed) {
            key.mouse = constants.hover;
        }
        if (movementLogic.previouseKey === key) return false;
        if (movementLogic.previouseKey != null && movementLogic.previouseKey.mouse !== constants.pressed) {
            movementLogic.previouseKey.mouse = constants.released;
        }
        if (movementLogic.mousePressed) {
            sound.play(key, constants.hover);
        }
        canvasObject.render();
        movementLogic.previouseKey = key;
        return false;
    };

    collides(event) {
        const cursorPosition = this.cursorPosition(event);
        const blackCollision = this.checkCollision(cursorPosition, canvasObject.blackKeys, canvasObject.blackKeyWidth, canvasObject.blackKeyHeight);
        if (blackCollision) {
            return blackCollision;
        }
        const whiteCollision = this.checkCollision(cursorPosition, canvasObject.whiteKeys, canvasObject.whiteKeyWidth, canvasObject.whiteKeyHeight);
        if (whiteCollision) {
            return whiteCollision;
        }
        return undefined;
    };

    checkCollision(mouseLocation, list, keyWidth, keyHeight) {
        const x = mouseLocation.x;
        const y = mouseLocation.y;
        let isCollision = false;
        for (let i = 0; i < list.length; i++) {
            const left = list[i].x, right = list[i].x + keyWidth;
            const top = list[i].y, bot = list[i].y + keyHeight;
            if (right >= x && left <= x && bot >= y && top <= y) {
                isCollision = list[i];
            }
        }
        return isCollision;
    };

    cursorPosition(event) {
        let x;
        let y;
        const rect = canvasObject.canvas.getBoundingClientRect();
        if (constants.isMobile.any()) {
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;
        } else {
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        }
        return {x: x, y: y};
    };
}

window.addEventListener('load', function (event) {
    movementLogic = new Movement();
    movementLogic.initEventListeners();
}, false);
