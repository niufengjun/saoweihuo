function identity() {
	//模拟服务器数据
	var JSON = {
		"comType":[
		{comName:""},
		{yingyeImg:""},
		{shipinImg:""},
		{user:""},
		{idYes:""},
		{idNo:""},
		{bankName:""},
		{detailBank:""},
		{bankNumber:""},
		{openPerson:""},
		{isPass:false}
		],
		"perType":[
		{userName:""},
		{shipinImg:""},
		{idYes:""},
		{idNo:""},
		{bankName:""},
		{detailBank:""},
		{bankNumber:""},
		{isPass:true}
		]
	};
	//获取所有要操作的盒子
	var showResult = $('show_result');//实名认证结果显示DIV
	var company = getClass('identity_type')[0];//公司类型
	var person = getClass('identity_type')[1];//个人类型
	var userType = $('user_type');//企业名称或者姓名span
	var upBtn = getClass('up_btn');//所有上传按钮
	var upPic = getClass('picture');//所有上传图片框
	var inputName = $('input_name');//企业名称或姓名input
	var userName = $('user_name');//法人姓名input
	var loLicense = $('business_license');//营业执照显示隐藏控制
	var mainName = $('main_name');//法人姓名栏总DIV控制显示隐藏
	var IDyes = $('ID_yes');//身份证正面字面内容控制
	var IDno = $('ID_no');//身份证反面字面内容控制
	var bankName = $('bank_name');//所选银行名称
	var allBankName = $('detail_bank');//开户银行全称
	var bankNumber = $('bank_number');//银行账号
	var hideName = getClass('inport_all')[3];//开户人姓名显示隐藏控制
	var openUser = $('open_name');//开户人姓名
	var sureSub = $('sure_submit');//确认提交按钮
	var upInput = $('up_pic');//文件选择弹窗
	var loSuccessTip = $('identity_tip');//提交成功提示框
	var loSuccessColse = $('identity_close');//成功提示框按钮
	//点击提交按钮
	sureSub.onclick = function () {
		if (judgeSuccess()) {
			writtenJson();
			console.log(JSON);
			loSuccessTip.style.left = "24%";
			loSuccessTip.style.top = "50%";		
			loSuccessTip.style.display = "block";
		} else {
			alert("错误")
		}			
	}
	//json写入
	function writtenJson(){
		if (person.checked) {
			JSON.perType.userName = inputName.value;
			JSON.perType.shipinImg = upPic[1].children[0].src;
			JSON.perType.idYes = upPic[2].children[0].src;
			JSON.perType.idNo = upPic[3].children[0].src;
			JSON.perType.bankName = bankName.value;
			JSON.perType.detailBank = allBankName.value;
			JSON.perType.bankNumber = bankNumber.value;
		}
		if (company.checked) {
			JSON.comType.comName = inputName.value;
			JSON.comType.yingyeImg = upPic[0].children[0].src;
			JSON.comType.shipinImg = upPic[1].children[0].src;
			JSON.comType.idYes = upPic[2].children[0].src;
			JSON.comType.idNo = upPic[3].children[0].src;
			JSON.comType.user = userName.value;
			JSON.comType.bankName = bankName.value;
			JSON.comType.detailBank = allBankName.value;
			JSON.comType.bankNumber = bankNumber.value;
			JSON.comType.openPerson = openUser.value;
		}
	}
	//提交判断
	function judgeSuccess() {
		var flag = true ;
		if (company.checked) {
			if ((inputName.value == "") || (userName.value == "") || (bankName.value == "") || (allBankName.value == "") || (bankNumber == "") || (openUser.value == "")) {
				flag = false;
			}
			for (var i = 0 ; i < upPic.length ; i ++) {
				if (upPic[i].children[0].src == "img/up_error.jpg") {
					flag = false;
				}
			}
		}
		else if (person.checked) {
			if ((inputName.value == "") || (bankName.value == "") || (allBankName.value == "") || (bankNumber == "")) {
				flag = false;
			}
			for (var i = 0 ; i < upPic.length ; i ++) {
				if (i > 0 && (upPic[i].children[0].src == "img/up_error.jpg")) {
					flag = false;
				}
			}
		} 
		return flag;
	}
	//关闭弹出框
	loSuccessColse.onclick = function () {
		loSuccessTip.style.display = "none";
	}
	//上传按钮函数
	for (var i = 0; i < upBtn.length ; i++) {
		upBtn[i].index = i;
		upBtn[i].onclick = function () {
			upInput.click();
			var num = this.index;
			testImg(num);
		}		
	}
	//验证文件上传是否错误
	function testImg(num) {
		upInput.onchange = function () {
			var open = this.value.split("\\");
			var str = open[open.length-1];
			var path = "img/" + str;
			if (checkImg(path)) {
				upPic[num].children[0].src = path;
			} else {
				upPic[num].children[0].src = "img/up_error.jpg";
			}
			
		}
	}
	//检测图片格式
	function checkImg(obj) { 
		var strTemp = obj.split("."); 
		var strCheck = strTemp[strTemp.length-1]; 
		if((strCheck.toUpperCase()=='JPEG') || (strCheck.toUpperCase()=='PNG') || (strCheck.toUpperCase()=='GIP') || (strCheck.toUpperCase()=='JPG')) 
			{ 
				return true; 
			} else 
			{ 
				return false; 
			} 
	} 
	//单选按钮点击事件函数
	company.onclick = function () {
		showHide("show");
	}
	person.onclick = function () {
		showHide("hide");
	}
	function showHide(judge) {
		if (judge == "hide") {
			userType.innerHTML = "姓名：";
			loLicense.style.display = "none";
			mainName.style.display = "none";
			IDyes.innerHTML = "身份证正面：";
			IDno.innerHTML = "身份证反面：";
			hideName.style.display = "none";
		} else {
			userType.innerHTML = "企业名称：";
			loLicense.style.display = "block";
			mainName.style.display = "block";
			IDyes.innerHTML = "法人身份证正面：";
			IDno.innerHTML = "法人身份证反面：";
			hideName.style.display = "block";
		}
	}
}
