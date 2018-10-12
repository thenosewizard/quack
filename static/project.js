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

// Function to loop through the text
document.addEventListener("DOMContentLoaded", loop);
let i = 0;
function loop () {
    let text = ['Welcome to InvoSystems', 'InvoSystems Singapore'];
    let homePageText = document.getElementById('homeText');
    homePageText.innerHTML = text[i];

    if ( i < text.length-1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("loop()", 3000);
}

// function to animate loading of the page
$(document).ready(function () {
    $("#wholeHome").fadeIn(1500);
})