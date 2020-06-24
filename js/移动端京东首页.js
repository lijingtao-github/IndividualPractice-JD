window.onscroll = function () {
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollT > 0) {
        $(".header").css("background-color", "#e43130")
    } else {
        $(".header").css("background-color", "transparent")
    }
}


var newSwiper = new Swiper(".floor", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    effect: 'slide',
    observer: true,
    observeParents: true
})



var newSwiper = new Swiper(".floor2", {
    loop: false,
    effect: 'slide',
    observer: true,
    observeParents: true
})



setInterval(function () {
    var oDate = new Date()
    var oldTime = oDate.getTime()

    var newDate = new Date("2021/1/1 00:00:00")
    var newTime = newDate.getTime()

    var time = newTime - oldTime
    var second = parseInt(time / 1000)

    var day = parseInt(second / 86400)
    second %= 86400

    var hour = parseInt(second / 3600)
    second %= 3600

    var min = parseInt(second / 60)
    second %= 60

    if (hour < 10) {
        hour = "0" + hour
    }
    if (min < 10) {
        min = "0" + min
    }
    if (second < 10) {
        second = "0" + second
    }
    $(".j_sk_h").html(hour)
    $(".j_sk_m").html(min)
    $(".j_sk_s").html(second)
}, 1000)


var newSwiper = new Swiper(".m-floor4", {
    loop: false,
    slidesPerView: 'auto',
    slidesPerGroup: 4,
    effect: 'slide',
    observer: true,
    observeParents: true
})



setInterval(function () {
    $(".news_list_wrapper ul").animate({
        "top": "-0.44rem"
    }, 500, function () {
        $(".news_list_wrapper ul li").first().appendTo(".news_list_wrapper ul")
        $(".news_list_wrapper ul").css("top", "-0.22rem")
    })
}, 2000)



$(".commonNav a").eq(1).click(function(){
    window.open("../html/移动端京东分类页.html","_self")
})

$(".hilight2").focus(function(){
    window.open("../html/搜索页.html","_self")
})

$(".commonNav a").eq(4).click(function(){
    window.open("../html/京东登录注册.html","_self")
})

$(".commonNav a").eq(3).click(function(){
    window.open("../html/购物车.html","_self")
})

var Storage = window.localStorage;
var date=JSON.parse(Storage.getItem("EnterNumber"))

if(Storage.getItem("EnterNumber")!=null){
    $(".commonNav a img").eq(4).attr("src","../img/1c8543653685e80e.png")
    $(".commonNav a").eq(4).click(function(){
        window.open("../html/我的京东.html","_self")
    })
}



$.ajax({
    "type": "get",
    "url": "../json/商品信息.json",
    "async": true,
    "data": {},
    "dataType": "json"
}).then(function (str){
    for(var a=0;a<str.length;a++){
        $("<li class='similar-li'></li>").html(`
        <a href="javascript:;">
            <div class="similar-product">
                <div class="similar-posre">
                    <img src="${str[a].CoverImg}" alt="">
                </div>
                <span class="similar-product-text">${str[a].title}</span>
                <p class="similar-product-info">
                    <span class="similar-product-price">
                        ¥
                        <span class="big-price">${str[a].price}</span>
                    </span>
                    <span class="guess-button">看相似</span>
                </p>
            </div>
        </a>
        `).appendTo(".find-similar-ul")
    }

    $(".similar-li").click(function(){
        window.open("../html/商品详情页.html?"+$(this).index(),"_self")
    })
})