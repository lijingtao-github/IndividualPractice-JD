$(".jd-header-icon-back span").click(function(){
    window.history.back()
})

$(".shopcart_login_bar_btn").click(function(){
    window.open("../html/京东登录注册.html","_self")
})

var Storage = window.localStorage;


if(Storage.getItem("EnterNumber")==null){
    $(".shopcart_login_bar").css("display","block")
    $(".empty_txt").html("登录后可同步购物车中商品")
}else{
    $(".shopcart_login_bar").css("display","none")

    if(JSON.stringify(Storage.getItem("gouwu")).length==4||Storage.getItem("gouwu")==null){
        $(".empty_txt").html("购物车空空如也，去逛逛吧~")
    }
}
console.log(JSON.stringify(Storage.getItem("gouwu")))

if(Storage.getItem("gouwu")!=null||JSON.stringify(Storage.getItem("gouwu")).length!=4){
    $(".empty_cart").css("display","none")
    $(".jdTabContent").css("display","block")
}


var date=JSON.parse(Storage.getItem("gouwu"))

for(var a=0;a<date.length;a++){
    $("<div class='goods selected'></div>").html(`
    <i class="icon_select"></i>
    <img class="goods_img" src="${date[a].Coverimg}" alt="">
    <div class="content">
        <div class="name">
            ${date[a].Title}
        </div>
        <div class="sku_line"><div class="sku">${date[a].Sty}</div></div>
        <div class="discount_line">
            <div class="discount_item">白条6期免息</div>
        </div>
        <div class="price_line">
            <div class="price">
                ¥
                <em class="int">${date[a].Price}</em>
                .00
            </div>
            <div class="num_wrap">
                <span class="minus disabled" _btn="${date[a].Id}"></span>
                <div class="input_wrap">
                    <span class="num">${date[a].number}</span>
                </div>
                <span class="plus" _btn2="${date[a].Id}"></span>
            </div>
        </div>
        <div class="m_action">
            <span class="m_action_item_delete" _date="${date[a].Id}">删除</span>
        </div>
    </div>
    `).appendTo(".section_item")
}

$(".num2").html(`(${date.length}件)`)


var Unclick=false
$(".section_item .icon_select").click(function(){
    if(!Unclick){
        $(this).parent().removeClass("selected")
    }else{
        $(this).parent().addClass("selected")
    }
    Unclick=!Unclick
})

$(".fixBar .icon_select").click(function(){
    if(!Unclick){
        $(this).parent().removeClass("selected")
        $(".goods").removeClass("selected")
    }else{
        $(this).parent().addClass("selected")
        $(".goods").addClass("selected")
    }
    Unclick=!Unclick
})


$(".goods").each(function(){
    if($(this).hasClass("selected")){
        $(".t_price").html(`¥${parseInt(date[$(this).index()].Price)*parseInt(date[$(this).index()].number)}`)
    }else{
        $(".t_price").html("¥0")
    }
})
$(".section").click(function(ev){
    var target=ev.target||ev.srcElement
    if(target.className=="minus"){
        var Btn=target.getAttribute("_btn")
        for(var b=0;b<date.length;b++){
            if(date[b].Id==Btn){
                if(date[b].number<=1){
                    date[b].number=1
                    $(".num").eq(b).html("1")
                    $(".minus").addClass("disabled")
                }else if(date[b].number>1){
                    date[b].number-=1
                    $(".num").eq(b).html(`${date[b].number}`)
                    $(".minus").removeClass("disabled")
                }
                
                Storage.setItem("gouwu",JSON.stringify(date))


                $(".goods").each(function(){
                    if($(this).hasClass("selected")){
                        
                        var Allprice=parseInt(date[$(this).index()].Price)*parseInt(date[$(this).index()].number)
                        var sum=0
                        sum+=Allprice
                        $(".t_price").html(`¥`+sum)
                    }else{
                        $(".t_price").html("¥0")
                    }
                })
            }
        }
    }

    if(target.className=="plus"){
        var Btn2=target.getAttribute("_btn2")
        for(var c=0;c<date.length;c++){
            if(date[c].Id==Btn2){
                date[c].number++
                $(".num").eq(c).html(`${date[c].number}`)
                $(".minus").removeClass("disabled")
                Storage.setItem("gouwu",JSON.stringify(date))
                $(".goods").each(function(){
                    if($(this).hasClass("selected")){
                        
                        var Allprice=parseInt(date[$(this).index()].Price)*parseInt(date[$(this).index()].number)
                        var sum=0
                        sum+=Allprice
                        $(".t_price").html(`¥`+sum)
                    }else{
                        $(".t_price").html("¥0")
                    }
                })
            }
        }
    }

    if(target.className=="m_action_item_delete"){
        var del=target.getAttribute("_date")
        for(var d=0;d<date.length;d++){
            if(date[d].Id==del){
                date.splice(d,1)
                $(".section").parent().remove()
                Storage.setItem("gouwu",JSON.stringify(date))
            }
        }
    }

})


$(".buy").click(function(){
    alert("付款中......")
    setTimeout(function(){
        alert("付款成功!")
        window.open("../html/移动端京东首页.html","_self")
        Storage.removeItem("gouwu")
    })
})