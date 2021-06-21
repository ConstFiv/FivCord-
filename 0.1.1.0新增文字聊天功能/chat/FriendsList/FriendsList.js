

let listUl = document.querySelectorAll("#listUl li");
for(let i =0;i<listUl.length;i++){
    let friendName = listA[i];
    // console.log(allFriends[friendName].name);
}
for(let i =0;i<listUl.length;i++){
    let friendName = listA[i];
    listUl[i].innerHTML = "<div style='background-color:"+allFriends[friendName].color+";' class='imgs'> <span style='font-size:"+allFriends[friendName].fontSize+"\
    ;'class='iconfont "+allFriends[friendName].imgs+"'></span></div>\
    <span class='friendsName'>"+friendName+"</span>";
   
}

