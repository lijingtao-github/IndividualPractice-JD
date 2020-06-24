var Storage = window.localStorage;

var UnClick=false
$(".planBLogin").click(function(){
    if(!UnClick){
        $(".page-input").css("display","none")
        $(".page-input2").css("display","block")
        $(".planBLogin").html("短信验证码登录")
        $(".policy_tip span").css("display","none")
    }else{
        $(".page-input").css("display","block")
        $(".page-input2").css("display","none")
        $(".planBLogin").html("帐号密码登录")
        $(".policy_tip span").css("display","block")
    }
    UnClick=!UnClick
})


var Unclick=false
$(".checkbtn").click(function(){
    if(!Unclick){
        $(".checkbtn").css("background-image","url(../img/index13.png)")
        $(".page-input2 .acc-input2").attr("type","text")
    }else{
        $(".checkbtn").css("background-image","url(../img/index12.png)")
        $(".page-input2 .acc-input2").attr("type","password")
    }
    Unclick=!Unclick
})

var date=JSON.parse(Storage.getItem("NumberAndPassword"))

var code;
$(".page-input .getMsg-btn").click(function(){
    $(".page-input .getMsg-btn").css({"color":"#848689"})
    var time=60
    if(time==60){
        var timer=setInterval(function(){
            if(time==0){
                $(".page-input .getMsg-btn").html("获取验证码")
                $(".page-input .getMsg-btn").css({"background-color":"rgba(226, 35, 30, .2)","color":"#e2231a"})
                time=60
                clearInterval(timer)
                $(".page-input .getMsg-btn").removeAttr("disabled")
            }else{
                $(".page-input .getMsg-btn").attr("disabled","true")
                $(".page-input .getMsg-btn").html("重新发送("+time+"s)")
                time--
            }
        },1000)
    }

    code=''
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    for (var b = 0; b < 6; b++) {
        var index = Math.floor(Math.random() * 10)
        code += random[index]
    }
    setTimeout(function(){
        alert(code)
    },3000)
    return code
})



$(".page-input .acc-input").on("blur",function(){
    $(".page-input .acc-input2").on("input",function(){
        if($(".page-input .acc-input").val().length==11&&$(".page-input .acc-input2").val().length==6){
            $(".btn-login").addClass("active")
        }else if($(".page-input .acc-input").val().length<11||$(".page-input .acc-input2").val().length<6){
            $(".btn-login").removeClass("active")
        }
    })
})



$(".page-input2 .acc-input").on("blur",function(){
    $(".page-input2 .acc-input2").on("input",function(){
        if($(".page-input2 .acc-input").val().length==11&&$(".page-input2 .acc-input2").val().length>=8){
            $(".btn-login").addClass("active")
        }else if($(".page-input2 .acc-input").val().length<11||$(".page-input2 .acc-input2").val().length<8){
            $(".btn-login").removeClass("active")
        }
    })
})


$(".btn-login").click(function(){
    if($(".page-input").css("display")=="block"){
        if($(".page-input .acc-input").val().length==11&&$(".page-input .acc-input2").val().length==6){
            for(var a=0;a<date.length;a++){
                if($(".page-input .acc-input").val().includes(date[a].number)&&$(".page-input .acc-input2").val()==code){
                    alert("登录成功!")
                    window.open("../html/移动端京东首页.html","_self")

                    var enterNum=$(".page-input .acc-input").val()
                    var Obj={enterNum}
                    if(Storage.getItem("EnterNumber")){
                        var ckNumber=JSON.parse(Storage.getItem("EnterNumber"))
                        ckNumber.push(Obj.enterNum)
                        Storage.setItem("EnterNumber",  JSON.stringify(ckNumber))
                    }else{
                        Storage.setItem("EnterNumber",  JSON.stringify(Obj))
                    }
                    break;
                }else if(!$(".page-input .acc-input").val().includes(date[a].number)){
                    alert("该手机号尚未注册,请先注册或重新输入!")
                    break;
                }else if($(".page-input .acc-input2").val()!=code){
                    alert("验证码不正确,请重新输入!")
                    break;
                }
            }
        }
    }else if($(".page-input2").css("display")=="block"){
        if($(".page-input2 .acc-input").val().length==11&&$(".page-input2 .acc-input2").val().length>=8){
            for(var b=0;b<date.length;b++){
                if($(".page-input2 .acc-input").val().includes(date[b].number)&&$(".page-input .acc-input2").val().includes(date[b].password)){
                    alert("登录成功!")
                    window.open("../html/移动端京东首页.html","_self")

                    var enterNum=$(".page-input2 .acc-input").val()
                    var Obj={enterNum}
                    if(Storage.getItem("EnterNumber")){
                        var ckNumber=JSON.parse(Storage.getItem("EnterNumber"))
                        ckNumber.push(Obj.enterNum)
                        Storage.setItem("EnterNumber",  JSON.stringify(ckNumber))
                    }else{
                        Storage.setItem("EnterNumber",  JSON.stringify(Obj))
                    }
                    break;
                }else if(!$(".page-input2 .acc-input").val().includes(date[b].number)){
                    alert("该手机号尚未注册,请先注册或重新输入!")
                    break;
                }else if(!$(".page-input2 .acc-input2").val().includes(date[b].password)){
                    alert("密码不正确,请重新输入!")
                    break;
                }
            }
        }
    }
})


$(".quickReg").click(function(){
    window.open("../html/手机快速注册页.html","_self")
})


$(".icon").click(function(){
    window.open("../html/移动端京东首页.html","_self")
})