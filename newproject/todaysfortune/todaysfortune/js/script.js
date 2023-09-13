const fortuneTexts = [
  "2023년 계묘년 \n하루 운세 보는 방법",
  "1. 동전을 넣는다",
  "2. ‘오늘 하루 어떨까?' \n마음 속으로 질문한다.",
  "3. 결과 보기 버튼을 \n클릭한다.",
  "",
  "오늘 하루 어떨까?",
  "",
];

const fortuneResults = [
  {
    title: "도전의 기회가 있다",
    content1: "새로운 도전에 맞서기에 좋은 기회의 날",
    content2: "도전은 하되, 첫술에 너무 능숙해지려는 욕심을 버리세요",
    content3: "성장과 발전을 기록하는 일지",
    content4: "오늘은 SNS에서 새로운 인연을 만날 수 있습니다.",
  },
  {
    title: "집중력 강화",
    content1: "집중력을 높여야 학업과 직장에서 성과를 이룰 수 있습니다.",
    content2: "공부나 일하는 환경을 집중하기 좋게 정리하세요.",
    content3: "귀마개",
    content4: "전문적인 수업이나 워크숍에 참석하세요.",
  },
  {
    title: "당신을 둘러싼 사람들에게 \n신뢰받는 날",
    content1: "주변 사람들에게 신뢰받을 수 있는 날입니다.",
    content2: "타인의 말에 귀를 기울이되, 자신의 판단을 잃지 마세요.",
    content3: "다정한 말과 함께하는 작은 선물",
    content4: "친목 모임이나 파티에 참석하세요.",
  },
  {
    title: "정신적인 안정을 찾는 날",
    content1: "내면의 평화와 정신적인 안정을 찾기 좋은 날입니다.",
    content2: "감정의 변화에 휩쓸리지 않도록 조심하세요.",
    content3: "명상을 도와주는 조용한 공간",
    content4: "독서모임이나 철학적인 대화 모임에 참여하세요.",
  },
  {
    title: "새로운 인연의 시작",
    content1: "연애와 인간관계에 유리한 날입니다.",
    content2:
      "새로운 사람과 소통할 때 너무 조심스럽거나 소극적인 모습을 보여주지 않는게 좋습니다.",
    content3: "꽃",
    content4: "소셜 이벤트나 클럽에 참석해보세요.",
  },
  {
    title: "의외의 도움",
    content1: "학업이나 직장에서 의외의 도움을 받을 수 있는 날입니다.",
    content2: "주변에서 예상치 못한 지원을 받게 될 것입니다.",
    content3: "편지나 메모지",
    content4: "기존 지인들과 함께 모임을 가지세요.",
  },
  {
    title: "창의적 아이디어의 시간",
    content1: "학업이나 직장에서 창의적인 아이디어를 떠올리기 좋은 날입니다.",
    content2: "아이디어가 떠오르면 바로 기록해두세요.",
    content3: "스케치북과 색연필",
    content4: "창의적인 분야의 이벤트에 참여하세요.",
  },
  {
    title: "노력에 대한 보상",
    content1: "오랜 기간 노력한 분야에서 성과를 얻을 수 있는 날입니다.",
    content2: "성과에 만족하며 소홀해지지 마세요.",
    content3: "성공적인 일에 사용한 당신의 물건",
    content4: "전문가와의 간담회, 엑스포 등에 참여하세요.",
  },
  {
    title: "사랑이 깊어지는 날",
    content1: "연애나 인간관계에서 사랑이 깊어지는 날입니다.",
    content2: "감정의 기복에 휩쓸리지 마세요.",
    content3: "로맨틱한 저녁 식사를 위한 캔들",
    content4: "로맨틱한 장소에서 데이트를 즐겨보세요.",
  },
  {
    title: "참을성을 가지세요",
    content1: "불필요한 갈등을 피하고 참을성을 가지는 것이 좋은 날입니다.",
    content2: "감정의 변화에 휩쓸리지 마세요.",
    content3: "차분함을 불러일으키는 찻잔",
    content4: "갈등 상황에서 상대방의 관점을 이해하려 노력하세요.",
  },
  {
    title: "긍정적인 에너지가 \n느껴지는 날",
    content1: "긍정적인 에너지가 넘치는 날입니다.",
    content2: "부정적인 생각을 피하세요.",
    content3: "활기찬 색상의 옷과 액세서리",
    content4: "자발적으로 도움을 주고받는 기회를 찾아보세요.",
  },
  {
    title: "전문가의 조언을 듣는 날",
    content1:
      "전문가의 조언이 학업이나 직장에서 큰 도움이 될 수 있는 날입니다.",
    content2: "자신의 능력을 과소평가하지 마세요.",
    content3: "멘토와 함께하는 커피 모임",
    content4: "세미나나 워크샵에 참석하여 전문가들을 만나보세요.",
  },
  {
    title: "자기 발전을 위한 시간",
    content1: "자기 발전과 학습에 좋은 날입니다.",
    content2: "과로를 피하세요.",
    content3: "새로운 지식을 얻을 수 있는 책",
    content4: "새로운 사람들과의 대화를 즐기며 배움을 나누어보세요.",
  },
  {
    title: "미뤄둔 일 처리의 시간",
    content1: "미뤄둔 일을 처리하는데 좋은 날입니다.",
    content2: "타인의 요구에 너무 신경쓰지 마세요.",
    content3: "작업 효율을 높여주는 플래너",
    content4: "꼼꼼하게 일을 처리하는 모습을 보여주세요.",
  },
  {
    title: "상사나 교수님의 관심",
    content1: "상사나 교수님의 특별한 관심을 받게 될 수 있는 날입니다.",
    content2: "너무 민감하게 반응하지 마세요.",
    content3: "노력의 결과물",
    content4: "성과를 타인에게 자랑하는 자리가 있다면 적극적으로 참석하세요.",
  },
  {
    title: "사랑에 대한 결정의 날",
    content1: "연애나 결혼에 관한 중요한 결정을 내려야 할 수도 있는 날입니다.",
    content2: "지나치게 고민하지 마세요.",
    content3: "로맨틱한 연애 영화나 소설",
    content4: "깊은 대화를 통해 서로의 솔직한 마음을 전달하세요.",
  },
  {
    title: "금전운이 빛나는 날",
    content1:
      "금전운이 빛나는 날입니다. 예상치 못한 수입이나 기회가 찾아올 수 있습니다.",
    content2: "사치를 부리지 마세요.",
    content3: "행운을 부르는 물건(네잎클로버, 돼지, 빨간 복주머니 등)",
    content4: "금융 관련 이벤트가 있다면 참여해 보세요.",
  },
  {
    title: "끼니를 함께하는 인연",
    content1: "식사를 함께하는 인연이 증가할 수 있는 날입니다.",
    content2: "너무 낯선 사람에게 무심코 접근하지 마세요.",
    content3: "맛있는 식사",
    content4: "기존 지인들과 함께 식사를 즐기는 자리를 만들어보세요.",
  },
  {
    title: "건강과 활력이 넘치는 날",
    content1:
      "건강과 활력이 넘치는 날입니다. 운동이나 건강 관리를 위한 노력이 성과로 이어질 것입니다.",
    content2: "과도한 운동은 피하세요.",
    content3: "건강을 기르는 책",
    content4: "헬스장이나 운동 동호회에 가입해보세요.",
  },
  {
    title: "사회적 활동이 활발한 날",
    content1:
      "사회적 활동이 활발한 날입니다. 동아리나 자원봉사 활동에 참여하면 좋은 인연을 만날 수 있습니다.",
    content2:
      "아무리 멋져보이는 사람이라도 지나치게 선망하는 태도를 보이지 마세요.",
    content3: "보라색",
    content4: "동아리나 단체 모임에 적극적으로 참여하세요.",
  },
  {
    title: "꾸준한 노력의 결실",
    content1:
      "꾸준한 노력이 결실을 맺을 수 있는 날입니다. 학업이나 프로젝트에 좋은 결과가 기대됩니다.",
    content2: "기대에 지나치게 매몰되지 마세요.",
    content3: "메달",
    content4: "동료들과 함께 성과를 함께 나누세요.",
  },
  {
    title: "순간의 영감을 따라가세요",
    content1:
      "갑작스러운 영감을 따라가는 것이 좋은 날입니다. 직감적인 선택이 긍정적인 결과로 이어질 수 있습니다.",
    content2: "현실성을 간과하지 마세요.",
    content3: "스케치북",
    content4: "예술적이거나 창조적인 분야의 행사에 참여하세요.",
  },
  {
    title: "감정을 솔직히 \n표현하는 날",
    content1:
      "감정을 솔직하게 표현하는 것이 중요한 날입니다. 진심으로 소통하면 문제를 해결하기가 더 쉬워집니다.",
    content2: "과도한 감정적인 폭발을 조심하세요.",
    content3: "솔직한 감정을 담은 편지",
    content4: "신뢰할 수 있는 친구나 가족과 솔직한 대화를 나누세요.",
  },
  {
    title: "능력을 인정받는 날",
    content1:
      "능력을 인정받고 칭찬을 받을 수 있는 날입니다. 자신의 노력이 주변에서 눈에 띄게 될 것입니다.",
    content2: "자만하지 마세요.",
    content3: "칭찬과 격려를 담은 카드",
    content4: "자신의 성과를 자랑스럽게 어필하세요.",
  },
  {
    title: "예기치 못한 도움이 오는 날",
    content1:
      "예기치 못한 도움이 찾아오는 날입니다. 뜻밖의 지원으로 어려움을 극복할 수 있습니다.",
    content2: "지나친 의존은 피하세요.",
    content3: "가볍고 소중한 선물",
    content4: "예상치 못한 사람들로부터 도움을 받으세요.",
  },
  {
    title: "불필요한 갈등을 피하세요",
    content1:
      "오늘은 불필요한 갈등을 피해야 하는 날입니다. 차분하고 이해심 있는 태도를 유지하세요.",
    content2: "감정적인 반응을 자제하세요.",
    content3: "갈등을 풀어주는 화해의 꽃",
    content4: "갈등 상황에서 상대방의 관점을 이해하려 노력하세요.",
  },
  {
    title: "자신의 강점을 강화하는 날",
    content1:
      "오늘은 자신의 강점을 더욱 강화하는 데 좋은 날입니다. 능력을 키워 나가는 데 집중하세요.",
    content2: "과도한 자신감은 주의하세요.",
    content3: "성장과 발전을 기록하는 일지",
    content4: "자신의 능력을 타인에게 자랑하지 마세요.",
  },
  {
    title: "협력과 팀워크의 중요성",
    content1:
      "오늘은 협력과 팀워크가 중요한 날입니다. 다른 사람들과의 협업이 성공의 열쇠가 될 것입니다.",
    content2: "혼자서 모든 것을 해결하려 하지 마세요.",
    content3: "함께 하고 싶은 사람들과의 사진",
    content4: "팀 프로젝트나 단체 활동에 적극적으로 참여하세요.",
  },
  {
    title: "멋진 연애 시기",
    content1:
      "오늘은 멋진 연애의 시기입니다. 연인과의 로맨틱한 시간이 기대되며 특별한 추억을 만들 수 있습니다.",
    content2: "감정의 기복에 휩쓸리지 마세요.",
    content3: "연인과 함께 기념할 액세서리",
    content4: "연인과의 특별한 데이트를 즐겨보세요.",
  },
  {
    title: "운이 한결 좋은 날",
    content1:
      "오늘은 운이 한결 좋은 날입니다. 학업, 직장, 연애 모두에서 긍정적인 결과를 얻을 수 있습니다.",
    content2: "오만함을 버리고 겸손하게 행동하세요.",
    content3: "행운의 부적",
    content4: "자신의 운을 믿고 기회를 잡으세요.",
  },
];

