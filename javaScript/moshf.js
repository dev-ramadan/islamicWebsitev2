$(document).ready(function () {
  if (localStorage.getItem("thems") !== null) {
    $(".them").css('background-color', JSON.parse(localStorage.getItem("thems")));
    $("footer").css('background-color', JSON.parse(localStorage.getItem("thems")));
  }
  $(".box").css("display", 'flex')
  $("#nav").fadeIn(1000);
  $(window).scroll(function () {
    if (window.scrollY > 500) {
      $("#nav").fadeOut(1000);
    } else {
      $("#nav").fadeIn(1000);
    }
  })
  const pages = Array.from({ length: 604 }, (_, i) =>
    `https://www.mp3quran.net/api/quran_pages_svg/${String(i + 1).padStart(3, '0')}.svg`
  );

  let currentPage = 0;
  const imgLeft = document.getElementById("quranPageLeft");
  const imgRight = document.getElementById("quranPageRight");
  const effect = document.getElementById("effect");
  // تحديث الصفحات المعروضة
  function updatePages() {
    imgLeft.src = pages[currentPage];
    imgRight.src = pages[currentPage + 1];
  }
  // زر التالي
  imgRight.addEventListener("click", () => {
    if (currentPage < pages.length - 2) {
      currentPage += 2;
      effect.src = 'dist/soundEffect.mp3';
      updatePages();
    }
  });

  // زر السابق
  imgLeft.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage -= 1;
      effect.src = 'dist/soundEffect.mp3';
      updatePages();
    }
  });

  // تحميل الصفحات الأولى عند بدء التشغيل
  updatePages();

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
    localStorage.setItem('thems', JSON.stringify(thems))
  })
});