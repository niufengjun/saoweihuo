function company(){
	function amendSave(id){
		var amend = document.getElementById(id).children[2];
		function callBack(){
			amend.onclick = function (){
				this.innerText = "保存";
				this.className = "save";
				var content_1 = document.getElementById(id).children[1];
				var value_1 = content_1.innerHTML;
				content_1.className = 'center input';
				content_1.innerHTML = "<input type='text' value="+value_1+">";
				var save = document.getElementById(id).children[2];
				save.onclick = function (){
					this.innerText = "修改";
					this.className = "amend";
					var content_2 = document.getElementById(id).children[1];
					content_2.className = "center";
					var value_2=content_2.children[0].value;
					content_2.innerHTML = value_2;
					callBack();
				}
			}
		}
		callBack();
	}
	amendSave("shop_name");
	amendSave("shop_link");
	amendSave("person_name");
	amendSave("person_number");
	amendSave("mailbox");
	amendSave("wechat");
	amendSave("qq");
}
