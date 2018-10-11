// functions to toggle navbar 
$(document).ready(function () {
    $('#icon').on('click',function () {
       // $('#navOptions').toggle();
       $('#navOptions').animate({
           width: '+=200px'
       });
    })
})

$(document).ready(function () {
    $('#cross').on('click',function () {
       $('#navOptions').animate({
         width: '0px'
        })
    })
})

// function to scroll to the top
$(document).ready( function () {
    $('#scrollTop').on('click', function () {
        $('html, body').animate({               
            scrollTop: $("#navigation").offset().top  
        },500);
    });
})