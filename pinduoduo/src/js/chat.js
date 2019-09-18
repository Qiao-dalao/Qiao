window.onload=function(){
	var chatback=document.querySelector('.chat-back')
	window.onscroll=function(){
	    if(window.scrollY>300){
	        chatback.style.display='block'
	    }else{
	        chatback.style.display='none'
	    }
	}
	chatback.onclick=function(e){
	    window.scrollTo(0,0)
	}

	var chatdiv=document.querySelectorAll('.chat-div')
	for(var i=0;i<chatdiv.length;i++){
		console.log(a)
		chatdiv[i].onclick=function(){
			window.location.href="chat-details.html"
		}
	}




}
