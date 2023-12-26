function shw(){
    var txt=document.getElementById("txt").value;
    if(txt==0){
      alert("happy birth day to you")
    }
    else{
    document.getElementById("hd"). innerHTML=txt;
    
    
    document.getElementById("pr"). style.display="none";
    
    document.getElementById("pd"). style.display="block";
    
    
    }
    }