// 获取窗口宽度使自适应
let widthSet = document.documentElement.clientWidth;
console.log(widthSet);

let root = document.querySelector("#root");
root.style.width=widthSet+"px";
root.style.height =0.48*widthSet+"px";

console.log(root.style.width,root.style.height)

let htmlELe = document.querySelector("html");
htmlELe.style.fontSize = (widthSet/1366) * 6.25+"%";