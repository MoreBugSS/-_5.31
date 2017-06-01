//首页
$("section .sec_cont .cont_p").hide();
$(".sec_conts").find(".cont_p").hide();
$("section .sec_cont>a").toggle(function(){
	var	_index=$(this).index;
	$(this).siblings(".cont_p").show().parent().siblings().find(".cont_p").hide();
},function(){
	var	_index=$(this).index;
	$(this).siblings(".cont_p").hide();
})
$(".with").click(function(){
	if($(this).html()=="+关注"){
		$(this).html("取消关注").css({
			"color":"red",
			"border":"1px solid red"
		});
	}else if($(this).html()=="取消关注"){
		$(this).html("+关注").css({
			"color":"#999999",
			"border":"1px solid #999999"
		});
	}
})
$(".sec_conts>a").toggle(function(){
	$(this).siblings(".cont_p").show().parent().siblings().find(".cont_p").hide();
},function(){
	$(this).siblings(".cont_p").hide();
})
