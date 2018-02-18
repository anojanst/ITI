// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('faculty7', function (page) {
	myApp.closePanel();
});
myApp.onPageInit('about', function (page) {
	myApp.closePanel();
});
myApp.onPageInit('index', function (page) {
	myApp.closePanel();
});
myApp.onPageInit('downloads', function (page) {
	myApp.closePanel();
		
	
});
myApp.onPageInit('courses7', function (page) {
	myApp.closePanel();
});
myApp.onPageInit('contact7', function (page) {
	myApp.closePanel();

$(".whatsup").on('click', function(){
	
     window.location = "https://api.whatsapp.com/send?phone=67570777099","_blank";    
});
	
});
myApp.onPageInit('camera7', function (page) {
	
		myApp.closePanel();

	
		var clickcount='0';
	

	
	$('#add_video').on("click",function(){
		clickcount++;
		$('#video'+clickcount).fadeIn(500);
		   $('#t_video').val(clickcount);
		  if(clickcount=='0'){
			$('.hide1').fadeOut(500);
			}else{
				$('.hide1').fadeIn(500);
			}
			if(clickcount=='10'){
			$('#add_video').fadeOut(500);
			}else{
				$('#add_video').fadeIn(500);
			}
			if(clickcount>='1'){
			$('#add_video').html('Add more Certificate');
			}else{
				$('#add_video').html("Add Certificate with this Form");
			}
		
	});
		$('.hide1').on("click",function(){
		
		$('#video'+clickcount).fadeOut(500);
      
		clickcount=clickcount-1;
		 $('#t_video').val(clickcount);
	if(clickcount=='0'){
			
			$('.hide1').fadeOut(500);
			}else{
				$('.hide1').fadeIn(500);
			}
		
			if(clickcount=='10'){
			$('#add_video').fadeOut(500);
			}else{
				$('#add_video').fadeIn(500);
			}
			if(clickcount>='1'){
			$('#add_video').html('Add more Certificate');
			}else{
				$('#add_video').html("Add Certificate with this Form");
			}
	});
	
	


/*
		$( "#uploadFormasd" ).click(function() {
			var inputs = $(this).parent().find('input[value=""]');
    if (!inputs.length) {
        //alert('Some field are emty');
    }else{

 
	}
});
*/
	$("form#uploadFormasd").submit(function(){
     $(".loader").show();
     var formData = new FormData(this);
	 //http://thekoders.com/ITI/insert_data.php
    
    $.ajax({
        url: 'http://thekoders.com/ITI/insert_data.php',
        type: 'POST',
        data: formData,
        async: true,
        success: function (data) {
	
		  setTimeout( function() 
					  {
						$(".loader").hide();
						$(".success").show();
					  }, 2000);
         setTimeout(function() 
				  {
				   
					$(".success").hide();
				  }, 4000);
							
        },
		
        cache: false,
        contentType: false,
        processData: false
    });

    return false;
	
});
    // Do something here for "about" page

})


function openurltest(openurl){
		var openurl1=openurl;
	navigator.app.loadUrl(openurl1, {openExternal : true})
}
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
})