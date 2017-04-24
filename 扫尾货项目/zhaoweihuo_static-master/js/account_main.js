window.onload = function () {
	changeMobile();//更换手机号码 change_mobile.js 函数调用
	address();//收货地址模块函数调用
	company();//完善信息部分函数调用
	identity();//认证信息部分函数调用
	var loIndex = $('account_index');//获取账号管理li
	var loWait = $('wait_todo'); //获取待办事项DIV
	var loUl = $('account_menu');//获取账号管理ul
	var loLis = loUl.children; //获取账号管理下所有的li
	var loRecAds = $('receive_address');//获取收货地址DIV
	var loAddress = $('address_li');//获取菜单栏中收货地址li
	var loInfo = $('perfect_info');//获取完善信息li
	var loCompany = $('company_new');///获取公司信息DIV
	var loIdentity = $('identity_index');//获取实名认证DIV
	var loIdentityLi = $('identity_li');//获取实名认证li
	var loPassword = $('reset_password');//获取重置密码li
	loPassword.onclick = function (event) {
		var ev = event || window.event;
		ev.stopPropagation();
	}
	loIdentityLi.onclick = function (event) {
		divShow(loIdentity,event);
		for (var i = 0; i < loLis.length; i ++) {
			loLis[i].className = "";
		}
		this.className = "account_active";
	}
	loInfo.onclick = function (event) {
		divShow(loCompany,event);
		for (var i = 0; i < loLis.length; i ++) {
			loLis[i].className = "";
		}
		this.className = "account_active";
	}
	loIndex.onclick = function (event) {//点击“账号管理”函数
		divShow(loWait,event);
		for (var i = 0; i < loLis.length; i ++) {
			loLis[i].className = "";
		}
	}
	loAddress.onclick = function () {
		divShow(loRecAds,event);
		for (var i = 0; i < loLis.length; i ++) {
			loLis[i].className = "";
		}
		this.className = "account_active";
	}
};
