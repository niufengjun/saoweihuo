window.onload = function () {
    function GetId(id){
                    return document.getElementById(id);
                }
                //封装一个闭包，来获取Json
                function GetJson(){
                    var oJson=[]
                    for(var i=0;i<30;i++){
                        var q={'img':'img/Sudoku_one.png',
                                'business':'上海好日子集团'+i,
                                'businesslogo':'img/Sudoku_firm.jpg',
                                'logo':'img/Sudoku_UK.jpg',
                                'ProductIntroduction':'九日柑橘味蜂蜜黄油薯片九日柑橘味蜂蜜黄油薯片',
                                'SurplusGoods':'200件起批',
                                'GoodsPrice':'￥22.99起'
                            }
                        oJson.push(q);
                    }
                    return function(){
                        return oJson;
                    }
                }
                //添加货物的 图片 价格 介绍 店铺名等
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
                    var Page=Math.ceil(aJson.length/8);
                    for(var i=0;i<Page;i++){
                        var al=document.createElement('li');
                        al.innerHTML=i+1;
                        GetId('Dg_Click_Event').appendChild(al);
                        al.index=i;
                        al.onclick=function(){
                            GetId('Dg_Click_Event').innerHTML='';
                            oUl.innerHTML='';
                            AddGoods(this.index*8);
                        }
                    }
                    GetId('Dg_Page').innerHTML=Page;
                    GetId('Next_Page').onclick=function(){
                        GetId('Dg_Click_Event').innerHTML='';
                        oUl.innerHTML='';
                        var sqrt=Target==aJson.length?add:Target;
                        AddGoods(sqrt);
                    }
                    GetId('Previous_Page').onclick=function(){
                        GetId('Dg_Click_Event').innerHTML='';
                        oUl.innerHTML='';
                        var sqrt=Target<=8?0:add-8;
                        AddGoods(sqrt);
                    }
                    GetId('Dg_Btn').onclick=function(){
                        var NewPage=parseInt(GetId('Page').value);
                        if(NewPage){
                            GetId('Dg_Click_Event').innerHTML='';
                            oUl.innerHTML='';
                            var sqrt=NewPage-1;
                            sqrt=sqrt<0?0:sqrt;
                            sqrt=sqrt>Page-1?Page-1:sqrt;
                            AddGoods(sqrt*8);
                        }
                    }
                })(0);
                function Create(cE,Cl,El,a){
                    var oLi=document.createElement(El);
                    oLi.className=Cl;
                    cE.appendChild(oLi);
                    if(El=='img'&&a)oLi.src=a;
                    else oLi.innerHTML=a;
                }

			var btns = document.getElementsByClassName("btn");
            var divs = document.getElementById("shop-divs").getElementsByClassName("public");
        
            for(var i= 0;i<btns.length;i++)
            {
                btns[i].index = i;  // 难点
                btns[i].onclick = function(){
                    shop(this.index);
                                  
                }

            }	
            function shop(value){
	            
	            for(var j=0;j<btns.length;j++)
	                    {
                        btns[j].className = "btn";
                        btns[j].style.color="gray";
                        btns[j].style.borderBottom="1px solid rgb(221, 221, 221)";
                        divs[j].style.display = "none";
                    }
                    // 当前的那个按钮 的添加 类名
                    btns[value].className = " btn";
                    btns[value].style.color="#cb363a";
                    btns[value].style.borderBottom="1px solid #cb363a";
                    //先隐藏下面所有的 div盒子
                    //留下中意的那个 跟点击的序号有关系的
                    divs[value].style.display = "block";
            }
           

}  