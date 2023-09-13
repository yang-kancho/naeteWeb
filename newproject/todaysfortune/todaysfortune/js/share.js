var nowUrl = window.location.href;

function copyUrl() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard.writeText(nowUrl).then((res) => {
    alert("주소가 복사되었습니다. 원하는 곳에 붙여넣기 하세요.");
  });
}

function shareMessage() {
  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "오늘의 운세",
      description: "오늘 내 하루는 어떨까? 신통방통한 캡슐 운세 뽑기를 해보자!",
      imageUrl: "https://naete.cafe24.com/contents/todaysfortune/img/main.png",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl:
            "https://naete.cafe24.com/contents/todaysfortune/todaysfortune.html",
          webUrl:
            "https://naete.cafe24.com/contents/todaysfortune/todaysfortune.html",
        },
      },
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
