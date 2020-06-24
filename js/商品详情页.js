$(".sku_window").click(function(){
    $(".popupBuyArea").css("display","block")
    $(".popupBuyArea").click(function(ev){
        if(!$(".popupMain").is(ev.target)&&$(".popupMain").has(ev.target).length===0){
            $(".popupBuyArea").css("display","none")
        }
    })
})

$(".btn_orange").click(function(){
    $(".popupBuyArea").css("display","block")
    $(".popupBuyArea").click(function(ev){
        if(!$(".popupMain").is(ev.target)&&$(".popupMain").has(ev.target).length===0){
            $(".popupBuyArea").css("display","none")
        }
    })
})


$(".gotoCart").click(function(){
    window.open("../html/购物车.html","_self")
})


$(".jd-header-icon-back span").click(function(){
    window.history.back()
})




var Storage = window.localStorage;
var num = window.location.search.substr(1)
$.ajax({
    "type": "get",
    "url": "../json/商品信息.json",
    "async": true,
    "data": {},
    "dataType": "json"
}).then(function (str){
    $(".mod_slider").html(`<img src="${str[num].CoverImg}" alt="">`)

    $(".priceWrap .price em").html(`${str[num].price}`)

    $(".fn_text_wrap").html(`${str[num].title}`)

    $(".skuChoose1").html(`${str[num].style[0].stytit},`+$(".buyNum1").html()+"个")

    $(".popupMain .header .price em").html(`${str[num].price}`)
    
    $(`<img src="${str[num].CoverImg}" alt="">`).prependTo(".popupBuyArea .header")

    for(var a=0;a<str[num].style.length;a++){
        $("<span class='item'></span>").html(`${str[num].style[a].stytit}`).appendTo(".sku_choose")
    }

    
    $(".sku_choose .item").eq(0).addClass("active")
    $(".popupBuyArea .prop span").eq(1).append($(".popupBuyArea .sku_choose .active").html()+`,1个`)
    $(".sku_choose .item").on("click",function(){
        $(this).addClass("active").siblings(".sku_choose .item").removeClass("active")
        $(".popupBuyArea .prop span").eq(1).html("").append($(".popupBuyArea .sku_choose .active").html()+`,${Num}个`)
        $(".skuChoose1").html("").append($(".popupBuyArea .sku_choose .active").html())
        
    })
    
    var Num=parseInt($(".buyNum1").html())
    
    $(".minus").on("click",function(){
        Num--
        if(Num==1){
            $(".minus").addClass("disabled")
        }else if(Num<1){
            Num=1
        }
        $(".buyNum1").html(Num)
    })
    
    $(".plus").on("click",function(){
        Num++
        if(Num>1){
            $(".minus").removeClass("disabled")
            $(".buyNum1").html(Num)
        }
    })

    $(".addCart1").click(function(){
        var Id=num
        var Coverimg=str[num].CoverImg
        var Title=str[num].title
        var Sty=$(".popupBuyArea .sku_choose .active").html()
        var Price=str[num].price
        var number=parseInt($(".buyNum1").html())
        var obj={Id,Coverimg,Title,Sty,Price,number}
        var card=[]

        if(Storage.getItem("gouwu")){
            var ckData=JSON.parse(Storage.getItem("gouwu"))
            for(var b=0;b<ckData.length;b++){
                card.push(ckData[b].Id)
            }
            if(card.includes(obj.Id)){
                for(var c=0;c<ckData.length;c++){
                    if(ckData[c].Id==obj.Id){
                        ckData[c].number+=1
                        Storage.setItem("gouwu",JSON.stringify(ckData))
                    }
                }
            }else{
                ckData.push(obj)
                Storage.setItem("gouwu",JSON.stringify(ckData))
            }
        }else{
            Storage.setItem("gouwu","["+ JSON.stringify(obj)+"]")
        }

        alert("添加成功!")
    })

    $(".buyBtn1").click(function(){
        var Id=num
        var Coverimg=str[num].CoverImg
        var Title=str[num].title
        var Sty=$(".popupBuyArea .sku_choose .active").html()
        var Price=str[num].price
        var number=$(".buyNum1").html()
        var obj={Id,Coverimg,Title,Sty,Price,number}
        var card=[]

        if(Storage.getItem("gouwu")){
            var ckData=JSON.parse(Storage.getItem("gouwu"))
            for(var b=0;b<ckData.length;b++){
                card.push(ckData[b].Id)
            }
            if(card.includes(obj.Id)){
                for(var c=0;c<ckData.length;c++){
                    if(ckData[c].Id==obj.Id){
                        ckData[c].number+=1
                        Storage.setItem("gouwu",JSON.stringify(ckData))
                    }
                }
            }else{
                ckData.push(obj)
                Storage.setItem("gouwu",JSON.stringify(ckData))
            }
        }else{
            Storage.setItem("gouwu","["+ JSON.stringify(obj)+"]")
        }
        
        window.open("../html/购物车.html","_self")
    })
})