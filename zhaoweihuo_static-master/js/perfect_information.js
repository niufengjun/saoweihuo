window.onload = function () {
	//手机号验证
	var phoneNumber = $('validate-mobile'); //手机号码输入框
	phoneNumber.onblur = function () {
		checkMobile(this);
		if(!(checkMobile(this))){ 
	        phoneNumber.style.borderColor = "#E21918"
	   } else {
	        phoneNumber.style.borderColor = "darkgray";
	    }
	} 
	//邮箱验证
	var loEmail = $('validate-email'); //邮箱输入框
	loEmail.onblur = function () {
		checkEmail(this);
		if(!(checkEmail(this))){ 
	        loEmail.style.borderColor = "#E21918"
	   } else {
	        loEmail.style.borderColor = "darkgray";
	    }
	} 
	//QQ验证
	var loQQ = $('validate-QQ'); //QQ输入框
	loQQ.onblur = function () {
		checkQQ(this);
		if(!(checkQQ(this))){ 
	        loQQ.style.borderColor = "#E21918"
	   } else {
	        loQQ.style.borderColor = "darkgray";
	    }
	} 
};