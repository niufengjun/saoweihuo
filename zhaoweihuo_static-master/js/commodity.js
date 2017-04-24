window.onload = function (){

	      var box = document.getElementById("showBox");
	           console.log(box);
            function fn(liid,bg){  // 封装函数  参数的传递
                var obj = document.getElementById(liid);
                obj.onmouseover = function(){
                    box.style.backgroundImage = bg;
            }
            }
            fn("li01","url(images/20170418143518.png)"); // 实参  调用函数
            fn("li02","url(images/20170418143550.png)");
            fn("li03","url(images/20170418143622.png)");
            fn("li04","url(images/20170418143928.png)");
            fn("li05","url(images/20170418143952.png)");       

}
    
    	