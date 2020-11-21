let sound;

class Sound {
    constructor() {
        this.audioContext = undefined;
        this.instrument = undefined;
    }

    initializeAudio() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            document.onclick = function (ev) {
                sound.audioContext.resume();
            };

            if (constants.isMobile.any()) {
                this.instrument = Soundfont.instrument(this.audioContext, constants.instrumentName, {gain: constants.mobileSoundGain});
            } else {
                this.instrument = Soundfont.instrument(this.audioContext, constants.instrumentName, {gain: constants.pcSoundGain});
            }
            this.instrument.then(function (value) {
                document.getElementById("status").hidden = true;
            });

        } catch (e) {
            console.log(e);
            alert('Teie veebilehitseia ei toeta virtuaalset klaverit.');
        }
    };

    play(key, playOption) {
        if (playOption === constants.pressed) {
            ajax.getUserForNote(key.note);
        }
        const audioContextTime = this.audioContext.currentTime;
        this.instrument.then(function (piano) {
            piano.play(key.note, audioContextTime, {duration: 1});
        });
    };

    schedule (noteList) {
        const audioContextTime = this.audioContext.currentTime;
        this.instrument.then(function (piano) {
            piano.schedule(audioContextTime, noteList);
        });
    }
}

window.addEventListener('load', function (ev) {
    sound = new Sound();
    sound.initializeAudio();
}, false);
