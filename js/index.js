$(function(){
    $('#fullpage').fullpage({
        // navigation: true,
        navigationPosition:"right",
        navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
        // afterLoad: function(anchorLink, index){
        //     if(index==1){
        //         $("section").find(".bg22").css({
        //             transform:"translate(0,-400px)",
        //             transition:"transform 1s ease"
        //         })
        //     }
        // }
    });
});