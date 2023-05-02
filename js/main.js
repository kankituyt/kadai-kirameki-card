// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');

  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});


// 発行
new Swiper('.swiper', {
  loop: true,
  loopAdditionalSlides: 1,
  spaceBetween: 23,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (n) {
      return '0' + n;
    },
    formatFractionTotal: function (n) {
      return '0' + n;
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      // slidesPerView: 2.32,
      spaceBetween: 44,
    },
  },
});

// その他サービス
$(function(){
	$('.others-accordion-title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});
