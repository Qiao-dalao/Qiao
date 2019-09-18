//回到顶部
window.onload=function(){
	var recommendback=document.querySelector('.recommend-back')
	window.onscroll=function(){
	   if(window.scrollY>100){
	        recommendback.style.display='block'
	   }else{
	        recommendback.style.display='none'
	   }
	}
	recommendback.onclick=function(e){
	    window.scrollTo(0,0)
	}	
}

//跳转到发现
var recommendbottomfill =document.querySelector('#bottom-fill')
var recommendbottommenu =document.querySelector('.bottom-menu')
var recommendbaodiv =document.querySelector('.recommend-baodiv')
var recommendfindreturn=document.querySelector('.recommend-find-return')
var recommendFind =document.querySelectorAll('.recommend-div-font-p3-span3')
var recommendfindbaodiv=document.querySelector('.recommend-find-baodiv')
for(var i=0;i<recommendFind.length-1;i++){
	recommendFind[i].onclick=function(){
		console.log(1)
		recommendfindbaodiv.style.display='block'	
		recommendbaodiv.style.display="none"
		recommendbottomfill.style.display='none'
		recommendbottommenu.style.display='none'
	}
}
recommendfindreturn.onclick =function(){
	console.log(1)	
	recommendfindbaodiv.style.display='none'
	recommendbaodiv.style.display="block"
	recommendbottomfill.style.display='block'
	recommendbottommenu.style.display='block'
}
//回到顶部
window.onload=function(){
	var recommendFindback=document.querySelector('.recommend-find-back')
	window.onscroll=function(){
	   if(window.scrollY>100){
			recommendFindback.style.display='block'
	   }else{
			recommendFindback.style.display='none'
	   }
	}
		recommendFindback.onclick=function(e){
	   	 window.scrollTo(0,0)
	}	
}
//分享
var recommendfindshare=document.querySelector('.recommend-find-share')
var recommendfindsharediv=document.querySelector('.recommend-find-share-div')
var recommendsharediv3=document.querySelector('.recommend-find-share-div3')
var rzhezaoceng=document.querySelector('.r-zhezaoceng')
recommendfindshare.onclick =function(){
	rzhezaoceng.style.display='block'
	//recommendfindbaodiv.style.display='none'
	recommendfindsharediv.style.display='block'
}
recommendsharediv3.onclick =function(){
	recommendfindsharediv.style.display='none'
	rzhezaoceng.style.display='none'
}
