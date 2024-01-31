function start() {
  var randomIndex = Math.floor(Math.random() * arraySet.length);
  var randomArray = arraySet[randomIndex];

  for (let i = 0; i < 3; i++) {
    document.getElementById(`box${i + 1}`).innerText = randomArray[i];
  }

  const randomElementIndex = Math.floor(Math.random() * 3);
  document.querySelector(".choosebox").innerText =
    randomArray[randomElementIndex];
}

start();
function getName(element) {
  const boxText = element.innerText;
  // console.log("Text inside the clicked box:", boxText);
  selectedText = boxText;
  compareText();
}

function playAudior() {
  var audio = new Audio("right.mp3");
  audio.play();
}
function playAudiow() {
  var audio = new Audio("wrong.mp3");
  audio.play();
}

function compareText() {
  const chooseBoxText = document.querySelector(".choosebox").innerText;

  if (selectedText === chooseBoxText) {
    document.getElementById("incorrect").style.backgroundColor = "";
    document.getElementById("correct").style.backgroundColor = "green";
    // playAudior(); audio function
    setTimeout(() => {
      document.getElementById("correct").style.backgroundColor = "";
      start();
    }, 1000);
  } else {
    playAudiow();
    document.getElementById("correct").style.backgroundColor = "";
    document.getElementById("incorrect").style.backgroundColor = "red";
  }
}
