var Storage = window.localStorage;
var lsNumber=JSON.parse(Storage.getItem("linshiNumber"))
$(".icon").click(function(){
    $(".dialog").css("display","block")
    $(".dialog-des").html("点击“返回”将中断注册，确定返回？")
    $(".dialog-cancel").click(function(){
        $(".dialog").css("display","none")
    })
    $(".dialog-sure").click(function(){
        window.open("../html/手机快速注册页.html","_self")
        Storage.removeItem("linshiNumber")
    })
})

var code;
$(".getMsg-btn").click(function(){
    $(".dialog").css("display","block")
    $(".dialog-des").html(`我们将发送短信/语音验证码至：${lsNumber.phonenumber}`)
    $(".dialog-cancel").click(function(){
        $(".dialog").css("display","none")
    })

    var time=60
    $(".dialog-sure").click(function(){
        $(".dialog").css("display","none")
        $(".getMsg-btn").css({"background-color":"#f7f7f7","color":"silver"})

        if(time==60){
            var timer=setInterval(function(){
                if(time==0){
                    $(".getMsg-btn").html("获取验证码")
                    $(".getMsg-btn").css({"background-color":"rgba(226, 35, 30, .2)","color":"#e2231a"})
                    time=60
                    clearInterval(timer)
                    $(".getMsg-btn").removeAttr("disabled")
                }else{
                    $(".getMsg-btn").attr("disabled","true")
                    $(".getMsg-btn").html("重新发送("+time+"s)")
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
    
})


$(".acc-input").on("input",function(){
    if($(".acc-input").val().length==6&&$(".acc-input").val()==code){
        $(".btn-next").addClass("active")
    }else{
        $(".btn-next").removeClass("active")
    }
})

$(".btn-next").click(function(){
    if($(".acc-input").val().length==6&&$(".acc-input").val()==code){
        window.open("../html/手机快速注册页3.html","_self")
    }
})