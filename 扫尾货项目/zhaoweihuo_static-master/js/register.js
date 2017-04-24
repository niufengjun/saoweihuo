window.onload = function () {
	//手机号验证
	var phoneNumber = $('phone-number'); //手机号码输入框
	var phoneTip = $('phone-tip');
	phoneNumber.onblur = function () {
		checkMobile(this);
		if(!(checkMobile(this))){ 
	        phoneTip.style.display = "block";
	        phoneNumber.style.borderColor = "#E21918"
	    } else {
	    	phoneTip.style.display = "none";
	        phoneNumber.style.borderColor = "darkgray";
	    }
	}
	//同意协议按钮
	var loImg = $('sure-select');
	var sureImg = true;
	loImg.onclick = function () {
		if (sureImg) {
			loImg.src = "img/Check_Agreed.png";
		} else {
			loImg.src = "img/Check.png";
		}
		sureImg = !sureImg;
	}
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
	//采购商、供应商
	var loCus = $('customer');
	var loDiv = loCus.getElementsByTagName('div');
	loDiv[0].onclick = function () {
		this.style.backgroundColor = "#cb393c";
		loDiv[1].style.backgroundColor = "#999999";
	}
	loDiv[1].onclick = function () {
		this.style.backgroundColor = "#cb393c";
		loDiv[0].style.backgroundColor = "#999999";
	}
};
