// document.body
document.addEventListener("keypress", onKeyPress);
let rec = document.querySelectorAll("#record");
const rec1 = rec[0];
const rec2 = rec[1];
const rec3 = rec[2];
const rec4 = rec[3];

let chosenToPlay = document.querySelectorAll("#play");
const chosenToPlay1 = chosenToPlay[0];
const chosenToPlay2 = chosenToPlay[1];
const chosenToPlay3 = chosenToPlay[2];
const chosenToPlay4 = chosenToPlay[3];

let allSounds = [];
let soundArray1 = [];
let soundArray2 = [];
let soundArray3 = [];
let soundArray4 = [];

let chosenSoundArray = [];

let buttons = document.querySelectorAll("#my_audio");
const recording = document.querySelector("#recording");
const chosenRecording = document.querySelector("#chosenRecording");

const btn1 = buttons[0];
const btn2 = buttons[1];
const btn3 = buttons[2];
const btn4 = buttons[3];

recording.addEventListener("click", () => {
  allSounds.forEach((element, i) => {
    setTimeout(() => {
      playSound(element);
    }, i * 500);
  });
});

function saveCustomSound() {
  if (chosenToPlay1.checked) {
    chosenSoundArray.push(soundArray1);
  }
  if (chosenToPlay2.checked) {
    chosenSoundArray.push(soundArray2);
  }
  if (chosenToPlay3.checked) {
    chosenSoundArray.push(soundArray3);
  }
  if (chosenToPlay4.checked) {
    chosenSoundArray.push(soundArray4);
  }
}

chosenRecording.addEventListener("click", () => {
  saveCustomSound();

  chosenSoundArray.forEach((element, i) => {
    setTimeout(() => {
      playSound(element);
    }, i * 500);
  });

  chosenSoundArray = [];
});

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.className === "my_audio1") {
      soundArray1.forEach((element, i) => {
        setTimeout(() => {
          playSound(element);
        }, i * 500);
      });
    } else if (element.className === "my_audio2") {
      soundArray2.forEach((element, i) => {
        setTimeout(() => {
          playSound(element);
        }, i * 500);
      });
    } else if (element.className === "my_audio3") {
      soundArray3.forEach((element, i) => {
        setTimeout(() => {
          playSound(element);
        }, i * 500);
      });
    } else if (element.className === "my_audio4") {
      soundArray4.forEach((element, i) => {
        setTimeout(() => {
          playSound(element);
        }, i * 500);
      });
    }
  });
});

function saveSound(key) {
  allSounds.push(key);
  if (rec1.checked) {
    soundArray1.push(key);
  } else if (rec2.checked) {
    soundArray2.push(key);
  } else if (rec3.checked) {
    soundArray3.push(key);
  } else {
    soundArray4.push(key);
  }
}

function onKeyPress(event) {
  const key = event.key;

  switch (key) {
    case "q":
      playSound("boom");
      saveSound("boom");
      break;
    case "w":
      playSound("clap");
      saveSound("clap");
      break;
    case "e":
      playSound("hihat");
      saveSound("hihat");
      break;
    case "r":
      playSound("kick");
      saveSound("kick");
      break;
    case "t":
      playSound("openhat");
      saveSound("openhat");
      break;
    case "y":
      playSound("ride");
      saveSound("ride");
      break;
    case "u":
      playSound("snare");
      saveSound("snare");
      break;
    case "i":
      playSound("tink");
      saveSound("tink");
      break;
    case "o":
      playSound("tom");
      saveSound("tom");
      break;
  }
}

function playSound(sound) {
  const audioTag = document.querySelector("#" + sound);
  audioTag.currentTime = 0;
  audioTag.play();
}
