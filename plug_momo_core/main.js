function get_data_momoid_list(){

    var data_momoid_list = new Array();
    $(".liveRoomLists.liveRoomList.clearfix.liveShow-list.noLiveRoomList").children().each(function(){
        data_momoid_list.push($(this).attr("data-momoid"));
    });

    return data_momoid_list
}
function get_star_number(){
    var starNum = $(".starNum.star").text();
    
    console.log('该主播的星光值是'+starNum);
}
//这个sleep方法会通过消耗cpu到达效果，但会引起浏览器暂停工作
// function sleep(n) {
// var start = new Date().getTime();
// while(true)  if(new Date().getTime()-start > n) break;
// }
//依然会导致data_momoid_list为空
// for(click_see_more=0;click_see_more<6;click_see_more++){
//     $('.seeMore').click();
//     sleep(2000);
// }
// 
function see_more(data_momoid_list){
    $('.seeMore').click();
    var new_data_momoid_list = get_data_momoid_list();
    console.log(new_data_momoid_list);
    for(j=data_momoid_list.length;j<new_data_momoid_list.length;j++){
       data_momoid_list.push(new_data_momoid_list[j]);
    }
}

$(document).ready(function(){ 
 console.log('dom加载完毕');
});

function whole_code_entrance(){

var data_momoid_list = get_data_momoid_list();
var i = 0;

// for(i=0; i<data_momoid_list.length; i++){

function main(){
console.log(data_momoid_list);
console.log('点击第'+i+'个主播');
var tag="li[data-momoid='"+data_momoid_list[i++]+"']";

console.log('该标签就是主播的id号');
console.log(tag);

// data_momoid_list = see_more(data_momoid_list);
setTimeout(function(){$(tag).click();},1000);
setTimeout('get_star_number()',3000);

if(i>=data_momoid_list.length){
    clearInterval(start_main);
}
}
// }
var start_main = setInterval(main, 5000);
}


var start_main = setInterval(function(){
    $('.seeMore').click();
}, 2000);
setTimeout(function(){
    clearInterval(start_main);
},10000);
setTimeout('whole_code_entrance()',1100);