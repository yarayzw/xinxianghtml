$(document).ready(function() {
    // alert($('#preface_span').offset().top);
    // alert($('#end_span').offset().top);
    $('#head_img_div').hide();
    $('#head_img').attr('src',img_url);
    $('#head_img').show();

    let myDate = new Date();
    let qr_code_s = qr_code.split('@@@');
    let update_at_c = (new Date(update_at)).getTime() / 1000;

    let year=myDate.getFullYear();        //获取当前年
    let month=myDate.getMonth()+1;   //获取当前月
    let date=myDate.getDate();            //获取当前日


    let h=myDate.getHours();              //获取当前小时数(0-23)
    let m=myDate.getMinutes();          //获取当前分钟数(0-59)
    let s=myDate.getSeconds();
    let now = year+'-'+getNow(month)+"-"+getNow(date);
    let now_c = (new Date(now)).getTime() / 1000;

    let time = (now_c - update_at_c) / 24/3600;

    if (time >= qr_code_s.length) {
        time = time % qr_code_s.length;
    }
    $('#qr_code_bottom').attr('src',qr_code_s[time]);
    $('#qr_code_rigth').attr('src',qr_code_s[time]);


});


// function ipTjTime(type) {
//     $.ajax({
//         url: base_url + '/index/commodity/setTime',
//         data: {
//             'nw_ip':nw_ips,
//             'type': type,
//             'id': list_id
//         },
//         method: "POST",
//         dataType: "json"
//     });
// }
// setTimeout(function () {
//     ipTjTime(1);
// },10000);
// setTimeout(function () {
//     ipTjTime(2);
// },20000);
// setTimeout(function () {
//     ipTjTime(3);
// },30000);
// setTimeout(function () {
//     ipTjTime(4);
// },40000);
// setTimeout(function () {
//     ipTjTime(5);
// },50000);

// setTimeout(function () {
//     ipTjTime(7);
// },70000);
// setTimeout(function () {
//     ipTjTime(8);
// },80000);
// setTimeout(function () {
//     ipTjTime(9);
// },90000);
// setTimeout(function () {
//     ipTjTime(10);
// },100000);
// setTimeout(function () {
//     ipTjTime(11);
// },110000);
// setTimeout(function () {
//     ipTjTime(12);
// },120000);
// setTimeout(function () {
//     ipTjTime(13);
// },130000);
// setTimeout(function () {
//     ipTjTime(14);
// },140000);
// setTimeout(function () {
//     ipTjTime(15);
// },150000);
// setTimeout(function () {
//     ipTjTime(16);
// },160000);
// setTimeout(function () {
//     ipTjTime(17);
// },170000);
// setTimeout(function () {
//     ipTjTime(18);
// },180000);
// setTimeout(function () {
//     ipTjTime(19);
// },190000);
// setTimeout(function () {
//     ipTjTime(20);
// },200000);