window.onload=function(){
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
      interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
    });

    var chatdetailsback=document.querySelector('.chat-details-fanhui')
    chatdetailsback.onclick=function(){
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
    var chatbottomdiv3=document.querySelector('.chat-bottom-div3')
    var chatdetailsbuy=document.querySelector('#chat-details-buy')
    var chatdel=document.querySelector('.chat-buy-del')
    var chatdelte1=document.querySelector('.chat-delete1')
   
  
    chatbottomdiv2.addEventListener('click',function(){
        chatdetailsbuy.style.display='block'
    },true)
    chatbottomdiv3.addEventListener('click',function(){
      chatdetailsbuy.style.display='block'
  },true)
    chatdel.addEventListener('click',function(){
      chatdetailsbuy.style.display='none'
    },true)
    chatdelte1.addEventListener('click',function(){
      chatdetailsbuy.style.display='none'
    },true)



    var chatgoodsprice=document.querySelector('.chat-goods-price')
    var chatminus=document.querySelector('.chat-minus')
    var chatadd=document.querySelector('.chat-add')
    var chatnum=document.querySelector('.chat-num')
    chatminus.onclick=function(){
      if(chatnum.value==1){
        chatnum.value=1
      }else{
        chatnum.value--
      }
    }
    chatadd.onclick=function(){
      if(chatnum.value>99){
        chatnum.value=99
      }else{
        chatnum.value++
      }
    }
    
}

