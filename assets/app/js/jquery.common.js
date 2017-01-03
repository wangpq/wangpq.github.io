$(function() {
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });

    $(".sort-bar .bd").on("click","a",function(){  
        var target=$(this).attr("href")
        $("body,html").animate({
            scrollTop: $(target).offset().top-70
        },250); 
    })


    $(".wp-opt-area").on("click","a",function(){
        var index=$(this).index();
        if(index==0) {
            $("body,html").animate({
                scrollTop: 0
            },250); 
        }else{
            $("body,html").animate({
                scrollTop: $("footer").offset().top+ $("footer").outerHeight()
            },250); 
        }
    })


    $(".wp-opt-area .wp-show-hide").on("click",function(){
        var self=$(this)
          , hide=self.data("hide");
        if(hide==="false" || !hide){
            hide=self.data("hide","true");
            $(".wp-opt-area a").fadeOut("fase");
            self.find("i").attr("title","展开").removeClass("glyphicon-arrow-right").addClass("glyphicon-arrow-left");

        }else{
            hide=self.data("hide","false");
            $(".wp-opt-area a").fadeIn("fase");
            self.find("i").attr("title","收起").removeClass("glyphicon-arrow-left").addClass("glyphicon-arrow-right");;  
        }
        
      
    })

});
    