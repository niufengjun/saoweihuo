window.onload=function(){
	function $(id){
		return document.getElementById(id);
	};
	var table_content=$("table_content");
    var createJson=[
        {"time":"2016-11-11 12:00:00",
        "income":"900.00",
        "num":"SAJSHDIJSKSOSNS",
        "condition":"待发货",
        "look":"查看"
        },
        {"time":"2016-11-11 12:00:00",
        "income":"900.00",
        "num":"SAJSHDIJSKSOSNS",
        "condition":"已收货",
        "look":"查看"
        },
        {"time":"2016-11-11 12:00:00",
        "income":"-900.00",
        "num":"SAJSHDIJSKSOSNS",
        "condition":"退款",
        "look":"查看"
        },
        {"time":"2016-11-11 12:00:00",
        "income":"900.00",
        "num":"SAJSHDIJSKSOSNS",
        "condition":"交易成功",
        "look":"查看"
        },
        {"time":"2016-11-11 12:00:00",
        "income":"900.00",
        "num":"SAJSHDIJSKSOSNS",
        "condition":"已关闭",
        "look":"查看"
        },
        {"time":"2016-11-11 12:00:00",
        "income":"900.00",
        "num":"SAJSHDIJSKSOSNS",
        "condition":"已发货",
        "look":"查看"
        }
    ];
    createCell(createJson);
    // 创建表格部分封装函数
    function createCell(createJson){
        var createTable=document.createElement("table");
        createTable.cellSpacing="0";
        table_content.appendChild(createTable);
        for(var i=0;i<createJson.length;i++){
            var createTr=document.createElement("tr");
            createTable.appendChild(createTr);
            for(var key in createJson[i]){
                var createTh=document.createElement("th");
                createTh.innerHTML="<p>"+createJson[i][key]+"</p>";
                createTr.appendChild(createTh);
                if(createJson[i][key]=="待发货"){
                    createTh.innerHTML="<p style='color:red'>"+createJson[i][key]+"</p>"
                };
                if(createJson[i][key]=="查看"){
                    createTh.innerHTML="<a  href='#' style='color:#568bd3'>"+createJson[i][key]+"</a>"
                };
                if(createJson[i][key]=="已发货"){
                    createTh.innerHTML="<p style='color:#568bd3'>"+createJson[i][key]+"</p>"
                };
                if(createJson[i][key]=="-900.00"){
                    createTh.innerHTML="<p style='color:red'>"+createJson[i][key]+"</p>"
                };
            };
        };
    }
    // 翻页部分
    var page=$("page");
    var getUl=page.children[0];
    var getA=getUl.children;
    // 遍历所有的a,有多少a就有多少li
    for(var i=0;i<getA.length;i++){
        var getLi=getA[i].children[0];
        getA[i].children[0].index=i;
        var pageUp=$("pageUp");
        var pageDown=$("pageDown");
        
        // 1、2、3、4、5数字跳转
        getLi.onclick=function(){
            for(var j=0;j<getA.length;j++){
                getA[j].children[0].style.backgroundColor=""
                getA[j].children[0].style.color=""
            }
            this.style.backgroundColor="red";
            this.style.color="white";
            table_content.children[0].remove();
            createCell(createJson);
            var that=this;
             // 返回上一页
        pageUp.onclick=function(){
                --that.index;
                for(var a=0;a<getA.length;a++){
                    getA[a].children[0].style.backgroundColor=""
                    getA[a].children[0].style.color=""
                }
                getA[that.index].children[0].style.backgroundColor="red";
                getA[that.index].children[0].style.color="white";
                console.log(that.index);
                if(that.index==0){
                    pageUp.disabled=true;      
                }
            }
            pageUp.disabled=false;
        // 进入下一页
        pageDown.onclick=function(){ 
                ++that.index;
                for(var a=0;a<getA.length;a++){
                    getA[a].children[0].style.backgroundColor=""
                    getA[a].children[0].style.color=""
                }
                getA[that.index].children[0].style.backgroundColor="red";
                getA[that.index].children[0].style.color="white";  
                if(that.index>=4){
                    pageDown.disabled=true;                  
                }
            }
        pageDown.disabled=false;
        // 输入框填写页数，点击确定跳转
        var confirm=$("confirm");
        var txt=$("txt");
        var reg=/[12345]{1}/;
        confirm.onclick=function(){
            var gotoPage=txt.value;
            if (!reg.test(gotoPage)){
                confirm.disabled=true;
            }
            for(var b=0;b<getA.length;b++){
                getA[b].children[0].style.backgroundColor=""
                getA[b].children[0].style.color=""
            }
            getA[Number(txt.value)-1].children[0].style.backgroundColor="red";
            getA[Number(txt.value)-1].children[0].style.color="white";
            that.index=Number(txt.value)-1;
        }

        } //1、2、3、4、5数字跳转结束  
    }//遍历所有的a,有多少a就有多少li结束
        
}
