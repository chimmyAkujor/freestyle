function main(){
    $(".menu-logo").click(function(){
        $(".menu-right").toggleClass("menu-right-active")
    });
    
    $(".link2").click(function(){
        $(".tab2").show();
        $(".tab1,.tab3,.tab4").hide()
    });
    $(".link1").click(function(){
        $(".tab1").show();
        $(".tab2,.tab3,.tab4").hide()
    });
    $(".link3").click(function(){
        $(".tab3").show();
        $(".tab1,.tab2,.tab4").hide()
    });
    $(".link4").click(function(){
        $(".tab4").show();
        $(".tab1,.tab3,.tab2").hide()
    });
    $(".crater").click(function(){
        $(".pane-img").show();
        $(".experiment-vid").hide()
    });
     $(".experiment").click(function(){
        $(".experiment-vid").show();
        $(".pane-img").hide()
    });
  
  $(".tab1").accordion();
    
    
    
}










$(document).ready(main);


