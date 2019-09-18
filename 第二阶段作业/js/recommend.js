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
