$(".icon").click(function(){
    window.open("../html/手机快速注册页2.html","_self")
})

$(".acc-input").on("input",function(){
    if($(".acc-input").val().length>=8){
        $(".btn").addClass("active")
    }else{
        $(".btn").removeClass("active")
    }
})


var Unclick=false
$(".checkbtn").click(function(){
    if(!Unclick){
        $(".checkbtn").css("background-image","url(../img/index13.png)")
        $(".acc-input").attr("type","text")
    }else{
        $(".checkbtn").css("background-image","url(../img/index12.png)")
        $(".acc-input").attr("type","password")
    }
    Unclick=!Unclick
})


var Storage = window.localStorage;
var date1=JSON.parse(Storage.getItem("linshiNumber"))

$(".btn").click(function(){
    if($(".acc-input").val().length>=8){
        var number=date1.phonenumber
        var password=$(".acc-input").val()
        var obj={number,password}
        var PhoneN=[]
        if(Storage.getItem("NumberAndPassword")){
            var userData = JSON.parse(Storage.getItem("NumberAndPassword"))
            for(var a=0;a<userData.length;a++){
                PhoneN.push(userData[a].number)
            }
            if(PhoneN.includes(obj.number)){
                alert("该手机号已被注册,请重新注册!")
            }else{
                userData.push(obj)
                Storage.setItem("NumberAndPassword", JSON.stringify(userData))
                alert("注册成功!")
                window.open("../html/京东登录注册.html","_self")
            }
        }else{
            Storage.setItem("NumberAndPassword",  "["+JSON.stringify(obj)+"]")
            alert("注册成功!")
            Storage.removeItem("linshiNumber")
            window.open("../html/京东登录注册.html","_self")
        }
    }
})