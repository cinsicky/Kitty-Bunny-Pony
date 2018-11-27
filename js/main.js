$(document).ready(function() {
	//TOP NAV
	$(".navlist").hover(function() {
		$(".active a").addClass("mouseenter");
	}, function() {
		$(".mouseenter").removeClass("mouseenter")

	})
	$('.nav-logo').click(function() {
		verticalScroll.slideTo(0, 1000, true); //切换到第一个slide，速度为1秒
	})
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
				var getActive = $('.daily-fine').hasClass('active');
				if(getActive === true){
					$('.navlist a').css('color','#5677b7');
				} else{
					$('.navlist a').css('color','white');
				};
			},
			
			
		}
	});

	$(".navlist li").on('click', function(e) {
		e.preventDefault()
		$(".navlist .active").removeClass('active')
		$(this).addClass('active')
		verticalScroll.slideTo($(this).index())
	})

	//Home-part Slider
	var homeSlides = new Swiper('#home-slides', {
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
		slidesPerView: 3,
		centeredSlides: true,
		slideToClickedSlide: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination3',
			clickable: true,
		},
		breakpoints: {
			//当宽度小于等于640
			640: {
				slidesPerView: 1,
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
		slidesPerView: 3,
		centeredSlides: true,
		slideToClickedSlide: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination4',
			clickable: true,
		},
		breakpoints: {
			//当宽度小于等于640
			640: {
				slidesPerView: 1,
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
		slidesPerView: 3,
		centeredSlides: true,
		slideToClickedSlide: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination4',
			clickable: true,
		},
		breakpoints: {
			//当宽度小于等于640
			640: {
				slidesPerView: 1,
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
		slidesPerView: 3,
		centeredSlides: true,
		slideToClickedSlide: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination4',
			clickable: true,
		},
		breakpoints: {
			//当宽度小于等于640
			640: {
				slidesPerView: 1,
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