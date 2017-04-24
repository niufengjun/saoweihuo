function fn2(){

	var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var button=document.getElementById("liu_button").getElementsByTagName('span');
    var index=1;
    prev.onclick=function (){
    	index -=1;
    	if(index<1){
    		index=5;
    	}
    	buttonsShow();        
    }
    next.onclick=function (){
    	index +=1;
    	if(index>5){
    		index=1;
    	}
    	buttonsShow();      
    }

    function buttonsShow(){
    	for(var i=0;i<button.length;i++){
    		if(button[i].className=="on"){
    			button[i].className=" ";
    		}
    	}
    	button[index-1].className="on";        
    }
      var ok = document.getElementById("ok");
      var it = document.getElementById('input');
      ok.onclick = function  () 
    {
        var i = it.value;
        i--;
        for(var j=0;j<5;j++){
            button[j].className="";
        }
        button[i].className = "on";       
    }

    var condtion = document.getElementById('condtion');

    var spans = condtion.children;
    
    var ta_box = document.getElementById("center_right").getElementsByClassName('ta_box');
  
    for (var i = 0; i < spans.length; i++) 
    {   
        spans[i].index = i ;
        spans[i].onclick = function () 
        { 
          for (var i = 0; i < ta_box.length; i++) 
          {
            spans[i].style.borderBottom = "none";
            ta_box[i].style.display = "none";                    
          }
         this.style.borderBottom = "2px black solid" ;
         ta_box[this.index].style.display = "block";
                     
        }

    }








}