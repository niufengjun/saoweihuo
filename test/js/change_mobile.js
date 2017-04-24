function changeMobile() {
	var allMobile = getClass('content');//获取所有更换号码DIV
	var clickChange = $('change_mobile');//获取菜单栏“更改手机号码”li
	var loUl = $('account_menu');//获取账号管理ul
	var loLis = loUl.children; //获取账号管理下所有的li
	//点击显示第一个DIV界面
	clickChange.onclick = function () {
		sureCode = true;
		divShow(allMobile[0],event,clickSend());
		for (var i = 0; i < loLis.length; i ++) {
			loLis[i].className = "";
		}
		this.className = "account_active";
	}
	var firstNext = getClass('sub_next')[0];//获取第一个页面的下一步按钮
	//点击第一个页面的“下一步”执行事件
	firstNext.onclick = function () {
		sureCode = true;
		divShow(allMobile[1],event);
	}
	var secondNext = getClass('sub_next')[1];//获取第二个页面的下一步按钮
	//点击第一个页面的“下一步”执行事件
	secondNext.onclick = function () {
		divShow(allMobile[2],event,clickSend());
	}
	//获取验证码按钮事件
	function clickSend() {
		var btn = getClass('get_code');
		for (var j = 0 ; j < btn.length; j++) {
			if(btn[j].timer) {
				console.log(1);
				clearInterval(btn[j].timer);
				btn[j].innerHTML = "获取验证码";
			}	
		}
		for (var i = 0 ; i < btn.length; i++) {
			btn[i].onclick = function () {
				sendCode(this);
			}
		}
		//手机号验证
		var phoneNumber = $('phone_number'); //手机号码输入框
		phoneNumber.onblur = function () {
			checkMobile(this);
			if(!(checkMobile(this))){ 
		        phoneNumber.style.borderColor = "#E21918"
		   } else {
		        phoneNumber.style.borderColor = "darkgray";
		    }
		}
	}

	
}
//控制右部DIV显示隐藏函数
function divShow(obj,event,fn) {
	var loRight = $('lo_right');
	var ev = event || window.event;
	for (var i = 0; i < loRight.children.length; i++) {
		loHide = loRight.children[i];
		loHide.style.display = "none";
	}
	obj.style.display = "block";
	if (fn) {
		fn();
	}
	ev.stopPropagation(); //阻止事件冒泡
}
//发送验证码
var sureCode = true;
function sendCode(obj) {
	if (sureCode) {
		sureCode = false;
		obj.innerHTML = "已发送";
		clearInterval(obj.timer);
		setTimeout(function () {
			var num = 60;
			obj.timer = setInterval(function () {
				num --;
				obj.innerHTML = "重新发送("+num+")";
				if (num <=0 ) {
					obj.innerHTML = "获取验证码";
					sureCode = true;
					clearInterval(obj.timer);
				}
			},1000);
		},1000);
	}
}