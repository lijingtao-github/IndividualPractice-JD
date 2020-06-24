var Storage = window.localStorage;

var date=JSON.parse(Storage.getItem("EnterNumber"))
var date2=JSON.parse(Storage.getItem("UserName"))

$(".user_name").html(`${date.enterNum}`)
$(".user_pin").html(`${date2.UserName}`)


$(".jd-header-icon-back").click(function(){
    window.open("../html/我的京东.html","_self")
})

$(".loginOut").click(function(){
    Storage.removeItem("EnterNumber")
    Storage.removeItem("UserName")
    window.open("../html/京东登录注册.html","_self")
})