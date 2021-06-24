// const { Console } = require("console");
let chatDataJs = document.getElementById('chatDataJs');
let chatPlaceInput = document.getElementById('chatPlaceInput');
let inputRightBtn = document.getElementById('inputRightBtn');
let ChatPlaceUl = document.getElementById('ChatPlaceUl');
let allData = "a#b#c#d#e#f";

// 随机生成用户信息
let mathNum = Math.floor(Math.random()*17);
let listName = ["Curtain","blank","不吃香菜的皮皮椒","陈青","橘猫","Orient\
Ink","广寒宫上喂兔子的","咸鱼王","山角函兽","真正的发芽土豆","NtB","Iccccc","七星","花辞树","Sakura","我很老实","入海"];
let listColor = ["rgb(148,95,187)","rgb(20,181,227)","rgb(201,211,96)","rgb(242,196,99)","rgb(201,211,96)","rgb(148,95,187)","rgb(242,196,99)","rgb(20,181,227)","rgb(242,196,99)","rgb(20,181,227)","rgb(148,95,187)","rgb(242,196,99)","rgb(201,211,96)","rgb(20,181,227)","rgb(242,196,99)","rgb(148,95,187)","rgb(201,211,96)"]
let listImgs = ["icon-dongwutubiao-shangse-huli","icon-dongwutubiao-shangse-laoshu","icon-dongwu","icon-xiaojidongwuniao","icon-dongwutubiao-shangse-ma","icon-dongwutubiao-shangse-daxiang","icon-dongwutubiao-shangse-changjinglu","icon-dongwutubiao-shangse-shizi","icon-dongwutubiao-shangse-laohu","icon-mao","icon-shenghuafangju","icon-dongwutubiao-shangse-changjinglu","icon-dongwutubiao-shangse-shizi","icon-dongwutubiao-shangse-daxiang","icon-dongwu","icon-dongwutubiao-shangse-laoshu","icon-dongwutubiao-shangse-changjinglu"]



// 遍历JSON转到JS的文件
function refreshHtml(){
    //清空内容
   for(var i=ChatPlaceUl.childNodes.length-1;i>=0;i--){
    var chnode=ChatPlaceUl.childNodes[i];
    ChatPlaceUl.removeChild(chnode);  
   
 }
    //重新写入
    for(let i = 0 ; i<jsonData.data.length;i++){
        var li = document.createElement("li");
                li.innerHTML = "<div class='pic' style='background-color: "+jsonData.data[i].bgcolorOfImg+"';><span class= 'iconfont "+jsonData.data[i].imgs+" ' style='font-size: "+jsonData.data[i].fontSize+";'></span></div>\
                <div class='dataElse'>\
                <div class='dataElseUp'>\
                <div class='name'>"+jsonData.data[i].yourname+"</div>\
                <div class='time'>"+jsonData.data[i].timeNow+"</div></div>\
                <div class='word'>"+jsonData.data[i].sayWord+"</div></div>"
                
                ChatPlaceUl.appendChild(li);
        
    }
}
// 刷新一条消息(服务器端)
function refreshOnce(){
    var li = document.createElement("li");
    li.innerHTML = "<div class='pic' style='background-color: "+jsonData.data[jsonData.total-1].bgcolorOfImg+";''><span class= 'iconfont "+jsonData.data[jsonData.total-1].imgs+" ' style='font-size: "+jsonData.data[i].fontSize+";'></span></div>\
    <div class='dataElse'>\
    <div class='dataElseUp'>\
    <div class='name'>"+jsonData.data[jsonData.total-1].yourname+"</div>\
    <div class='time'>"+jsonData.data[jsonData.total-1].timeNow+"</div></div>\
    <div class='word'>"+jsonData.data[jsonData.total-1].sayWord+"</div></div>"
    
    ChatPlaceUl.appendChild(li);
}

// 先执行一次刷新 并将记录滚动到最下方
refreshHtml();
ChatPlaceUl.scrollTop = ChatPlaceUl.scrollHeight - ChatPlaceUl.offsetHeight+25;

// ChatPlaceUl.location.reload();

// setInterval(()=>{
    
//     // chatDataJs.src = "./chatHistoryData/chatData.js";
//     refreshHtml();
//     ChatPlaceUl.lastElementChild.height =" 100rem";

//     // ChatPlaceUl.location.reload();
// },1000)


// ###封装的ajax方法以及渲染代码的临时放置#######################################################
// 封装的ajax方法
function ajax(method, url, val) {  // 方法，路径，传送数据
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                allData = xhr.responseText;

        //###############################渲染(因为延迟原因临时放进函数里)
        allList = allData.split("^");
        var li = document.createElement("li");
        li.innerHTML = "<div class='pic' style='background-color: "+allList[3]+";''><span class= 'iconfont "+allList[5]+" ' style='font-size: "+allList[4]+";'></span></div>\
        <div class='dataElse'>\
        <div class='dataElseUp'>\
        <div class='name'>"+allList[2]+"</div>\
        <div class='time'>"+allList[1]+"</div></div>\
        <div class='word'>"+allList[0]+"</div></div>"
        ChatPlaceUl.appendChild(li);
        //将记录滚动到最下方
        ChatPlaceUl.scrollTop = ChatPlaceUl.scrollHeight - ChatPlaceUl.offsetHeight+25;
        // ChatPlaceUl.ScrollToCaret();
        // //滚动
        // ChatPlaceUl.scrollTop = 0;
 //###############################渲染(因为延迟原因临时放进函数里) 
            
            } else {
                alert('Request was unsuccessful: ' + xhr.status);
            }
        }
    };

    xhr.open(method, url, true);
    if(val)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(val);
}

// ##############################################################

chatPlaceInput.addEventListener('keyup', function(e) {
    
   
if(e.code=="Enter"){
        // ###########################获取时间###################
        var now = new Date();
        var year = now.getFullYear(); //得到年份
        var month = now.getMonth()+1;//得到月份
        var date = now.getDate();//得到日期
        var hour= now.getHours();//得到小时数
        if(hour<10){
            hour = "0"+hour;
        }
        var minute= now.getMinutes();//得到分钟数
        if(minute<10){
            minute = "0"+minute;
        }
        var second= now.getSeconds();//得到秒数
        if(second<10){
            second = "0"+second;
        }
        
        // ###########################获取时间###################

//数据位置
let sayWord = chatPlaceInput.value;
let yourname = listName[mathNum];
let bgcolorOfImg = listColor[mathNum];
let fontSize = "35rem";
let imgs = listImgs[mathNum];
var timeNow = ""+month+"-"+date+"  "+hour+":"+minute+":"+second;



// ##############################传值
all = ""+sayWord +"^"+timeNow+"^"+yourname+"^"+bgcolorOfImg +"^"+fontSize+"^"+imgs;
ajax('POST', "http://127.0.0.1:3000/", 'name='+all); //传单个值的方法
    


    //回车发送后清空输入框
      chatPlaceInput.value = "";


}
    
});






