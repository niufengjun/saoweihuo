function address(){
	//模拟数据库 /*用户名、省、市、区、详细地址、电话、是否为默认地址*/
	var JSON = {"allAddress":[
		{user:"罗忠泽",
		bigArea:"贵州省",
		middleArea:"贵阳市",
		smallArea:"乌当区",
		detailArea:"高新路115号贵州师范学院",
		tele:"15761695277",
		isDefault:true}]
};
	var addDel = $('add_or_delete');//增删总盒子
	var delDiv = $('delete_data');//删除DIV
	var addDiv = $('add_data');//增加DIV
	var newAds = $('new_address');//"新建地址"按钮
	var closeAdd = $('close_add');//编辑和增加地址右上角关闭按钮
	var adduser = $('add_user');//添加页面收货人
	var addphone = $('add_mobile');//添加页面手机号
	var addAds = $('add_address');//添加页面详细地址
	var sure = $('add_sure');//添加页面保存按钮
	var notSure = $('not_sure');//添加页面取消按钮
	var setDefault = $('set_default');//添加页面设为默认按钮
	var addArea = $('add_allArea').children;//添加页面“所在区域地址”
	var setImg = $('changeImg');//添加界面“设为默认”判断
	var setDetailContent = $('address_content');//地址显示区域DIV
	var judge = false;//用于判断用户是否将添加地址或者汇改地址设为默认
	newAds.onclick = function () {
		newAdress();
	}
	//增加或修改页面设置默认地址函数
 	function resetImg() {
 		var boor = true;
 		judge = false;
	 	setImg.onclick = function () {
	 		if(boor) {
	 			setImg.src = "img/Check_Agreed.png";
	 			judge = true;
	 		} else {
	 			setImg.src = "img/Check.png";
	 			judge = false;
	 		}
	 		boor = !boor;
	 	}
 	}
 		
	//新建地址函数
	function newAdress(){
		resetImg();
		addDel.style.display = "block";
		addDiv.style.display = "block";
		sure.onclick = function () {
			checkAll();
			if (checkAll() && checkMobile(addphone)) {
				var json = new Object();
				json.user = adduser.value;
				json.bigArea = addArea[0].value;
				json.middleArea = addArea[1].value;
				json.smallArea = addArea[2].value;
				json.tele = addphone.value;
				json.detailArea = addAds.value;
				if (judge) {				
					for (var k in JSON.allAddress) {
						JSON.allAddress[k].isDefault = false;
					}
					json.isDefault = true;
				}
				JSON.allAddress.push(json);
				setDetailContent.innerHTML = "";
				createTable();
				resetContent();
			} else {
				return false;
			}
		}
		closeAdd.onclick = notSure.onclick = function () {
			resetContent();
		}
	}
	//重置修改增加页页面重置函数
	function resetContent () {
		adduser.style.borderColor = "#E3E3E3";
		addphone.style.borderColor = "#E3E3E3";
		addAds.style.borderColor = "#E3E3E3";
		addArea[0].style.borderColor = addArea[1].style.borderColor = addArea[2].style.borderColor = "#E3E3E3";
		adduser.value = "";
		addphone.value = "";
		addAds.value = "";
		addArea[0].value = "";
		addArea[1].value = "";
		addArea[2].value = "";
		setImg.src = "img/Check.png";
		addDel.style.display = "none";
		addDiv.style.display = "none";
	}
	//创建ul函数
	createTable();
	function createTable() {
		var frag = document.createDocumentFragment();
		for (var i = 0 ; i < JSON.allAddress.length;i++ ) {
			var ul = document.createElement('ul');
			ul.innerHTML = "<li class='receive_human'>" + JSON.allAddress[i].user +"</li><li class='detail_address'>" + JSON.allAddress[i].bigArea + JSON.allAddress[i].middleArea + JSON.allAddress[i].smallArea + JSON.allAddress[i].detailArea +"</li><li class='link_phone'>" + JSON.allAddress[i].tele + "</li><li class='operation'><a href='javascript:;' class='address_edit'>编辑</a><a href='javascript:;' class='address_delete'>删除</a></li><li class = 'set_address'>设为默认地址</li>";
			frag.appendChild(ul);	
		}
		setDetailContent.appendChild(frag);
		//添加点击编辑事件
		var editAds = getClass('address_edit');
		for (var i = 0; i < editAds.length; i++) {
			editAds[i].index = i;
			editAds[i].onclick = function () {
				editAdd(this,this.index);
			}
		}
		//添加点击删除事件
		var delBtn = getClass('address_delete');//操作中删除按钮
		for (var i = 0; i < delBtn.length; i++) {
			delBtn[i].index = i;
			delBtn[i].onclick = function () {
				deleteData(this,this.index);
			}
		}
		//添加设为默认地址 事件
		var setAddress = getClass('set_address');
		for (var i = 0 ; i < setAddress.length; i++) {
			setAddress[i].onclick = function () {
				setDelfaultAds(this);
			}
		}	
		for (var k in JSON.allAddress) {
			if (JSON.allAddress[k].isDefault) {
				setDelfaultAds(setAddress[k]);
			}
		}
	}
	//验证手机号
	addphone.oninput = function () {
		if (!(checkMobile(this))) {
			addphone.style.borderColor = "#CB393D";
		} else {
			addphone.style.borderColor = "#E3E3E3";
		}
	}
	//弹出修改界面函数
	function editAdd (obj,value) {
		resetImg();
		adduser.value = JSON.allAddress[value].user;
		addphone.value = JSON.allAddress[value].tele;
		addAds.value = JSON.allAddress[value].detailArea;
		addArea[0].value = JSON.allAddress[value].bigArea;
		addArea[1].value = JSON.allAddress[value].middleArea;
		addArea[2].value = JSON.allAddress[value].smallArea;
		if (JSON.allAddress[value].isDefault) {
			setImg.src = "img/Check_Agreed.png";
		} else {
			setImg.src = "img/Check.png";
		}
		addDel.style.display = "block";
		addDiv.style.display = "block";
		sure.onclick = function () {
			checkAll();
			if (checkAll() && checkMobile(addphone)) {
				JSON.allAddress[value].user = adduser.value;
				JSON.allAddress[value].tele = addphone.value;
				JSON.allAddress[value].detailArea = addAds.value;
				JSON.allAddress[value].bigArea = addArea[0].value;
				JSON.allAddress[value].middleArea = addArea[1].value;
				JSON.allAddress[value].smallArea = addArea[2].value;
				if (setImg.src == "img/Check_Agreed.png") {
					JSON.allAddress[value].isDefault = true;
				} else{
					JSON.allAddress[value].isDefault = false;
				}
				setDetailContent.innerHTML = "";
				createTable();
				resetContent();
			} else {
				return false;
			}			
		}
		closeAdd.onclick = notSure.onclick = function () {
			resetContent();
		}
		
	}
	//点击保存或者修改验证函数
	function checkAll(){
		var setBoor = true ;
		if (adduser.value == "") {
			setBoor = false;
			adduser.style.borderColor = "#CB393D";
		}
		if (addphone.value == "") {
			setBoor = false;
			addphone.style.borderColor = "#CB393D";
		}
		if (addAds.value == "") {
			setBoor = false;
			addAds.style.borderColor = "#CB393D";
		}
		if ((addArea[0].value == "") || (addArea[1].value == "") || addArea[2].value == "") {
			setBoor = false;
			addArea[0].style.borderColor = addArea[1].style.borderColor = addArea[2].style.borderColor = "#CB393D";
		}
		return setBoor;
	}
		
	//收获地址中操作“删除按钮事件”
	function deleteData(obj,value) {
		addDel.style.display = "block";
		delDiv.style.display = "block";
		whetherDel(obj,value);
	}
	//弹出删除界面函数
	function whetherDel(obj,value) {
		var delInp = delDiv.getElementsByTagName('input');
		var delA = delDiv.getElementsByTagName('a')[0];
		delInp[0].onclick = function () {
			obj.parentNode.parentNode.remove();
			JSON.allAddress.splice(JSON.allAddress[this.index],1);
			addDiv.style.display = "none";
			addDel.style.display = "none";
		}
		delA.onclick = delInp[1].onclick = function () {
			addDiv.style.display = "none";
			addDel.style.display = "none";
		}		
	}
	//设置为默认地址
	function setDelfaultAds(obj) {
		var setAddress = getClass('set_address');
		for (var i = 0 ; i < setAddress.length; i++) {
			setAddress[i].style.color = "#447FCE";
			setAddress[i].innerHTML = "设为默认地址";
		}
		obj.style.color = "#CB393D";
		obj.innerHTML = "默认地址";
	}
	 	
}
