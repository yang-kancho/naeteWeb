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
      title: "꽃 유형 테스트",
      description:
        "나는 연애할 때 어떤 스타일일까? 연애 스타일로 알아보는 꽃 유형 테스트",
      imageUrl: "https://naete.cafe24.com/contents/flower/img/main.png",
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
          mobileWebUrl: "https://naete.cafe24.com/contents/flower/flower.html",
          webUrl: "https://naete.cafe24.com/contents/flower/flower.html",
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
