//현재 url 변수로 가져오기
var nowUrl = window.location.href;

function copyUrl() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard.writeText(nowUrl).then((res) => {
    alert("주소가 복사되었습니다. 원하는 곳에 붙여넣기 하세요.");
  });
}

function kakaoShare() {
  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "나의 영혼 강점 찾기",
      description:
        "비 오는 여름, 내 영혼의 강점은 무엇일까? 잔잔한 빗소리와 함께하는 영혼 컬러 찾기",
      imageUrl: "https://naete.cafe24.com/contents/2.summercolor/img/main.png",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    // itemContent: {
    //   profileText: "Kakao",
    //   profileImageUrl:
    //     "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
    //   titleImageUrl:
    //     "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
    //   titleImageText: "Cheese cake",
    //   titleImageCategory: "Cake",
    //   items: [
    //     {
    //       item: "Cake1",
    //       itemOp: "1000원",
    //     },
    //     {
    //       item: "Cake2",
    //       itemOp: "2000원",
    //     },
    //     {
    //       item: "Cake3",
    //       itemOp: "3000원",
    //     },
    //     {
    //       item: "Cake4",
    //       itemOp: "4000원",
    //     },
    //     {
    //       item: "Cake5",
    //       itemOp: "5000원",
    //     },
    //   ],
    //   sum: "총 결제금액",
    //   sumOp: "15000원",
    // },
    // social: {
    //   likeCount: 10,
    //   commentCount: 20,
    //   sharedCount: 30,
    // },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl:
            "https://naete.cafe24.com/contents/2.summercolor/summercolor.html",
          webUrl:
            "https://naete.cafe24.com/contents/2.summercolor/summercolor.html",
        },
      },
      // {
      //   title: "앱으로 이동",
      //   link: {
      //     mobileWebUrl: "https://developers.kakao.com",
      //     webUrl: "https://developers.kakao.com",
      //   },
      // },
    ],
  });
}

Kakao.Channel.createAddChannelButton({
  container: "#kakao-add-channel-button",
  channelPublicId: "_RpxehG", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
});

Kakao.Channel.addChannel({
  channelPublicId: "_RpxehG",
});
