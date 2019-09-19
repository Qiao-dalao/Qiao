window.onload=function(){
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
      interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
    });

    var chatdetailsback=document.querySelector('.chat-details-fanhui')
    chatdetailsback.onclick=function(){
      // alert(1)
      // history.go(-1)
      history.back()
    }

    var chatdetailsshare=document.querySelector('.chat-details-share')
    var chatsharediv=document.querySelector('#chat-details-share')
    var chatdelte=document.querySelector('.chat-delete')
    chatdetailsshare.onclick=function(){
      chatsharediv.style.display='block'
    }
    chatdelte.onclick=function(){
      chatsharediv.style.display='none'
    }

    var chatbottomdiv2=document.querySelector('.chat-bottom-div2')
    var chatdetailsbuy=document.querySelector('#chat-details-buy')
    var chatdel=document.querySelector('.chat-buy-del')
   
  
    chatbottomdiv2.addEventListener('click',function(){
        chatdetailsbuy.style.display='block'
    },true)
    chatdel.addEventListener('click',function(){
      chatdetailsbuy.style.display='none'
    },true)
    
}

