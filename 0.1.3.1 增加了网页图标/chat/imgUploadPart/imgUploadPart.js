let imgUploadPlace = document.querySelector(".imgUploadPlace");
// 输入框
let imgUploadPlaceInput = document.getElementById("imgUploadPlaceInput");
//输入框（高度）
let imgUploadPlaceInput2 = document.getElementById("imgUploadPlaceInput2");
//输入框（宽度）
let imgUploadPlaceInput3 = document.getElementById("imgUploadPlaceInput3");
//按钮
let imgUploadPlaceInput4 = document.getElementById("imgUploadPlaceInput4");


// 监听事件 点击加号出现板块
document.addEventListener("click",(event) => {
    console.log(event.target);
    if(event.target.className == "iconfont icon-jiahao" ||event.target.className == "imgUploadPlace"){
        imgUploadPlace.style.display = "block";
        console.log(event.target.className)
    }else{
        imgUploadPlace.style.display = "none";
        console.log(event.target.className)
    }
})  

var valueLink = null;
var valueHeight = null;
var valueWidth = null;

imgUploadPlaceInput4.onclick = function(){
    valueLink = imgUploadPlaceInput.value;
    valueHeight = imgUploadPlaceInput2.value+"rem";
    valueWidth = imgUploadPlaceInput3.value+"rem";
    if(parseInt(imgUploadPlaceInput2.value)==NaN  || parseInt(imgUploadPlaceInput3.value)==NaN ){
        alert("请输入正确的链接和宽高数据！")
    }
    else if(parseInt(imgUploadPlaceInput2.value)>500||parseInt(imgUploadPlaceInput3.value)>500){
        alert("图片宽高请勿超过500！")
    }else{
        addEmoticon(valueLink,valueHeight,valueWidth);
    }
    
}






// 封装发送函数
function addEmoticon(link,height,width){

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
   sayWord = "<img style='width:"+width+"; height:"+height+";' src='"+link+"' ></img>";
   all = ""+sayWord +"^"+timeNow+"^"+yourname+"^"+bgcolorOfImg +"^"+fontSize+"^"+imgs;
   ajax('POST', "http://127.0.0.1:3000/", 'name='+all); //传单个值的方法   
}
