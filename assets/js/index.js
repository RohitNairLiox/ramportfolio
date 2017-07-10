$('.carousel').carousel({
    interval: 3000
});
function showPage() {
  document.getElementById("preLoad").style.display = "none";
  document.getElementById("postLoad").style.display = "block";
}
 

window.onload = function () {
  showPage();
  var followLinez_Visible = $("#followLine1").css("display");
  var scriptAppend = document.createElement('script');
    scriptAppend.type='text/javascript';
  if(followLinez_Visible == "block") {
    scriptAppend.src="assets/js/ram-ui.js";
  }
  else {
    scriptAppend.src="assets/js/ram-alt-ui.js";
  }
  $("body").append(scriptAppend);

}
