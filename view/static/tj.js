$(function () {
    ipTj()
});

function ipTj() {
    let prevurl=document.referrer;
    $.ajax({
        url: base_url + '/index/commodity/setVisitStatistics',
        data:{
            'prevurl': prevurl,
            'id': list_id
        },
        method:"POST",
        dataType:"json"
    });
}