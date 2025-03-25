$(document).ready(function () {
  if (localStorage.getItem("thems") !== null) {
    $(".them").css('background-color', JSON.parse(localStorage.getItem("thems")));
    $("footer").css('background-color', JSON.parse(localStorage.getItem("thems")));
    $("button").css('border-color', JSON.parse(localStorage.getItem("thems")));
    $("button").css('background-color', JSON.parse(localStorage.getItem("thems")));
  }
  $("#nav").fadeIn(1000);
  $(window).scroll(function () {
    if (window.scrollY > 500) {
      $("#nav").fadeOut(1000);
    } else {
      $("#nav").fadeIn(1000);

    }
  })
  const radioAhmed = document.querySelector("#radioAhmed");
  const radioAlzain = document.querySelector("#radioAlzain");
  const radioEgypt = document.querySelector("#egypt");

  const radioLive = (radio) => {
    const radioEle = document.getElementById('radioLive');
    radioEle.src = `${radio}`
    radioEle.type = 'audio/ogg'
    radioEle.play()

  };
  radioAhmed.addEventListener('click', () => radioLive('https://Qurango.net/radio/ahmad_khader_altarabulsi'));
  radioAlzain.addEventListener('click', () => radioLive('https://Qurango.net/radio/alzain_mohammad_ahmad'));
  radioEgypt.addEventListener('click', () => radioLive('https://n0f.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABlWb5AUkATe_8iI3oVMSaAw'));

  // them action
  $(".box").css("display", 'flex')
  $(".fa-gear").click(() => {
    let x = $(".colors").outerWidth();
    console.log(x)
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
    $("button").css('border-color', thems);
    $("button").css('background-color', thems);
    $("button").css('color', 'white');


    localStorage.setItem('thems', JSON.stringify(thems))
  })
});