 window.onload = function()
    {
      // 所有分类页面切换开始
    	var navChange = document.getElementById("nav_change");
    	var lis = navChange.children[0].children[0].children;
    	var divs = navChange.getElementsByClassName('public');
    	var timer = null;
    	for (var i = 0; i < lis.length; i++) 
    	{
    		lis[i].index = i;
    		lis[i].onclick = function()
    		{
    			show(this.index);
    		}
    	};
    	function show(a)
    	{
    		index = a;
    		var first = 0;
    		for(var j = 0; j < lis.length; j++)
    		{
    			lis[j].className = "";
    			divs[j].style.display = "none";
    		}
    		lis[index].className = "SortFirst";
    		divs[index].style.display = "block";
      }// 所有分类页面切换结束
    		

          // 大小图转换展示开始
          var box = document.getElementById("showBox");
          function fn(liid,bg)
          {  // 封装函数  参数的传递
                var obj = document.getElementById(liid);
                obj.onmouseover = function()
                {
                    box.style.backgroundImage = bg;
                }
          }
            fn("li01","url(img/play01.png)"); // 实参  调用函数
            fn("li02","url(img/play02.png)");
            fn("li03","url(img/play03.png)");
            fn("li04","url(img/play04.png)");
            fn("li05","url(img/play05.png)");  
            // 大小图转换展示结束
      // 数量加减开始      
     function $(id){return document.getElementById(id)}
     var sub=$("sub");
     var add=$("add");
     var amo=$("amo")
     var i=amo.value;
     console.log(i);
    add.onclick = function(){
        var i=amo.value;
        i++;
       amo.value=i;
      }
    sub.onclick = function(){
       var i = amo.value;
      i--;
      if (i<=0) {
        amo.value=0;
        i = 0;
           }
       else
       {
        amo.value=i;
       }
    }// 数量加减结束  
  var no_login=$("no_login");
  var login=$("login");
  no_login.onclick=function(){
    no_login.style.display="none";
    login.style.display="block";
  }  
   
   }