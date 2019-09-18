window.onload=function(){
	var chatback=document.querySelector('.chat-back')
	window.onscroll=function(){
	    if(window.scrollY>400){
	        chatback.style.display='block'
	    }else{
	        chatback.style.display='none'
	    }
	}
	chatback.onclick=function(e){
	    window.scrollTo(0,0)
	}
}
