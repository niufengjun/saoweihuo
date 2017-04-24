window.onload = function () {
	changeMobile();//更换手机号码 change_mobile.js 函数调用
	var loIndex = $('account_index');//获取账号管理li
	var loWait = $('wait_todo'); //获取待办事项DIV
	var loUl = $('account_menu');//获取账号管理ul
	var loLis = loUl.children; //获取账号管理下所有的li
	loIndex.onclick = function (event) {//点击“账号管理”函数
		divShow(loWait,event);
		for (var i = 0; i < loLis.length; i ++) {
			loLis[i].className = "";
		}
	}
};
