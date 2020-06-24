$(".jd-header-icon-back span").click(function(){
    window.open("../html/移动端京东首页.html","_self")
})

$(".commonNav a").eq(0).click(function(){
    window.open("../html/移动端京东首页.html","_self")
})

$(".commonNav a").eq(1).click(function(){
    window.open("../html/移动端京东分类页.html","_self")
})

$(".account_wrap_content").click(function(){
    window.open("../html/账户设置.html","_self")
})

var Storage = window.localStorage;

var date=JSON.parse(Storage.getItem("EnterNumber"))

$(".my_header_name").html(`jd_${date.enterNum}diz`)


var code=''
var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f',
'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
for (var b = 0; b < 13; b++) {
    var index = Math.floor(Math.random() * 36)
    code += random[index]
}
$(".pin").html(`用户名：jd_${code}`)

var UserName=$(".pin").html()
var obj={UserName}
if(Storage.getItem("UserName")){
    var ckUser=JSON.parse(Storage.getItem("UserName"))
    ckUser.push(obj.UserName)
    Storage.setItem("UserName",  JSON.stringify(ckUser))
}else{
    Storage.setItem("UserName",  JSON.stringify(obj))
}
