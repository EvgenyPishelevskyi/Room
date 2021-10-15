/* Бургер */

$('.burger').on('click', () => {
   $('.burger').toggleClass('active');
   $('.mobile nav').toggleClass('open');
   $('.mobile__nav').toggleClass('show');
	$('body').toggleClass('_lock')
});


/* Бургер */

 /* Фиксированная шапка */

 $(function(){
	$nav = $('.header__container');
	$nav.css('width', $nav.outerWidth());
	$window = $(window);
	$h = $nav.offset().top;
	$window.scroll(function(){
		if ($window.scrollTop() > $h){
			$nav.addClass('fixed');
		} else {

			$nav.removeClass('fixed');
		}
	});
});

/* Фиксированная шапкa*/


$(document).ready(function(){
	$(window).on("scroll",function(){
	  var wn = $(window).scrollTop();
		if(wn > 10){
		 $(".header__container").css("background","#706b6b");
		}
		else{
		 $(".header__container").css("background","inherit");
		 
		}
	 });
  });


$(document).ready(function(){
	$(window).on("scroll",function(){
	  var wn = $(window).scrollTop();
		if(wn > 10){
		 $(".header__bottom").css("padding","10px 0px");
		}
		else{
		 $(".header__bottom").css("padding","25px 0px");
		}
	 });
  });

/* Фиксированная шапкa*/



/* Slider1 */
	
	$('.slider-1').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
    	slidesToScroll:1,
		speed:200,
  		cssEase: 'linear',
    	variableWidth:true,
		touchMove:false,
		Infinity:false,
		centerMode:true,
		initialSlide:0,
		focusOnSelect: true,
		});

/* Slider1 */

/* Slider2 */

		$('.slider-2').slick({
			arrows:true,
			dots:false,
			slidesToShow:1,
			slidesToScroll:1,
			speed:200,
			cssEase: 'linear',
			variableWidth:true,
			touchMove:false,
			Infinity:false,
			centerMode:true,
			initialSlide:0,
			focusOnSelect: true,
			});

/* Slider2 */

/* Slider mobile */

	const init = {
		autoplay: true,
		cssEase: "linear",
		slidesToShow: 3,
		slidesToScroll: 3,

		responsive: [
					{
						 breakpoint: 479.98,
						 settings: {
							  slidesToShow: 2,
							  slidesToScroll: 2,
						 }
					}
			  ]
	 };
	 
	 $(() => {
		const win = $(window);
		const slider = $(".slider-brends");
	 
		win.on("load resize", () => {
		  if (win.width() < 670.98) {
			 slider.not(".slick-initialized").slick(init);
		  } else if (slider.hasClass("slick-initialized")) {
			 slider.slick("unslick");
		  }
		});
	 });
