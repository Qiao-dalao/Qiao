window.onload=function(){
    var leftli=document.getElementsByClassName('leftli')
    var hongtiao=document.getElementsByClassName('hongtiao')
    var input=document.getElementsByClassName('input')
    var sousuo=document.getElementById('sousuo')
    var back=document.getElementById('back')
    var num=0
    for(var a=0;a<leftli.length;a++){
        hongtiao[0].style.display='block'
        leftli[0].style.background='white'
        leftli[a].index=a
        leftli[a].onclick=function(){
            hongtiao[this.index].style.display='block'
            leftli[this.index].style.background='white'
            hongtiao[num].style.display='none'
            leftli[num].style.background='#F8F8F8'
            num=this.index
        }
    }
    for(var b=0;b<input.length;b++){
        input[b].onclick=function(){
            sousuo.style.display='block'
        }
    }
    back.onclick=function(){
        sousuo.style.display='none'
    }
    
}