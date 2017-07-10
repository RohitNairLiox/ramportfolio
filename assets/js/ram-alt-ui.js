$window = $(window);
var Logo = $("#site_logo");
var navbarTop = $("#navbar");

$window.scroll(function() {
  var currentScroll = $window.scrollTop();
  var Logo_Class = Logo.hasClass("logo_img_nrml");
  if (currentScroll > 120) {
  	if (Logo_Class) {
  		Logo.removeClass("logo_img_nrml");
	  	Logo.addClass("logo_img_sml");
  	}
  }
  else {
  	if (!Logo_Class) {
	  	Logo.removeClass("logo_img_sml");
	  	Logo.addClass("logo_img_nrml");	
  	}
  }
});

$(".navbar_elements").on("click", function () {
    if (navbarTop.hasClass("in")) {
      navbarTop.removeClass("in")
    }
});



$(".collapse").on('shown.bs.collapse', function(){
    $("#timelineViewBTN").html("Hide It!");
});
$(".collapse").on('hidden.bs.collapse', function(){
    $("#timelineViewBTN").html("View my boring timeline!");
});


