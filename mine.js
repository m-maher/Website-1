
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

