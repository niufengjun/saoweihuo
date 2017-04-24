window.onload=function(){
	function $(id){
		return document.getElementById(id);
	}
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
        var createJson1=[
        {"time":"2016-11-11 12:00:00",
        "income":"900.00",
        "num":"SAJSHDIJSKSOSNS",
        "condition":"待发货",
        "look":"查看"
        },
    ];
    createCell(createJson);
    // 创建表格部分封装函数
    function createCell(createJson){
        var createTable=document.createElement("table");
        createTable.cellSpacing="0";
        table_content.appendChild(createTable);
    // console.log(createJson.length);
        for(var i=0;i<createJson.length;i++){
            var createTr=document.createElement("tr");
            createTable.appendChild(createTr);
            for(var key in createJson[i]){
                // console.log(createJson[i][key]);
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
}