var Storage = window.localStorage;
var PhoneNumber=/^1[3578]\d{9}$/

$(".disagreement").click(function(){
    window.open("../html/京东登录注册.html","_self")
})
$(".agreement").click(function(){
    $(".mask").css("display","none")
    $(".acc-input").val("")
})
$(".icon").click(function(){
    window.open("../html/京东登录注册.html","_self")
})


$(".acc-input").on("input",function(){
    if($(".acc-input").val().length==11&&PhoneNumber.test($(".acc-input").val())==true){
        $(".btn").addClass("active")
    }else{
        $(".btn").removeClass("active")
    }
})

var date=JSON.parse(Storage.getItem("NumberAndPassword"))
$(".btn").click(function(){
    if($(".acc-input").val().length==11&&PhoneNumber.test($(".acc-input").val())==true){
        
        window.open("../html/手机快速注册页2.html","_self")
        var phonenumber=$(".acc-input").val()
        var obj={phonenumber}
        if(Storage.getItem("linshiNumber")){
            var ckNumber=JSON.parse(Storage.getItem("linshiNumber"))
            ckNumber.push(obj.phonenumber)
            Storage.setItem("linshiNumber",  JSON.stringify(ckNumber))
        }else{
            Storage.setItem("linshiNumber",  JSON.stringify(obj))
        }
    }
})

