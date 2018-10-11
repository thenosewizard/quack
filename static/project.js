// functions to toggle navbar 
$(document).ready(function () {
    $('#icon').on('click',function () {
        $('#navOptions').toggle();
    })
})

$(document).ready(function () {
    $('#cross').on('click',function () {
        $('#navOptions').toggle();
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