const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const viewResult = document.querySelector("#viewResult");
const endPoint = 12;
const qnaTextBox = document.getElementById("qnaBoxBackground");
let select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const twoHours = 2 * 60 * 60 * 1000; // 2시간을 밀리초로 변환

function calResult() {
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
  let point = calResult();
  // let resultName = document.querySelector(".resultname");
  // resultName.innerHTML = infoList[point].name;

  var resultImg = document.querySelector("#resultImg > img");
  let imgDiv = document.querySelector("#resultImg");
  var imgURL = "img/image-" + point + ".png";
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add("img-fluid");

  let resultDesc = document.querySelector(".resultDesc");
  resultDesc.innerHTML = infoList[point].desc;
  resultDesc.classList.add("py-20");
  resultDesc.classList.add("pt-10");
}

function goResult() {
  viewResult.style.WebkitAniamtion = "fadeOut 1s";
  viewResult.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      viewResult.style.display = "none";
      result.style.display = "block";
    }, 450);
  });
  console.log(select);
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("Button");
  a.appendChild(answer);

  qnaTextBox.style.animation = "fadeIn 0.6s";
  qnaTextBox.style.display = "block";
  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  answer.innerHTML = answerText;
  answer.addEventListener(
    "click",
    function () {
      qnaTextBox.style.display = "none";
      var children = document.querySelectorAll(".answerList");
      var target = qnaList[qIdx].a[idx].type;
      for (let i = 0; i < target.length; i++) {
        select[target[i]] += 1;
      }

      for (let i = 0; i < children.length; i++) {
        children[i].style.display = "none";
      }
      goNext(++qIdx);
      console.log(select);
    },
    false
  );
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    setResultDisplay();
    return;
  }
  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

function setResultDisplay() {
  qna.style.display = "none";
  viewResult.style.display = "block";
  adShown = getCookie("adShown");
  currentTime = new Date().getTime();
  // 쿠키 "adShown"의 값에 따라 광고 버튼 노출 여부를 결정
  if (getCookie()) {
    // 광고를 본 적이 없고 쿠키가 없다면
    closeBtnCount = document.getElementById("advertisementClose");
    // document.getElementById("resultComment").innerHTML = infoList[select.indexOf(Math.max(...select))].name;
    for (let i = 4; i > 0; i--) {
      setTimeout(() => {
        closeBtnCount.innerHTML = i;
        i--;
      }, 5000 - 1000 * i);
    }
    setTimeout(() => {
      closeBtnCount.innerHTML = "X";
      closeBtnCount.style.pointerEvents = "auto";
    }, 5000);
    // 광고 버튼을 노출
  } else {
    closeAD(); // 광고 버튼을 숨김
  }
}
function closeAD() {
  document.getElementById("viewResultBt").style.display = "none";
  document.getElementById("viewResultBtn").style.display = "block";
  document.getElementById("advertisementClose").style.display = "none";
}
function adClickCookieSet() {
  var currentTime = new Date().getTime();
  adSetCookie("adShown", currentTime, 7200);
  goResult();
}
function pageRestart() {
  select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  result.style.display = "none";
  main.style.display = "block";
}
function adSetCookie(key, value, time) {
  const now = new Date();
  // 2시간 후의 시간을 구한다.
  const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  // 쿠키 만료일을 2시간 후로 설정
  document.cookie = `skipButtonClicked=true; expires=${twoHoursLater.toUTCString()}; path=/`;
}
function getCookie() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "skipButtonClicked" && value === "true") {
      // 쿠키가 존재하고 값이 true인 경우
      return false;
    }
  }
  return true;
}
function begin() {
  main.style.display = "none";
  qna.style.display = "block";
  // notAutoPlay();
  let qIdx = 0;
  goNext(qIdx);
}
