$(function(){
	$('.submit').tap(function(){
		var name,mobile,car_type,address,env_note,type_note,note;
		var Iphone = /0?(13|14|15|17|18)[0-9]{9}/;
		if($('#name').val()){
			name = $('#name').val();
		}else{
			error('请输入姓名');
			return;
		}
		if($('#car_type').val()){
			car_type = $('#car_type').val();
		}else{
			error('请输入车型');
			return;
		}
		if($('#mobile').val() && Iphone.test($('#mobile').val())){
			mobile = $('#mobile').val();
		}else{
			error('电话格式不正确');
			return;
		}
		if($('#address').val()){
			address = $('#address').val();
		}else{
			error('请输入地址');
			return;
		}
		if($('.quart').first().attr('checked') || $('.quart').last().attr('checked')){
			env_note = $('.quart:checked').parent().find('.scien-text').text();
		}else{
			error('请选择小区环境');
			return;
		}
		if($('.type-note').first().attr('checked') || $('.type-note').last().attr('checked')){
			type_note = $('.type-note:checked').parent().find('.scien-text').text();
		}else{
			error('请选择建桩类型');
			return;
		}
		note = $('#textarea').val();
		console.log(name,mobile,car_type,address,env_note,type_note,note)
	})
	function error(text){
		$('.error').text(text).removeClass('active-no').addClass('active');
		var t = setTimeout(function(){
			$('.error').removeClass('active').addClass('active-no');
			clearTimeout(t);
		},750)
	}
	$(document).on('touchstart',function(){
		$('.error').removeClass('active').addClass('active-no');
	})
})
