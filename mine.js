
//Navbar

$(window).scroll(function(){
    
    var windowScroll = $(window).scrollTop();

    if(windowScroll > 20){
        $(".navbar").css("backgroundColor",'rgba(0,0,0,0.7)').
        css('border','none');
        $("#btnUp").css("display","block");            
    }
    else{
        $(".navbar").css("backgroundColor","transparent").
        css('border-bottom','solid 1px #868e96');        
        $("#btnUp").css("display","none");            
    }
})


$(".navbar-toggler").click(function(){
    $(".navbar").css('backgroundColor', 'rgba(0,0,0,0.7)');
})


//Counter

$(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > 800) {
                $(window).off("scroll", startCounter);
            $('.Count').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

//Team slider

$(document).ready(function(){
    $('.tests').owlCarousel({
        responsiveClass:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            770:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 
})

//Brands slider

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({ 
        loop:true,      
        responsiveClass:true,
        autoHeight:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        margin:30,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6,
                loop:true
            }
        }
    })
})

