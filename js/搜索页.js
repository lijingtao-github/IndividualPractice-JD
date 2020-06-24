$(".msHotwordVisible span").eq(0).click(function(){
    $(this).css("display","none")
    $(".msHotwordVisible span").eq(1).css("display","inline")
    $(".s_hasHide").css("display","block")
    $(".hot-search-tags span").css("display","none")
})
$(".msHotwordVisible span").eq(1).click(function(){
    $(this).css("display","none")
    $(".msHotwordVisible span").eq(0).css("display","inline")
    $(".s_hasHide").css("display","none")
    $(".hot-search-tags span").css("display","block")
})


$(".garbage-pic").click(function(){
    $(".search-toast").css("display","block")
    $(".toast-btn .no").click(function(){
        $(".search-toast").css("display","none")
    })
    $(".toast-btn .sure").click(function(){
        $(".search-toast").css("display","none")
        $(".recent-search-tags span").remove()
        $(".recent-search-head").css("display","none")
    })
})

$(".jd-header-icon-back span").click(function(){
    window.history.back()
})