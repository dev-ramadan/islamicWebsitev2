$(document).ready(function () {
  if (localStorage.getItem("thems") !== null) {
    $(".them").css('background-color', JSON.parse(localStorage.getItem("thems")));
    $("footer").css('background-color', JSON.parse(localStorage.getItem("thems")));
    $("#quranChannel").css('background-color', JSON.parse(localStorage.getItem("thems")));
    $("#sunaChannel").css('border-color', JSON.parse(localStorage.getItem("thems")));
  }
  const quranChannel = document.querySelector("#quranChannel");
  const sunaChannel = document.querySelector("#sunaChannel");
  const sunaLive = document.querySelector("#sunaLive");
  const qurqnLive = document.getElementById('quranLive');
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  const playLiveQutan = (channle) => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(`${channle}`);
      hls.attachMedia(qurqnLive);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
      });
    }
  };
  const playLiveSuna = (channle) => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(`${channle}`);
      hls.attachMedia(sunaLive);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
      });
    }
  };
  $(".box").css("display", 'flex')
  $("#nav").fadeIn(1000);
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $("#nav").fadeOut(1000);
    } else {
      $("#nav").fadeIn(1000);
    }
  });
  quranChannel.addEventListener('click', () => {
    sunaLive.src = " "
    playLiveQutan('https://win.holol.com/live/quran/playlist.m3u8');
    $("#sunaLive").hide(700);
    $('#quranLive').show(700);
  });
  sunaChannel.addEventListener('click', () => {
    qurqnLive.src = " "
    playLiveSuna('https://win.holol.com/live/sunnah/playlist.m3u8');
    $("#quranLive").hide(700);
    $("#sunaLive").show(700);
  });
  $(".spinner .loader").fadeOut(1000, function () {
    $(".spinner").slideUp(1000, function () {
      $("body").css("overflow", "auto")
    })
  });
  
  // them action
  $(".fa-gear").click(() => {
    let x = $(".colors").outerWidth();
    if ($(".box").css("left") === '0px') {
      $(".box").animate({ left: `-${x}` }, 1000)
    } else {
      $(".box").animate({ left: `0px` }, 1000)

    }
  });
  let spans = $(".colors span");
  for (let i = 0; i < spans.length; i++) {
    let dataColor = spans[i].getAttribute("data-color");
    spans[i].style.backgroundColor = dataColor
  };
  $(spans).click((e) => {
    let thems = $(e.target).css('background-color');
    $(".them").css('background-color', thems);
    $("footer").css('background-color', thems);
    $("#quranChannel").css('background-color', thems);
    $("#sunaChannel").css('border-color', thems);
    localStorage.setItem('thems', JSON.stringify(thems));
  })
});