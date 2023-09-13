/*
mouse,0 
cow, 1
tiger, 2 
rabbit, 3
dragon, 4
snake, 5
horse, 6 
sheep, 7 
8monkey, 8
chick, 9 
dog, 10
pig, 11
*/
const qnaList = [
  {
    q: "이성과 처음 만났을 때 나는",
    a: [
      {
        answer: "a. 주로 말을 하면서 분위기를 주도한다.",
        type: [0, 1, 2, 3, 4, 5, 6, 7],
      },
      {
        answer: "b. 상대방의 말을 듣는다.",
        type: [8, 9, 10, 11, 12, 13, 14, 15],
      },
    ],
  },
  {
    q: "애인이 회사에서 </br> 다툼이 있었다고 하면 나는",
    a: [
      {
        answer: "a. 정말? 많이 힘들겠다.",
        type: [0, 1, 4, 5, 8, 9, 12, 13],
      },
      {
        answer: "b. 그건 너도 잘못이 없다고 하긴 힘든 것 같은데",
        type: [2, 3, 6, 7, 10, 11, 14, 15],
      },
    ],
  },
  {
    q: "연인과 노래를 듣는 중의 나는",
    a: [
      {
        answer: "a. 멜로디에 집중한다.",
        type: [0, 1, 2, 3, 8, 9, 10, 11],
      },
      {
        answer: "b. 노래 가사에 집중한다.",
        type: [4, 5, 6, 7, 12, 13, 14, 15],
      },
    ],
  },
  {
    q: "데이트를 앞둔 나는",
    a: [
      {
        answer: "a. 일정과 장소를 디테일하게 계획한다.",
        type: [1, 3, 5, 7, 9, 11, 13, 15],
      },
      {
        answer: "b. 이런 저런 것들 중에 내일의 기분에 따라 정하자!",
        type: [0, 2, 4, 6, 8, 10, 12, 14],
      },
    ],
  },
  {
    q: "친구 커플과</br>더블 데이트를 하게 된 나는 ",
    a: [
      {
        answer: "a. 공통된 관심사를 위주로 금방 친해지려고 노력한다.",
        type: [0, 1, 2, 3, 4, 5, 6, 7],
      },
      {
        answer: "b. 어색함을 견디기 힘들다.",
        type: [8, 9, 10, 11, 12, 13, 14, 15],
      },
    ],
  },

  {
    q: "연인이</br>다툴 때 나는",
    a: [
      {
        answer: "a. 문제 해결에 집중한다.",
        type: [2, 3, 6, 7, 10, 11, 14, 15],
      },
      {
        answer: "b. 연인의 감정을 공감해 준다.",
        type: [0, 1, 4, 5, 8, 9, 12, 13],
      },
    ],
  },
  {
    q: "나는 연인의 기념일을",
    a: [
      {
        answer: "a. 일일히 다 기억하기 어려워 하는 편이다. ",
        type: [0, 1, 2, 3, 8, 9, 10, 11],
      },
      {
        answer: "b. 꼼꼼하게 챙긴다.",
        type: [4, 5, 6, 7, 12, 13, 14, 15],
      },
    ],
  },
  {
    q: "연인에게 감정표현 할 때 나는",
    a: [
      {
        answer: "a. 가끔 무뚝뚝하다는 말을 듣는다.",
        type: [2, 3, 6, 7, 10, 11, 14, 15],
      },
      {
        answer: "b. 적극적으로 자주 내 마음을 표현한다. ",
        type: [0, 1, 4, 5, 8, 9, 12, 13],
      },
    ],
  },
  {
    q: "함께 여행을 가기로 하면 나는",
    a: [
      {
        answer: "a. 필요한 물건을 미리 정리하고 구매한다.",
        type: [1, 3, 5, 7, 9, 11, 13, 15],
      },
      {
        answer: "b. 여행 가기 전날 싸면 되겠지... 미룬다.",
        type: [0, 2, 4, 6, 8, 10, 12, 14],
      },
    ],
  },
  {
    q: "연인의 도시락을 준비하는 나는",
    a: [
      {
        answer: "a. 레시피를 보지만 어느정도는 눈대중으로 요리한다.",
        type: [0, 1, 2, 3, 8, 9, 10, 11],
      },
      {
        answer: "b. 레시피대로 정량을 맞춘다.",
        type: [4, 5, 6, 7, 12, 13, 14, 15],
      },
    ],
  },
  {
    q: "나에게 더 하고싶은 데이트는",
    a: [
      {
        answer: "a. 일상에서 느끼는 편안함",
        type: [1, 3, 5, 7, 9, 11, 13, 15],
      },
      {
        answer: "b. 이전에 해보지 않은 새로운 활동",
        type: [0, 2, 4, 6, 8, 10, 12, 14],
      },
    ],
  },
  {
    q: "연인과 데이트가 없을 때 나는",
    a: [
      {
        answer: "a.'밖에서 친구나 만날까?'",
        type: [0, 1, 2, 3, 4, 5, 6, 7],
      },
      {
        answer: "b.'집에서 편안하게 쉬어야 겠다.'",
        type: [8, 9, 10, 11, 12, 13, 14, 15],
      },
    ],
  },
];

const infoList = [
  {
    name: "카네이션",
    desc: "",
  },
  {
    name: "해바라기",
    desc: "",
  },
  {
    name: "백합",
    desc: "",
  },
  {
    name: "프리지아",
    desc: "",
  },
  {
    name: "피오니",
    desc: "",
  },
  {
    name: "히아신스",
    desc: "",
  },
  {
    name: "블랙 아이리스",
    desc: "",
  },
  {
    name: "제라니움",
    desc: "",
  },
  {
    name: "튤립",
    desc: "",
  },
  {
    name: "아이리스",
    desc: "",
  },
  {
    name: "수국",
    desc: "",
  },
  {
    name: "다육이",
    desc: "",
  },
  {
    name: "라일락",
    desc: "",
  },
  {
    name: "무궁화",
    desc: "",
  },
  {
    name: "라벤더",
    desc: "",
  },
  {
    name: "철쭉",
    desc: "",
  },
];
