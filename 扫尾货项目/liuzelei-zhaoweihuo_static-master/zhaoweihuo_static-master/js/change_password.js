window.onload = function () {
	//获取验证码按钮事件
	var loCode = $('get-code');
	var sureCode = true;
	loCode.onclick = function () {
		if (sureCode) {
			sureCode = false;
			loCode.innerHTML = "已发送";
			setTimeout(function () {
				var num = 60;
				this.timer = setInterval(function () {
					num --;
					loCode.innerHTML = "重新发送("+num+")";
					if (num <=0 ) {
						loCode.innerHTML = "获取验证码";
						sureCode = true;
						clearInterval(this.timer);
					}
				},1000);
			},1000);
		}	
	}
}
