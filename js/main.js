$(document).ready(function() {
	//TOP NAV
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
	$('.nav-logo').click(function() {
		verticalScroll.slideTo(0, 1000, true); //切换到第一个slide，速度为1秒
	});
	$('.mo-nav-logo').click(function() {
		verticalScroll.slideTo(0, 1000, true); //切换到第一个slide，速度为1秒
	});
	$('.mobile-navbtn').click(function() {
		var getNavActive = $('.topnav-mobile').hasClass('hidden');
		if(getNavActive === true) {
			$('.topnav-mobile').css('height', '100%');
			$('.mo-nav-logo').attr('src', 'img/subpage/logo-black.png');
			$('.topnav-mobile').removeClass('hidden');
			$('.topnav-mobile').addClass('show');
			$('.mobile-navbtn').css('color', 'black');
		} else {
			$('.topnav-mobile').css('height', '0%');
			$('.mo-nav-logo').attr('src', 'img/logo.png');
			$('.topnav-mobile').removeClass('show');
			$('.topnav-mobile').addClass('hidden');
			$('.mobile-navbtn').css('color', 'white');
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

	//Vertical scroll Slides
	var verticalScroll = new Swiper('#vertical-scroll', {
		slidesPerView: 'auto',
		direction: 'vertical',
		spaceBetween: 0,
		hashNavigation: true,
		mousewheel: true,
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		pagination: {
			el: '.swiper-pagination2',
			type : 'progressbar',
			clickable: true,
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},
			slideChangeTransitionStart: function() {

				$(".navlist .active").removeClass('active');
				$(".navlist li").eq(this.activeIndex).addClass('active');
				$(".mo-navlist .active").removeClass('active');
				$(".mo-navlist li").eq(this.activeIndex).addClass('active');
				var getActive = $('.daily-fine').hasClass('active');
				if(getActive === true) {
					$('.navlist a').css('color', 'black');
					$('.nav-logo').attr('src', 'img/subpage/logo-black.png');

					$('.mobile-navbtn').css('color', 'black');
					$('.mo-nav-logo').attr('src', 'img/subpage/logo-black.png');
				} else {
					$('.navlist a').css('color', 'white');
					$('.nav-logo').attr('src', 'img/logo.png');

					$('.mobile-navbtn').css('color', 'white');
					$('.mo-nav-logo').attr('src', 'img/logo.png');
				};
			},

		}
	});

	$(".navlist li").on('click', function(e) {
		e.preventDefault()
		$(".navlist .active").removeClass('active')
		$(this).addClass('active')
		verticalScroll.slideTo($(this).index())
	});
	$(".mo-navlist li").on('click', function(e) {
		e.preventDefault()
		$(".mo-navlist .active").removeClass('active')
		$(this).addClass('active')
		verticalScroll.slideTo($(this).index())
	});

	//Home-part Slider
	var homeSlides = new Swiper('#home-slides', {
		grabCursor : true,
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			}
		}
	});

	//Bags Slides
	var bagsOptions = new Swiper('#bags-options', {
		allowTouchMove: false,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},
			slideChangeTransitionStart: function() {

				$(".bags-option .active").removeClass('active');
				$(".bags-option li").eq(this.activeIndex).addClass('active');
			}
		}
	})
	$(".bags-option li").on('click', function(e) {
		e.preventDefault()
		$(".bags-option .active").removeClass('active')
		$(this).addClass('active')
		bagsOptions.slideTo($(this).index())
	})

	var bagsAllSlides = new Swiper('#bagsAll-slides', {
		grabCursor : true,
		slidesPerView: 3,
		centeredSlides: true,
		slideToClickedSlide: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination3',
			clickable: true,
		},
		breakpoints: {
			780: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			//当宽度小于等于640
			640: {
				slidesPerView: 1,
				centeredSlides: true,
			}
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},
		}
	})

	var bagsShoulderSlides = new Swiper('#bagsShoulder-slides', {
		grabCursor : true,
		slidesPerView: 3,
		centeredSlides: true,
		slideToClickedSlide: true,
		allowTouchMove: false,
		loop: true,
		pagination: {
			el: '.swiper-pagination4',
			clickable: true,
		},
		breakpoints: {

			780: {
				slidesPerView: 2,
				centeredSlides: false,
				allowTouchMove: true,
				loop: false,
			},
			//当宽度小于等于640
			640: {
				slidesPerView: 1,
				allowTouchMove: true,
			}
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},
		}
	})
	var bagsBackSlides = new Swiper('#bagsBack-slides', {
		grabCursor : true,
		slidesPerView: 3,
		centeredSlides: true,
		allowTouchMove: false,
		slideToClickedSlide: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination4',
			clickable: true,
		},
		breakpoints: {
			780: {
				slidesPerView: 2,
				centeredSlides: false,
				allowTouchMove: true,
				loop: false,
			},
			//当宽度小于等于640
			640: {
				slidesPerView: 1,
				allowTouchMove: true,
			}
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},
		}
	});
	var bagsHandSlides = new Swiper('#bagsHand-slides', {
		grabCursor : true,
		slidesPerView: 3,
		centeredSlides: true,
		allowTouchMove: false,
		slideToClickedSlide: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination4',
			clickable: true,
		},
		breakpoints: {
			780: {
				slidesPerView: 2,
				centeredSlides: false,
				allowTouchMove: true,
				loop: false,
			},
			//当宽度小于等于640
			640: {
				slidesPerView: 1,
				allowTouchMove: true,
			}
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},
		}
	});

	//SALES/NEWS Slide
	var salesNewsSlide = new Swiper('#salesNews-slide', {
		grabCursor : true,
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			}
		}
	});

});