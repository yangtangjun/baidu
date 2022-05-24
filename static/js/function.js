function current() {
    var d = new Date(),
        str = '';
    str += d.getHours() + ':';
    str += d.getMinutes() + ':';
    str += d.getSeconds() + '';
    return str;
}
var time = document.querySelector('.time');
setTimeout(()=>{
    time.innerHTML = current();
},10)
setInterval(()=>{
    time.innerHTML = current();
},1000)

function search(){
    if ($('#text').val() == ''){
        window.location = './index.html'
    }else {
        window.open("https://www.baidu.com/s?wd=" + $('#text').val(),"_blank")
    }
    $('#text').val('')
}
$(document).keydown(function (event) {
    if (event.keyCode == 13) {
        search()
    }
});

$('.section .warp .search .click').click(()=>{
    search()
})

setTimeout(()=>{
    $('#text').focus()
},10)

$.ajax({
    type: "GET",
    url: "https://api.uixsj.cn/hitokoto/get",
    success: function (data) {
        $('.ajax').html('「&nbsp;'+data+'&nbsp;」');
    }
})
