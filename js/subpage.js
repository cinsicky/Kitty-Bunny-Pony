$(document).ready(function() {
	//NAV
	$(".navlist").hover(function() {
		$(".active a").addClass("mouseenter");
	}, function() {
		$(".mouseenter").removeClass("mouseenter")

	});
	$(".mo-navlist").hover(function() {
		$(".active a").addClass("mouseenter");
	}, function() {
		$(".mouseenter").removeClass("mouseenter")

	});
	$('.mobile-navbtn').click(function() {
		var getNavActive = $('.topnav-mobile').hasClass('hidden');
		if(getNavActive === true) {
			$('.topnav-mobile').css('height', '1000%');
			$('.topnav-mobile').removeClass('hidden');
			$('.topnav-mobile').addClass('show');
		} else {
			$('.topnav-mobile').css('height', '0%');
			$('.topnav-mobile').removeClass('show');
			$('.topnav-mobile').addClass('hidden');
		};
	});
	$('.topnav-mobile').click(function() {
		var getNavActive = $('.topnav-mobile').hasClass('show');
		if(getNavActive === true) {
			$('.topnav-mobile').css('height', '0%');
			$('.topnav-mobile').removeClass('show');
			$('.topnav-mobile').addClass('hidden');
		};
	});
	//CoverSlide
	var CoverSlide = new Swiper('.cover-slide', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		effect: 'flip',
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},

			slideChangeTransitionEnd: function() {
				swiperAnimate(this);
				//每个slide切换结束时也运行当前slide动画
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});

	//CoverSlide
	var DetailSlide = new Swiper('.detail-slide', {
		effect: 'fade',

		allowTouchMove: false,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},
		},
		controller: {
			control: CoverSlide,
		}
	});
	CoverSlide.controller.control = DetailSlide;

	var verticalScroll = new Swiper('.vertical-detail', {
		slidesPerView: 'auto',
		direction: 'vertical',
		spaceBetween: 0,
		allowTouchMove: false,
		keyboard: {
			enabled: false,
			onlyInViewport: true,
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},

		},
		breakpoints: {
			//当宽度小于等于640
			530: {
				allowTouchMove: true,
				keyboard: {
					enabled: true,
				},
			}
		},
	});

});