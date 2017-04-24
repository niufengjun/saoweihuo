window.onload = function () {
	var phoneNumber = document.getElementById('phone-number'); //手机号码输入框
	var phoneTip = document.getElementById('phone-tip');
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
};
