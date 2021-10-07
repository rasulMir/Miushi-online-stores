

 $(document).ready(function(){
	$('.head-top__click-menu').click(function(event) {
		$('.head-bottom__nav').toggleClass("menu__active");
		$('.head-bottom__nav-exit').toggleClass("click-menu__exit");
		$('body').toggleClass("block");
		$($(this)).toggleClass("click-menu__active");
	});
	$('.head-bottom__nav-exit').click(function(event) {
		$('.head-top__click-menu').removeClass("click-menu__active");
	});
 });

 $(document).ready(function(){
	$('.promo-slider').slick({
		dots: true,
		arrows: true,
		prevArrow: '<i class="icon-arrow-left slick-prev"></i>',
		nextArrow: '<i class="icon-arrow-right slick-next"></i>',
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
 });

 $(function() {
 
	(function quantityProducts() {
	  var $quantityArrowMinus = $(".menu-slider__piece-minus");
	  var $quantityArrowPlus = $(".menu-slider__piece-plus");
	  var $quantityNum = $(".menu-slider__piece-num");
  
	  $quantityArrowMinus.click(quantityMinus);
	  $quantityArrowPlus.click(quantityPlus);
  
	  function quantityMinus() {
		 if ($quantityNum.attr() > 1) {
			$quantityNum.attr(+$quantityNum.val() - 1);
		 }
	  }
  
	  function quantityPlus() {
		 $quantityNum.attr(+$quantityNum.val() + 1);
	  }
	})();
  
 });

 $(document).ready(function(){
	$('.menu-slider').slick({
		arrows: false,
		dots: false,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		mobileFirst: true,
		prevArrow: '<i class="icon-arrow-left"></i>',
		nextArrow: '<i class="icon-arrow-right"></i>',
		responsive: [
			{
				breakpoint: 499.99,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: false,
				}
			},
			{
				breakpoint: 767.99,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false,
					dots: true,
					arrows: true,
					autoplay: false,
				}
			},
			{
				breakpoint: 1023.99,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					centerMode: false,
					dots: true,
					arrows: true,
				}
			}
		]
	});
 });

 $(document).ready(function(){
	$('.new-stocks__item').click(function(event) {
		if($('.new-stocks__item').hasClass('new-stocks__item-active')) {
			$('.new-stocks__item').removeClass('new-stocks__item-active');
		}
		$($(this)).addClass("new-stocks__item-active");
	});
 });

 $(document).ready(function(){
	$('.reasons-wrap__btn').click(function(event) {
		$(".reasons-wrap__card").addClass("card-show");
		$($(this)).hide();
	});
 });

 $(document).ready(function(){
	$('.about-wrap__btn').click(function(event) {
		$(".about-wrap__txt").addClass("about__card-show");
		$($(this)).hide();
	});
 });

 $(document).ready(function(){
	$('.footer-top__column-lbl').click(function(event) {
		if($('.footer-top').hasClass('one')) {
			$('.footer-top__column-lbl').not($(this)).children('.footer-top__column-lbl-arrow').removeClass('arrow-rotate');
			$('.footer-top__column-item').not($(this).next()).slideUp(300);
		}
		$($(this)).next().hide().slideToggle(300);
		$($(this)).children('.footer-top__column-lbl-arrow').toggleClass('arrow-rotate');
	});
 });