let currentIndex = 0;
const nextBtn = document.getElementById("nextBtn");
const signboard = document.querySelector(".instructionwrap");
const howTo = document.getElementById("howTo");
const coin = document.getElementById("coin");
const capsule1 = document.getElementById("capsule1");
const capsule2 = document.getElementById("capsule2");
const capsule3 = document.getElementById("capsule3");

function showFortune(index) {
  const fortuneText = document.getElementById("fortuneText");
  const resultView = document.getElementById("resultView");
  const headTitle = document.getElementById("headTitle");
  const headContent1 = document.getElementById("headContent1");
  const resultContent1 = document.getElementById("resultContent1");
  const resultContent2 = document.getElementById("resultContent2");
  const resultContent3 = document.getElementById("resultContent3");
  if (index >= fortuneTexts.length) {
    resultView.style.display = "block";
    nextBtn.style.display = "none";
    howTo.style.display = "none";
    const randomIndex = Math.floor(Math.random() * fortuneResults.length);
    const result = fortuneResults[randomIndex];
    headTitle.innerText = result.title;
    headContent1.innerText = result.content1;
    resultContent1.innerText = result.content2;
    resultContent2.innerText = result.content3;
    resultContent3.innerText = result.content4;
  } else {
    resultView.style.display = "none";
    fortuneText.innerText = fortuneTexts[index];

    // 5번, 6번, 7번 질문과 버튼 조건 추가
    if (index === 3) {
      nextBtn.innerText = "확인 완료!";
    } else if (index === 4) {
      nextBtn.innerText = "동전 넣기!";
      signboard.style.opacity = 0;
      coin.style.display = "block";
    } else if (index === 5) {
      nextBtn.style.display = "none";
      coin.style.opacity = 0;
      coin.style.top = "55%";
      setTimeout(() => {
        signboard.style.opacity = 1;
        fortuneText.innerText = fortuneTexts[index];
        nextBtn.innerText = "마음 속 질문 완료";
        nextBtn.style.display = "block";
      }, 2500);
    } else if (index === 6) {
      signboard.style.opacity = 0;
      nextBtn.style.display = "none";
      unboxing();
    } else {
      nextBtn.innerText = "다음";
    }
  }
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  showFortune(currentIndex);
});

// 페이지 로딩 시 초기 운세 표시
showFortune(currentIndex);

function unboxing() {
  play();
  capsule1.style.display = "block";
  setTimeout(() => {
    capsule1.style.display = "none";
    capsule2.style.display = "block";
    capsule3.style.display = "block";
  }, 700);
  setTimeout(() => {
    capsule2.style.display = "none";
    capsule3.style.opacity = 1;
  }, 1400);
  setTimeout(() => {
    play2();
  }, 3300);
  setTimeout(() => {
    currentIndex++;
    capsule3.style.display = "none";
    showFortune(currentIndex);
  }, 4000);
}

// sound
function play() {
  var audio = document.getElementById("capsuleSound");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
function play2() {
  var audio = document.getElementById("capsuleSound2");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
const main = document.querySelector("#main");
const container = document.querySelector(".container");
// const howTo = document.querySelector("#howTo");

function begin() {
  main.style.display = "none";
  container.style.display = "block";
  howTo.style.display = "block";
  // notAutoPlay();
}
