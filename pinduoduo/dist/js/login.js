window.onload=function(){var e=document.querySelector("#dengluback"),l=document.querySelector("#zhuceback"),n=document.querySelector("#denglu"),o=document.querySelector("#zhuce"),c=document.querySelector("#login"),t=document.querySelector("#denglu-btn"),u=document.querySelector("#zhuce-btn"),a=document.querySelector("#zhuce-id"),i=document.querySelector("#denglu-id"),d=document.getElementById("panduan");u.onclick=function(){n.style.display="none",o.style.display="block"},t.onclick=function(){c.style.display="none",n.style.display="block"},e.onclick=function(){n.style.display="none",c.style.display="block"},l.onclick=function(){o.style.display="none",n.style.display="block"},a.onclick=function(){for(var e=document.cookie.split(";"),l=0;l<e.length;l++)if(e[l]=e[l].split("="),e[l][0]=e[l][0].trim(),zhucezhanghao.value==e[l][0]){alert("请输入正确的用户名");break}l==e.length&&(document.cookie=zhucezhanghao.value+"="+zhucemima.value,o.style.display="none",n.style.display="block"),zhucezhanghao.value="",zhucemima.value=""},i.onclick=function(){for(var e=document.cookie.split(";"),l=0;l<e.length;l++)if(e[l]=e[l].split("="),e[l][0]=e[l][0].trim(),console.log(e),dengluzhanghao.value==e[l][0]){if(denglumima.value==e[l][1]){alert("登录成功"),location.href="index.html",sessionStorage.setItem("loginm","1"),d.innerHTML="1231651";break}alert("密码错误，请重新输入密码"),denglumima.value="";break}l==e.length&&alert("用户未被注册，请注册"),dengluzhanghao.value="",denglumima.value=""}};