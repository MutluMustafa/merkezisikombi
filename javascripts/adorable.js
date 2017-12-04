/* Scroll to Top Button */

$(document).ready(function(){
  $('.otw-primary-menu').superfish({
    hoverClass:    'sfHover',
    delay:         500,
    speed:         'fast'
  });


  /********************************************************************************
   * jQuery.nextOrFirst()
   *
   * PURPOSE:  Works like next(), except gets the first item from siblings if there is no "next" sibling to get.
   ********************************************************************************/
  jQuery.fn.nextOrFirst = function(selector){
      var next = this.next(selector);
      return (next.length) ? next : this.prevAll(selector).last();
  }

  /********************************************************************************
   * jQuery.prevOrLast()
   * PURPOSE:
   * Works like prev(), except gets the last item from siblings if there is no "prev" sibling to get.
   ********************************************************************************/
  jQuery.fn.prevOrLast = function(selector){
      var prev = this.prev(selector);
      return (prev.length) ? prev : this.nextAll(selector).last();
  }

  // Responsive Navigation
  $(".otw-primary-menu").tinyNav({
    active: 'active'
  });

  // Animate the search input in header on large screens
  if ( $(document).width() > 767 ) {
    $(".page-title .search-input").width(0).hide();

    $(".page-title .search-submit").mouseenter(function() {
      var $searchWidth = $(".page-title .otw-five").width();
      $(this).removeClass("double-rounded").prev().show();
      $(this).prev().animate({
        width: $searchWidth
        }, 350, function() {
          // Animation complete.
        });
      }
    );
  }

  $(window).resize(function() {
    if ( $(document).width() < 768 ) {
      var $searchWidth = $(".page-title .otw-five").width();
      $(".page-title .search-input").width($searchWidth).show();
    } else {
      $(".page-title .search-input").width(0).hide().next().addClass("double-rounded");
    }
  });

  $(".tinynav").addClass("show-for-small");

  // Animate Box Shadow on some elements
  // Add the overlay. We don't need it in HTML so we create it here
  $('.animate-on-hover .image').append('<span class="shadow-overlay hide-for-small"></span><span class="link-overlay hide-for-small"></span>');
  $('.otw-portfolio-item-link').append('<span class="shadow-overlay hide-for-small"></span><span class="link-overlay hide-for-small"></span>');

  // jQuery UI Tabs
  $('.otw-sc-tabs').tabs();

  // jQuery UI Accordion
  $('.otw-sc-accordion').accordion({
    heightStyle: "content",
    collapsible: true
  });

  // Responsive tables
  $('.footable').footable({
      breakpoints: {
      phone: 480,
      tablet: 767
    }
  });

  // FAQ Toggle
  // Hide all DD innitialy
  $('.otw-sc-faq dl > dd').hide();
  //Add Spans
  $('.otw-sc-faq dl > dt').each(function(){
    $(this).addClass("open-faq").prepend("<span></span>");
  });
  //Toggle FAQ question on click.
  $('.otw-sc-faq dl > dt').click(function() {
    $(this).toggleClass('open-faq').next().slideToggle(350);
  });

  // Scroll to top link with animation
  $('.scroll-top a').click(function () {
    $('html, body').animate({ scrollTop: '0px' }, 700);
    return false;
  });

  // Content toggle
  // Toggle closed class and content box
  $('.toggle-trigger').click(function () {
    $(this).toggleClass('closed').next('.toggle-content').slideToggle(350);
  });
  // Innitial hide content of .closed toggles
  $('.toggle-trigger.closed').next('.toggle-content').hide();

  // Close message box button
  $(".otw-sc-message.closable-message").append("<div class=\"close-message\">x</div>").find(".close-message").click(function() {
    $(this).parent(".otw-sc-message").fadeOut("fast");
  });

	// Clone portfolio items to get a second collection for Quicksand plugin
	var $portfolioClone = $(".otw-portfolio").clone();

	// Attempt to call Quicksand on every click event handler
	$(".otw-portfolio-filter a").click(function(e){

		$(".otw-portfolio-filter li").removeClass("current");

		// Get the class attribute value of the clicked link
		var $filterClass = $(this).parent().attr("class");

		var $filteredPortfolio = '';

		if ( $filterClass == "all" ) {
			$filteredPortfolio = $portfolioClone.find("li");
		} else {
			$filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}

		// Call quicksand
		$(".otw-portfolio").quicksand( $filteredPortfolio, {
			duration: 500,
			easing: 'easeInOutQuad'
		});

		$(this).parent().addClass("current");

		// Prevent the browser jump to the link anchor
		e.preventDefault();
	});

	// Testimonials toggle
	$(".testimonials-prev").click(function() {
    $(".testimonials-slide.active").hide().toggleClass('active').prevOrLast().animate({"opacity": "toggle"}).toggleClass('active');
  });
	$(".testimonials-next").click(function() {
    $(".testimonials-slide.active").hide().toggleClass('active').nextOrFirst().animate({"opacity": "toggle"}).toggleClass('active');
  });

});