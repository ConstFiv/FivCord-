let http = require('http');
let qs = require('querystring');
var fs = require('fs');

var path = require('path')

// path.resolve

var params = {
    
};


// 将数据从json转换到js中，方便读取
function reWriteToJs(){
    
    fs.readFile(path.resolve('../chatHistoryData/chatData.json'),function(err,data){
        var msg = data.toString();          //将二进制的数据转换为字符串
        // msg = JSON.parse(msg);              //将字符串转换为json对象
        
        fs.writeFileSync(path.resolve('../chatHistoryData/chatData.js'), "jsonData = "+msg);
       
    
    })
    
}





//写入json文件选项
function addData(params){
    //现将json文件读出来
    fs.readFile(path.resolve('../chatHistoryData/chatData.json'),function(err,data){
        if(err){
            return console.error(err);
        }
        var msg = data.toString();          //将二进制的数据转换为字符串
        msg = JSON.parse(msg);              //将字符串转换为json对象
        msg.data.push(params);              //将传来的对象push进数组对象中，此处用的模拟数据parms，以后从页面获取数据
        msg.total = msg.data.length;        //刷新一下总数，以后分页会用上
        // console.log(msg.data);
     
        var str = JSON.stringify(msg,"","\t");     //因为nodejs的写入文件只认识字符串或者二进制数，因此进行必要的转换
        fs.writeFile(path.resolve('../chatHistoryData/chatData.json'),str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------新增成功-------------');
            //重写JS
            reWriteToJs()
        })
    })
    
}




let server = http.createServer(function(req, res) {
    let body = '';  // 一定要初始化为"" 不然是undefined
    req.on('data', function(data) {
        body += data; // 所接受的Json数据
    });
    req.on('end', function() {
        res.writeHead(200, {  // 响应状态
            "Content-Type": "text/plain",  // 响应数据类型
            'Access-Control-Allow-Origin': '*'  // 允许任何一个域名访问
        });

      
        //返回值
        res.write(qs.parse(body).name);
        console.log(qs.parse(body).name)
        var holl = qs.parse(body).name.split("^");

        params.yourname = holl[2];
        params.imgs = holl[5];
        params.bgcolorOfImg = holl[3];
        params.fontSize = holl[4];
        params.sayWord = holl[0];
        params.timeNow = holl[1];
        // 把数据压进JSON文件中
        addData(params);
        //重写JS文件
        
        res.end();
       
    });
});

server.listen(3000);