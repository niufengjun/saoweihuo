window.onload = function(){
	PaySwith();
	Json();
	(function(){
			var oUser=Json()().userRealName[0].Bond;
			if(oUser=='Yes'){
				GetBlicl('Dg_Success','block',2);
				GetBlicl('Dg_bank','none');
			}
			else{
				GetBlicl('Dg_Success','none');
				GetBlicl('Dg_bank','block',1);
			}
		})();
	CooperativeBank('SavingsBank');
	CooperativeBank('CreditBank');
	Bond();

}
// 支付方式切换
function PaySwith(){
	var oJHpay_way = document.getElementById('JHpay_way');
	var oJHbank = document.getElementsByClassName('JHbank');
	var olis = oJHpay_way.children[0].children;
	for(i=0;i < olis.length;i++){
		olis[i].index = i;
		olis[i].onclick = function(){
			for(var j=0;j < olis.length;j++){
				olis[j].className="";
				oJHbank[j].style.display="none";
			}
			this.className="JHdec";
			oJHbank[this.index].style.display="block";
		}
	}
}
// 封装显示隐藏模块
function GetBlicl(id,Sty,j){
	$(id).style.display=Sty;
	if(j){
		var chm_progress_bars=document.getElementsByClassName('chm_submit');
		var childs=chm_progress_bars[j].children;
		for (var i = 0; i < childs.length; i++) {
			childs[i].style.backgroundColor="#cb393d";
			childs[i].style.color="#fff";
		}
	}
	
}
// 模拟用户信息数据   
function Json(){
	var aJson={
			'userId':'3101891',
			'userName':'139144556',
			'userRealName':[{
				'Bond':'Yes',  				//or   'No'   用户是否支付保证金
				'BankNumber':'5225226443695558571',	//用户银行卡号
				'BankName':'工商银行',     	//用户卡银行名
                'AuditStatus':"等待审核",// 'AuditStatus':"等待审核"    'AuditStatus':"审核成功"    'AuditStatus':"审核失败"
                'BankFullName':"使得",
                'DoLicense':"file:///C:/Users/%E8%93%9D%E7%A7%91%E6%95%99%E8%82%B2/Desktop/u=1235871335,1479785069&fm=117&gp=0.gif",
                'FoodLicense':"file:///C:/Users/%E8%93%9D%E7%A7%91%E6%95%99%E8%82%B2/Desktop/u=1235871335,1479785069&fm=117&gp=0.gif",
                'Group':"公司",
                'IdBack':"file:///C:/Users/%E8%93%9D%E7%A7%91%E6%95%99%E8%82%B2/Desktop/u=1235871335,1479785069&fm=117&gp=0.gif",
                'IdPositive':"file:///C:/Users/%E8%93%9D%E7%A7%91%E6%95%99%E8%82%B2/Desktop/u=1235871335,1479785069&fm=117&gp=0.gif",
                'LawName':"sad",
                'Name':"阿斯蒂芬"
			}]
		};
	return function(){
		return aJson;
	}
}
//合作银行信息  
function CooperativeBank(obj){
	var BankJson=[]
	for(var i=0;i<8;i++){
		BankJson.push({'BankName':'工商银行','logo':'img/bank.png'});//循环创建银行信息
	}
	for (var i = 0; i < BankJson.length; i++) {
		var oImg=Add('img');
		oImg.src=BankJson[i].logo;
		var oLi=Add('li');
		oLi.className='Banks';
		oLi.appendChild(oImg);
		var oA=Add('a');
		oA.title=BankJson[i].BankName;
		oA.appendChild(oLi);
		$(obj).appendChild(oA);
	}
}
function Add(obj){
 	return document.createElement(obj);
}
//支付保证金  
function Bond(){
	var Banks=getClass('Banks');
	var oTitle=null;
	for (var i = 0; i < Banks.length; i++) {
		Banks[i].onclick=function(){
			for (var i = 0; i < Banks.length; i++) {
				Banks[i].style.borderColor='#e3e3e3';
			}
			this.style.borderColor='red';
			oTitle=this.parentNode.title;//银行名称
		}
	}
	var oBank=Json()();
	//支付银行验证   暂时只有银行匹配验证 和 银行账号位数验证
	$('Dg_Payment').onclick=function(){
		if (oTitle==oBank.userRealName[0].BankName||oTitle==oBank.userRealName[0].PBankName) {
			if (oBank.userRealName[0].BankNumber.length==19||oBank.userRealName[0].PBankNumber.length==19) {
				GetBlicl('Dg_Success','block',2);
				GetBlicl('Dg_bank','none');

				var chm_progress_bars=document.getElementsByClassName('chm_submit');
				var childs=chm_progress_bars[1].children;
				for (var i = 0; i < childs.length; i++) {
					childs[i].style.backgroundColor="#fff";
					childs[i].style.color="#666";
				}
				var SubmitData=Json()().userRealName[0].Bond='Yes';

				//等待发送的Json数据SubmitData
				SubmitData.Bond='Yes';


			}
		}
	}
}



