
$.ajax({
    "type": "get",
    "url": "../json/分类.json",
    "async": true,
    "data": {},
    "dataType": "json"
}).then(function (str) {
    for (var a = 0; a < str.length; a++) {
        $("<li></li>").html(`<a href='javascript:;'>${str[a].title}</a>`).appendTo(".category")
    }

    new Swiper(".jd-category-content-wrapper",{
        loop: false,
        effect: 'slide',
        direction:'vertical',
        slidesPerView :'auto',
        observer: true,
        observeParents: true
    })
    
    for(var b=0;b<str[0].list.length;b++){
        $(`
        <div class="swiper-slide">
            <h4>${str[0].list[b].title}</h4>
            <ul class="jd-category-style-1">
               
            </ul>
        </div>
        `).appendTo(".jd-category-content-wrapper .swiper-wrapper")

        for(var c=0;c<str[0].list[b].list.length;c++){
            $(`
            <li>
                <a href="javascript:;">
                    <img src="${str[0].list[b].list[c].img}" alt="">
                    <span>${str[0].list[b].list[c].content}</span>
                </a>
            </li>
            `).appendTo($(".jd-category-style-1").eq(b))
        }
    }


    $(".category li").first().addClass("cur")
    $(".jd-category-content-wrapper .swiper-wrapper").addClass("active")
    $(".category li").click(function(){
        var Index=$(this).index()
        $(this).addClass("cur").siblings(".category li").removeClass("cur")

        $(".jd-category-content-wrapper .swiper-wrapper").html("")
        for(var d=0;d<str[Index].list.length;d++){
            $(`
            <div class="swiper-slide">
                <h4>${str[Index].list[d].title}</h4>
                <ul class="jd-category-style-1">
                   
                </ul>
            </div>
            `).appendTo(".jd-category-content-wrapper .swiper-wrapper").eq(Index)

            for(var e=0;e<str[Index].list[d].list.length;e++){
                $(`
                <li>
                    <a href="javascript:;">
                        <img src="${str[Index].list[d].list[e].img}" alt="">
                        <span>${str[Index].list[d].list[e].content}</span>
                    </a>
                </li>
                `).appendTo($(".jd-category-style-1").eq(d))
            }
        }
        $(".jd-category-content-wrapper .swiper-wrapper").eq(Index).addClass("active").siblings(".jd-category-content-wrapper .swiper-wrapper").removeClass("active")
        
    })
})





$(".commonNav a").eq(0).click(function(){
    window.open("../html/移动端京东首页.html","_self")
})
$(".jd-header-search-input input").focus(function(){
    window.open("../html/搜索页.html","_self")
})

$(".commonNav a").eq(4).click(function(){
    window.open("../html/京东登录注册.html","_self")
})

$(".jd-header-icon-back span").click(function(){
    window.history.back()
})

$(".commonNav a").eq(3).click(function(){
    window.open("../html/购物车.html","_self")
})

var Storage = window.localStorage;
if(Storage.getItem("EnterNumber")!=null){
    $(".commonNav a img").eq(4).attr("src","../img/1c8543653685e80e.png")
    $(".commonNav a").eq(4).click(function(){
        window.open("../html/我的京东.html","_self")
    })
}