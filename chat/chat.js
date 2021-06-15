
// 左侧边栏特效制作###############################################################

//获取数据
let rootLeftArea = document.querySelectorAll(".rootLeftArea")[0];
let logobuttonList = document.querySelectorAll(".logbutton");
let logobuttonInsideList = document.querySelectorAll(".logobuttonInside");

//鼠标点击事件，使用事件委派

rootLeftArea.onclick =(e)=>{
    if(e.target.nodeName == "LI"|| e.target.parentNode.nodeName=="LI"||e.target.parentNode.parentNode.nodeName=="LI"){
        alert("该功能正在开发中...")
        
    }
}








// 左侧分组特效制作###############################################################
// 获取数据
let groupTitle = document.querySelectorAll(".groupTitle")[0];
let groupList = document.querySelectorAll(".groupList")[0]


// 点击上方抬头
groupTitle.onclick = ()=>{
    alert("该功能也在开发中，请耐心等待更新...")
}

groupList.onclick = ()=>{
    alert("目前版本只支持文字聊天频道！")
}