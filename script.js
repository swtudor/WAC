var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

var prev = function() {
    $('#slider ul').animate({
          left: + slideWidth
      }, 200, function () {
          $('#slider ul li:last-child').prependTo('#slider ul');
          $('#slider ul').css('left', '');
      });
      console.log("left clicked");
  };

var next = function() {
      $('#slider ul').animate({
          left: - slideWidth
      }, 200, function () {
          $('#slider ul li:first-child').appendTo('#slider ul');
          $('#slider ul').css('left', '');
      });
      console.log("right clicked");
  };

$(document).ready(function(){
  	$('#slider').css({ width: slideWidth, height: slideHeight });
  	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');

    $('#prev').on("click", function (){
          prev();
    });

    $('#next').on('click', function () {
          next();
      });
});
