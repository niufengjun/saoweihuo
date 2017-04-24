function GetId(id){
	return document.getElementById(id);
}
//封装一个闭包，来获取Json
function GetJson(){
	var oJson=[]
	for(var i=0;i<30;i++){
		var q={'img':'img/111.png',
				'business':'上海好日子集团'+i,
				'businesslogo':'img/222.png',
				'logo':'img/333.png',
				'ProductIntroduction':'九日柑橘味蜂蜜黄油薯片九日柑橘味蜂蜜黄油薯片九日柑橘味蜂蜜黄油薯片',
				'SurplusGoods':'200件起批',
				'GoodsPrice':'￥22.99起',
				'Url':'commodity.html',
				'aUrl':'store_index.html'
			}
		oJson.push(q);
	}
	return function(){
		return oJson;
	}
}
//添加货物的 图片 价格 介绍 店铺名等
window.onload=function(){
	(function AddGoods(add){
		//闭包调出Json
		var aJson=GetJson()();
		var oUl=GetId('Dg_Content_Sort');
		//为底部点击事件
		var Target=add+8>aJson.length?aJson.length:add+8;
		var q=0;
		for(var j=add;j<Target;j++){ 
			var oLi=document.createElement('li');
			oLi.style.top=(parseInt(q/4))*374+'px';
			oLi.style.left=q%4*254+'px';
			q++;
			//添加
			Create(oLi,'Dg_Sort_Img','img',aJson[j].img);
			Create(oLi,'Dg_Span_left','span',aJson[j].GoodsPrice);
			Create(oLi,'Dg_Span_right','span',aJson[j].SurplusGoods);
			Create(oLi,'Dg_Span_P','span',aJson[j].ProductIntroduction);
			Create(oLi,'Dg_Img_left','img',aJson[j].businesslogo);
			Create(oLi,'Dg_Span_B','span',aJson[j].business);
			Create(oLi,'Dg_Img_right','img',aJson[j].logo);
			
			oUl.appendChild(oLi);
			
		}
		//创建li并插入ol元素中
		var Page=Math.ceil(aJson.length/8);
		for(var i=0;i<Page;i++){
			var al=document.createElement('li');
			al.innerHTML=i+1;
			al.className='Dg_Col';
			GetId('Dg_Click_Event').appendChild(al);
			
		}
		//给元素内容标识   共Page页   内容
		GetId('Dg_Page').innerHTML=Page;

		// 下一页点击事件
		GetId('Next_Page').onclick=function(){
			GetId('Dg_Click_Event').innerHTML='';
			oUl.innerHTML='';
			var sqrt=Target==aJson.length?add:Target;
			AddGoods(sqrt);
			Colr(parseInt(sqrt/8));
		}
		// 上一页点击事件
		GetId('Previous_Page').onclick=function(){
			GetId('Dg_Click_Event').innerHTML='';
			oUl.innerHTML='';
			var sqrt=Target<=8?0:add-8;
			AddGoods(sqrt);
			Colr(parseInt(sqrt/8));
		}
		//输入框确认 点击事件事件
		GetId('Dg_Btn').onclick=function(){
			var NewPage=parseInt(GetId('Page').value);
			if(NewPage){
				GetId('Dg_Click_Event').innerHTML='';
				oUl.innerHTML='';
				var sqrt=NewPage-1;
				sqrt=sqrt<0?0:sqrt;
				sqrt=sqrt>Page-1?Page-1:sqrt;
				AddGoods(sqrt*8);
				Colr(sqrt);
			}
		}

		//循环添加 网页的链接
		var oClickImg=document.getElementsByClassName('Dg_Sort_Img');
		var oClickP=document.getElementsByClassName('Dg_Span_P');
		var oClickB=document.getElementsByClassName('Dg_Span_B');
		for (var i = 0; i < oClickImg.length; i++) {
			oClickP[i].onclick=oClickImg[i].onclick=function(){
				window.location = aJson[i].Url;
			}
			oClickB[i].onclick=function(){
				window.location = aJson[i].aUrl;
			}
		}
		//页码点击切换切换页面
		var aCol=document.getElementsByClassName('Dg_Col');
		aCol[0].style.backgroundColor='#CD3D41';
		aCol[0].style.color='#FEFEFE';
		for (var e = 0; e < aCol.length; e++) {
			aCol[e].index=e;
			aCol[e].onclick=function(){
				GetId('Dg_Click_Event').innerHTML='';
				oUl.innerHTML='';
				AddGoods(this.index*8);
				Colr(this.index);
			}
		}
	})(0);
}

//封装的创建元素
function Create(cE,Cl,El,a){
	var oLi=document.createElement(El);
	oLi.className=Cl;
	cE.appendChild(oLi);
	if(a.length>=23){
		a=/^.{23}/.exec(a)+'...';
	}
	if(El=='img'&&a)oLi.src=a;
	else oLi.innerHTML=a;
}
//封装底部 切换时页码的切换
function Colr(iE){
	var aCol=document.getElementsByClassName('Dg_Col');
	if(iE){
		for (var q = 0; q < aCol.length; q++) {
				aCol[q].style.backgroundColor='#fff';
				aCol[q].style.color='#313031';
			}
		aCol[iE].style.backgroundColor='#CD3D41';
		aCol[iE].style.color='#FEFEFE';
	}
}