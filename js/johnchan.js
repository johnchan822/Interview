$(document).ready(function() {
	

	
	$("#backtohome").click(function(event) {
		
		event.preventDefault();
		$("html,body").animate({

			scrollTop:550

		},1000);

	});


		$("#backskill").click(function(event) {
		
		event.preventDefault();
		$("html,body").animate({

			scrollTop:1315

		},1000);

	});



	$("#backtoexperince").click(function(event) {
		
		event.preventDefault();
		$("html,body").animate({

			scrollTop:2200

		},1000);

	});

	$("#backtoportfolio").click(function(event) {
		
		event.preventDefault();
		$("html,body").animate({

			scrollTop:3135

		},1000);

	});


	$("#backtoaboutme").click(function(event) {
		
		event.preventDefault();
		$("html,body").animate({

			scrollTop:6000

		},1000);

	});



	$("#backtomenu").click(function(event) {
		
		event.preventDefault();
		$("html,body").animate({

			scrollTop:0

		},1500);

	});




$(window).scroll(function(){
	if ($(this).scrollTop()>700){

		$(".menu").addClass('fixed');

	}   else{

			$(".menu").removeClass("fixed");


	}

});




});
