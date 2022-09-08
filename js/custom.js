$(document).ready(function(){


	var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
           loop:true,
           autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
  
   
  $('#s1').click(function(){
 $('#dt1').slideDown(1000);
$('#dt2').slideUp(1000);
$('#dt3').slideUp(1000);
$('#dt4').slideUp(1000);
$('#dt5').slideUp(1000);
$('#dt6').slideUp(1000);
});
  $('#s2').click(function(){
 $('#dt1').slideUp(1000);
$('#dt2').slideDown(1000);
$('#dt3').slideUp(1000);
$('#dt4').slideUp(1000);
$('#dt5').slideUp(1000);
$('#dt6').slideUp(1000);
});
  $('#s3').click(function(){
 $('#dt1').slideUp(1000);
$('#dt2').slideUp(1000);
$('#dt3').slideDown(1000);
$('#dt4').slideUp(1000);
$('#dt5').slideUp(1000);
$('#dt6').slideUp(1000);
});
  $('#s4').click(function(){
 $('#dt1').slideUp(1000);
$('#dt2').slideUp(1000);
$('#dt3').slideUp(1000);
$('#dt4').slideDown(1000);
$('#dt5').slideUp(1000);
$('#dt6').slideUp(1000);
});
  $('#s5').click(function(){
 $('#dt1').slideUp(1000);
$('#dt2').slideUp(1000);
$('#dt3').slideUp(1000);
$('#dt4').slideUp(1000);
$('#dt5').slideDown(1000);
$('#dt6').slideUp(1000);
});
  $('#s6').click(function(){
 $('#dt1').slideUp(1000);
$('#dt2').slideUp(1000);
$('#dt3').slideUp(1000);
$('#dt4').slideUp(1000);
$('#dt5').slideUp(1000);
$('#dt6').slideDown(1000);
});

 $("#b1").click(function(){
    $("#b1").addClass(" b1");
    $("#b2").removeClass("b1");
     $("#b3").removeClass("b1");
      $("#b4").removeClass("b1");
       $("#b5").removeClass("b1");
       $("#future").show();
       $("#current").hide();
       $("#faculty").hide();
       $("#almuni").hide();
       $("#donors").hide();
    
  });
  
  $("#b2").click(function(){
    $("#b1").removeClass(" b1");
    $("#b2").addClass("b1");
     $("#b3").removeClass("b1");
      $("#b4").removeClass("b1");
       $("#b5").removeClass("b1");
       $("#future").hide();
       $("#current").show();
       $("#faculty").hide();
       $("#almuni").hide();
       $("#donors").hide();
    
  });


  $("#b3").click(function(){
    $("#b1").removeClass(" b1");
    $("#b2").removeClass("b1");
     $("#b3").addClass("b1");
      $("#b4").removeClass("b1");
       $("#b5").removeClass("b1");
       $("#future").hide();
       $("#current").hide();
       $("#faculty").show();
       $("#almuni").hide();
       $("#donors").hide();
    
  });


  $("#b4").click(function(){
    $("#b1").removeClass(" b1");
    $("#b2").removeClass("b1");
     $("#b3").removeClass("b1");
      $("#b4").addClass("b1");
       $("#b5").removeClass("b1");
       $("#future").hide();
       $("#current").hide();
       $("#faculty").hide();
       $("#almuni").show();
       $("#donors").hide();
  });


  $("#b5").click(function(){
    $("#b1").removeClass(" b1");
    $("#b2").removeClass("b1");
     $("#b3").removeClass("b1");
      $("#b4").removeClass("b1");
       $("#b5").addClass("b1");
       $("#donors").show();
       $("#future").hide();
       $("#current").hide();
       $("#faculty").hide();
       $("#almuni").hide();
       
    
  });
  // $("#t1").mouseenter(function(){
  //  $("#t1").hide("#teach1");
  //  $("#t1").show("#t1");
  // });
  // $("#t1").mouseleave(function(){
  //  $("#t1").show();
  //  $("#teach1").hide();
  // });





});