/** 
 * 页面中上下跳转 
 * @method WpOptArea 
 * @param {String} dom 函数对象
 * @param {Object} option 参数对象
 * @return {Null} 无返回值
 */ 
function WpOptArea(dom,option){
    this.element=$(dom);
    this.options=option;
}
WpOptArea.prototype={
    init : function(){
        this.initUi();
        this.initEvents();
    },
    initUi : function(){
        var option=this.options;
        this.oTop=this.element.find(option.oTop);
        this.oDowm=this.element.find(option.oDowm);
    },
    initEvents : function(){
        var self=this;
        $(window).scroll(function(){
            if( $(window).scrollTop()<20){
                self.oTop.hide();
            }else{
                self.oTop.show();
            }
            if( $(window).height()+$(window).scrollTop()> document.body.scrollHeight-20){
                self.oDowm.hide();
            }else{
                self.oDowm.show();
            }
        })

        self.element.on("click","a",function(){
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

        self.element.find(".wp-show-hide").on("click",function(){
            var _self=$(this)
                , hide=_self.data("hide");
            if(hide==="false" || !hide){
                hide=_self.data("hide","true");
                self.element.find("a").fadeOut("fase");
                _self.find("i").attr("title","展开").removeClass("glyphicon-arrow-right").addClass("glyphicon-arrow-left");

            }else{
                hide=_self.data("hide","false");
                self.element.find("a").fadeIn("fase");
                _self.find("i").attr("title","收起").removeClass("glyphicon-arrow-left").addClass("glyphicon-arrow-right");;  
            }
        })
    }  
}


/** 
 * 跳转到链接指定位置 
 * @method WpAnimate 
 * @param {Object} option 参数对象
 * @return {Null} 无返回值
 */ 
function WpAnimate(options){
    $(options.dom).on("click","a",function(){  
        var target=$(this).attr("href")
        $("body,html").animate({
            scrollTop: $(target).offset().top-options.num
        },250); 
    })
}


var App=function(){
    $(function() {
        $("img.lazy").lazyload({
            effect : "fadeIn"
        });

        new WpAnimate({
            dom : ".sort-bar .bd",
            num : 70
        });

        new WpOptArea('.wp-opt-area',{
            oTop : ".wp-btn-top",
            oDowm : ".wp-btn-down"
        }).init();
    });
}

;(function(){
    App();
})()






