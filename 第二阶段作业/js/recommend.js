// var recommendFind =document.querySelector('.recommend-div-font-p3-span3')
// var recommendTop=document.querySelector('.recommend-top')
// var recommend=document.querySelector('#recommend')
// recommendFind.onclick=function(){
//     console.log('recommendFind')
//     console.log(1)
//     document.display='none'
//     recommend.display="none"
// }

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
