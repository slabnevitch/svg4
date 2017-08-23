$(function() {

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	// alert('ширина экрана'+ screen.width);
	// alert('browser' + document.body.clientWidth);

	


  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu").stop(true, true).slideToggle();
    $('.header__main-mnu').toggleClass('header__main-mnu--open');
    return false;
  });

  var $testimItem = $('.testimonials__inner'),
  		$testimContentItem = $('.testimonials__content');
  	  

  	$testimItem.click(function(e) {
  		var id = $(this).attr('href'),
  			$triangle = $('.testimonials-content-col .testimonials__inner-triangle'),
  			$th = $(this),
        offsetLeft = $th.offset().left,
  			positionLeft = $th.position().left,
        difference = offsetLeft - positionLeft,
  			trOffsetTop = $triangle.offset().top;
  		    
  		$th.addClass('testimonials__inner--active')
  				.closest('.testimonials-col')
  				.siblings()
  				.find('.testimonials__inner')
  				.removeClass('testimonials__inner--active');
  		
  		$th.closest('.testimonials-col')
  				.find('.testimonials__inner-text')
  				.slideDown()
  				.addClass('testimonials__inner-text--active');
  		
  		$th.closest('.testimonials-col')
  				.siblings()
  				.find('.testimonials__inner-text')
  				.slideUp()
  				.removeClass('testimonials__inner-text--active');
  		
      $(id).slideDown()
          .stop(true, true)
          .siblings('.testimonials__content')
          .slideUp()

      // $(id).css('display', 'block')
      //     .siblings('.testimonials__content').css('display', 'none');
  		// $(id).css('display', 'block')
  		// 	.siblings().css('display', 'none');
      // console.log('offset'+$th.offset().left);
  		console.log(difference);
  		// $triangle.animate({left: offsetLeft - difference}, 1000);
  		$triangle.css({
  			// 'margin': 0,
  			'left': offsetLeft - difference,
        'transform': 'translateX(50%)'
      });
  		
      // $triangle.offset({top: $offsetTop,
  				// 			left: $offsetLeft});
  		return false;
  	});

  	$('.contacts__map-open').click(function(e) {
  		
  		var $map = $('.contacts__map'),
  			mapPos = $map.offset().top,
  			contactsPos = $('.contacts').offset().top;

  		$map.slideToggle(function() {
  			var contactsHeight = $('.contacts').height();
  			$('html, body').animate({scrollTop: mapPos + contactsHeight/2}, 600);
		});
  		return false;
  	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
var $tabs = $('.tabs__link');

	$tabs.on('click', function(e) {
		e.preventDefault();
		var $th = $(this),
			$href = $th.attr('href'),
			$parent = $th.parent();
		$parent.addClass('tabs__item--active')
				.siblings()
				.removeClass('tabs__item--active');
						
		$($href).removeClass('hidden')
				.siblings()
				.addClass('hidden');
	});