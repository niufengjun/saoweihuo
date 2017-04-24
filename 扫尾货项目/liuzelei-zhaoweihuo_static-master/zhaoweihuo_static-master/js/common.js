function setInnerText(element,content) {
    //能力检测
    if(typeof element.innerText === "string") {
        element.innerText = content;
    }else{
        element.textContent = content;
    }
}

function getNextElement(element) {
    //能力检测
    if(element.nextElementSibling) {
        return element.nextElementSibling;
    }else{
        //找下一个节点，直到找到下一个元素为止
        var el = element.nextSibling;
        while(el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}

//previousSibling
function getPreviousElement(element) {
    if(element.previousElementSibling) {
        return element.previousElementSibling;
    }else{
        var el = element.previousSibling;
        while(el && 1 !== el.nodeType) {
            el = el.previousSibling;
        }
        return el;
    }
}

//firstElementChild 浏览器兼容性
function getFirstElement(element){
    if(element.firstElementChild) {
        return element.firstElementChild;
    }else{
        var el = element.firstChild;
        while(el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}

function getLastElement(element){
    if(element.lastElementChild) {
        return element.lastElementChild;
    }else{
        var el = element.lastChild;
        while(el && 1 !== el.nodeType) {
            el = el.previousSibling;
        }
        return el;
    }
}

function $(id) {
    return document.getElementById(id);
}

function getClass(classname){
    //如果浏览器支持，则直接返回
    if(document.getElementsByClassName)
    {
        return document.getElementsByClassName(classname);
    }
    else{
         // 不支持的 浏览器
        var arr = []; // 用于存放满足的数组
        var dom = document.getElementsByTagName("*");
        //alert(dom.length);
        for(var i=0;i<dom.length;i++)
        {
        	var str = dom[i].className.split(" ");//类名可能有很多个
        	for (var j = 0; j < str.length; j ++ ) {
        		 if(str[j] == classname)
	                {
	                    arr.push(str[i]);
	                }
        	}	               
        }
        return arr;
    }
}

function getStyle(obj,attr){
	if (obj.currentStyle) {
        return obj.currentStyle[attr];
	}
	else{
        return window.getComputedStyle(obj,null)[attr];
	}
}
//手机号码验证--> 使用方法（下同）举例：给input添加一个id,该id在失去焦点时验证：例子如下：
	//	请注意 ，这个例子是在另一个js文件的window.onload下使用，不是在这个js文件中使用
	//   var phoneNumber = $('phone-number'); //手机号码输入框
	//	phoneNumber.onblur = function () {
	//		checkMobile(this);
	//		if(!(checkMobile(this))){ 
	//	                    不满足条件执行语句
	//	    } else {
	//	    	满足条件执行语句
	//	    }
	//	}
function checkMobile(obj){ 
	    var sMobile = obj.value;
	    var reg = new RegExp(/^1[3|4|5|8|7][0-9]\d{8}$/);
	    if(!(reg.test(sMobile))){
	        return false; 
	    } else {
			return true;
	    }
	}
//QQ号码验证
function checkQQ(obj){ 
	    var sQQ = obj.value;
	    var reg = new RegExp(/^[1-9]\d{4,10}$/);
	    if(!(reg.test(sQQ))){
	        return false; 
	    } else {
			return true;
	    }
	}
//邮箱验证
function checkEmail(obj){ 
	    var sEmail = obj.value;
	    var reg = new RegExp(/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/);
	    if(!(reg.test(sEmail))){
	        return false; 
	    } else {
			return true;
	    }
	}
//密码验证 6-22位英文数字混合类型
function checkPassword(obj){ 
	    var sPassword = obj.value;
	    var reg = new RegExp(/^[a-zA-Z0-9]{6,22}$/);
	    if(!(reg.test(sPassword))){
	        return false; 
	    } else {
			return true;
	    }
	}