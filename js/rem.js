(function(doc,win){
    var docEL=doc.documentElement,  //获取根节点  html
    resizeEvt="orientationchange" in window?"orientationchange":"resize"
    // orientationchange--》屏幕旋转事件  部分浏览器存在兼容  而且用户可以手动关闭这个事件

    relalc=function(){
        var clientWidth=docEL.clientWidth;
        if(!clientWidth) return;
        docEL.style.fontSize=clientWidth/3.75+"px"
        // iphone 6 7 8      375
    };
    if(!addEventListener) return;
    win.addEventListener(resizeEvt,relalc,false);//当屏幕反转的时候重新计算一下 rem的比值
    doc.addEventListener("DOMContentLoaded",relalc,false)   //当html 结构加载出来的时候  计算一个rem的比值


})(document,window)