$window = $(window);
var sectionOne = $('#section1');
var sectionTwo = $('#section2');
var sectionThree = $('#section3');
var sectionFour = $('#contactContainer');
var navbarElement1 = $("#navbarElement1");
var navbarElement2 = $("#navbarElement2");
var navbarElement3 = $("#navbarElement3");
var navbarElement4 = $("#navbarElement4");
var distance1 = Math.round(sectionOne.offset().top);
var distance2 = Math.round(sectionTwo.offset().top);
var distance2_Init = distance2;
var distance3 = Math.round(sectionThree.offset().top);
var distance4 = Math.round(sectionFour.offset().top);
var distance1_bottom = Math.round(distance1 + sectionOne.innerHeight());
var distance2_bottom = Math.round(distance2 + sectionTwo.innerHeight());
var distance3_bottom = Math.round(distance3 + sectionThree.innerHeight());  
var distance4_bottom = Math.round(distance4 + sectionFour.innerHeight());



$window.scroll(function() {
  var currentScroll = $window.scrollTop()+100;

  var navbar1Status = navbarElement1.hasClass("currentLink");
  var navbar2Status = navbarElement2.hasClass("currentLink");
  var navbar3Status = navbarElement3.hasClass("currentLink");
  var navbar4Status = navbarElement4.hasClass("currentLink");

if (currentScroll  >= distance1 && currentScroll  <= distance1_bottom) {

		  if (!navbar1Status) {
		    navbarElement1.addClass("currentLink");
		  }
		  
		  if (navbar2Status || navbar3Status || navbar4Status) {
		    if (navbar2Status) {
		      navbarElement2.removeClass("currentLink");
		    }
		    else if (navbar3Status) {
		      navbarElement3.removeClass("currentLink");
		    }
		    else {
		      navbarElement4.removeClass("currentLink");
		    }
		  }

}

else if(currentScroll  >= distance2 && currentScroll  <= distance2_bottom) {

	  if (!navbar2Status) {
	    navbarElement2.addClass("currentLink");
	  }
	  
	  if (navbar1Status || navbar3Status || navbar4Status) {
	    if (navbar1Status) {
	      navbarElement1.removeClass("currentLink");
	    }
	    else if (navbar3Status) {
	      navbarElement3.removeClass("currentLink");
	    }
	    else {
	      navbarElement4.removeClass("currentLink");
	    }
	 }
}
else if(currentScroll  >= distance3 && currentScroll  <= distance3_bottom) {

  if (!navbar3Status) {
    navbarElement3.addClass("currentLink");
  }

  if (navbar1Status || navbar2Status || navbar4Status) {
    if (navbar2Status) {
      navbarElement2.removeClass("currentLink");
    }
    else if (navbar1Status) {
      navbarElement1.removeClass("currentLink");
    }
    else {
      navbarElement4.removeClass("currentLink");
    }
  }
}
else if(currentScroll  >= distance4 && currentScroll  <= distance4_bottom) {

  if (!navbar4Status) {
    navbarElement4.addClass("currentLink");
  }

  if (navbar2Status || navbar3Status || navbar1Status) {
    if (navbar2Status) {
      navbarElement2.removeClass("currentLink");
    }
    else if (navbar3Status) {
      navbarElement3.removeClass("currentLink");
    }
    else {
      navbarElement1.removeClass("currentLink");
    }
  }

}
else{
  if (navbar1Status || navbar2Status || navbar3Status || navbar4Status) {
    if (navbar1Status) {
      navbarElement1.removeClass("currentLink");
    }
    else if (navbar2Status) {
      navbarElement2.removeClass("currentLink");
    }
    else if (navbar3Status) {
      navbarElement3.removeClass("currentLink");
    }
    else {
      navbarElement4.removeClass("currentLink");
    }
  }
}
});

function updateSections () {
  distance2_bottom = Math.round(distance2 + sectionTwo.innerHeight());

  distance3 = Math.round(sectionThree.offset().top);
  distance3_bottom = Math.round(distance3 + sectionThree.innerHeight());

  distance4 = Math.round(sectionFour.offset().top);
  distance4_bottom = Math.round(distance4 + sectionFour.innerHeight());
}

$(".collapse").on('shown.bs.collapse', function(){
    updateSections();
    $("#timelineViewBTN").html("Hide It!");
});
$(".collapse").on('hidden.bs.collapse', function(){
    updateSections();
    $("#timelineViewBTN").html("View my boring timeline!");
});


