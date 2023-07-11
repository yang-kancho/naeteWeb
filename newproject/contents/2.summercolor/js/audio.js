const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");

function musicOnOff() {
  // 오디오 토글 제어 함수
  if (audio1.paused && audio2.paused) {
    // isPlaying = true;
    audio1.play();
    audio2.play();
    document.getElementById("audioOnOffBtn").innerText = "♬Music off";
  } else {
    audio1.pause();
    audio2.pause();
    document.getElementById("audioOnOffBtn").innerText = "♬Music on";
  }
}
function notAutoPlay() {
  // 오디오가 자동재생 되지 않았을때 시작하기 버튼을 통해 재생하는 함수
  if (audio1.paused) {
    isPlaying = true;
    audio1.play();
    audio2.play();
    document.getElementById("audioOnOffBtn").innerText = "♬Music off";
  }
}

function play() {
  var audio1 = document.getElementById("audio1");
  var audio2 = document.getElementById("audio2");
  audio1.play();
  audio2.play();
}
