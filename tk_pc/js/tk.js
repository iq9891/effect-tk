$(function(){
	
	var tkFn = new TkFn({
		tk: '#tk',
		mask: '#mask',
		close: '#close'
	});

	$('#btn').click(function(){
		tkFn.show();
	});

	var tkFn2 = new TkFn({
		tk: '#tk2',
		mask: '#mask',
		close: '#close2'
	});

	$('#btn2').click(function(){
		tkFn2.show();
	});

	
});

/*
 * 弹框对象
 * tk : string 显示弹框的名字 如'#tk','.tk'
 * mask : string 遮罩层的名字 如'#mask','.mask'
 * close : string 关闭按钮的名字 如'#close','.close'
*/
function TkFn(json){
	
	if(!json.tk){console.log('填写弹框名字');return;}

	var _this = this;

	_this.tk = $(json.tk);
	_this.mask = $(json.mask || '#mask');
	_this.close = $(json.close || '#close');

	setMaskFn();
	
	_this.iPcTk = ($(window).height()-_this.iPcTk)/2;
	_this.tk.css({top:_this.iPcTk});

	$(document).on('scroll', tkScrollFn);
	$(window).on('resize', setMaskFn);
	
	//设置遮罩层的高度
	function setMaskFn(){
		_this.mask.css({height:$(document).height()});
	}
	//页面滚动触发改变弹框top
	function tkScrollFn(){
		_this.tk.animate({top:_this.iPcTk+$(window).scrollTop()},200);
	}
	_this.close.click(function(){
		_this.mask.hide();
		_this.tk.hide();
	});

};

TkFn.prototype.iPcTk = 0;
TkFn.prototype.show = function(){
	this.mask.show();
	this.tk.show();
};