var $window = $(window);
$window.scroll(function() {
    // jQuery to collapse the navbar on scroll
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Open modal when track is clicked
$('.track-box').click(function(e){
    var clickedTrack = e.target.className.split(" ")[1]; //get the clicked element class (eq. klarna)
    $('#' + clickedTrack + '-modal').modal('show');
});

var $logos = $('.junction-logo, .junction-text')
    .velocity({
        opacity: 0,
        translateY: '100px'
    }, 0);

var otherTexts = $('.junction-subtitle, .date, .main-apply, .slushhacks')
    .velocity({
        opacity: 0
    }, 0);

$(document).ready(function() {
    setTimeout(function() {
        $.Velocity.animate($logos, {
            opacity: 1,
            translateY: 0
        }, {
            duration: 750,
            easing: [0.175, 0.885, 0.32, 1.275]
        }).then(function() {
            otherTexts.velocity({
                opacity: 1
            }, {
                duration: 1000,
                easing: 'swing'
            });
        });
    }, 1000);
});
