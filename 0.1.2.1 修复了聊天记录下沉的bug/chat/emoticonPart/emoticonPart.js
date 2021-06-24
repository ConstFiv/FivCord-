// let inputRightBtn = document.querySelector("#inputRightBtn");
let emoticonPlace = document.querySelector(".emoticonPlace");
let emoticonPlaceUl = document.querySelector(".emoticonPlaceUl");


// 监听点击事件 如果点击了笑脸就显示表情包模块，点击其他地方消失
document.addEventListener("click",(event) => {
        console.log(event.target);
        if(event.target.className == "iconfont icon-biaoqing"){
            emoticonPlace.style.display = "block";
        }else{
            emoticonPlace.style.display = "none";
        }
})

//表情包编号列表
let emoticonList = ["#icon-happy2","#icon-alien","#icon-laughing","#icon-happy","#icon-crying2","#icon-chi\
ld","#icon-confused","#icon-cool","#icon-ninja","#icon-puzzle","#icon-romantic","#icon-dull","#icon-drunk","#icon-sh\
y","#icon-wondering","#icon-sleepy","#icon-thief","#icon-sweating","#icon-surprise","#icon-grinning","#icon-clow\
n","#icon-muted","#icon-angel","#icon-amazed","#icon-cheeky","#icon-dead","#icon-devil","#icon-angry","#icon-baffle\
d","#icon-nerd2","#icon-hockey","#icon-famous","#icon-nerd","#icon-in-love","#icon-wink","#icon-kiss","#icon-pukin","#icon-cryin\
g","#icon-greed","#icon-sad"];

//给UL添加子元素 并渲染表情包
for(i=0;i<emoticonList.length;i++){
    var li = document.createElement("li");
    li.innerHTML = "<svg class='iconForEmoticon' aria-hidden='tru\
    e'><use xlink:href='"+emoticonList[i]+"' id='"+emoticonList[i]+"'></use></svg>";
    
    emoticonPlaceUl.appendChild(li);
}




// 事件委派监听哪一个表情包被点击了,执行函数
emoticonPlaceUl.onclick = (event)=>{
    if(event.target.nodeName.toLowerCase()=="use"){
        //传参 参数为表情包的id
        addEmoticon(event.target.id);

    }
}






function addEmoticon(numberOfEmoticon){

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

    let sayWord = chatPlaceInput.value;
    let yourname = listName[mathNum];
    let bgcolorOfImg = listColor[mathNum];
    let fontSize = "35rem";
    let imgs = listImgs[mathNum];
    var timeNow = ""+month+"-"+date+"  "+hour+":"+minute+":"+second;


    // ##############################传值
    sayWord = "<svg class='iconForEmoticon' aria-hidden='true'><use xlink:href='"+numberOfEmoticon+"' style='font-size: 14rem'></use></svg>";
    all = ""+sayWord +"^"+timeNow+"^"+yourname+"^"+bgcolorOfImg +"^"+fontSize+"^"+imgs;
    ajax('POST', "http://127.0.0.1:3000/", 'name='+all); //传单个值的方法   
}
