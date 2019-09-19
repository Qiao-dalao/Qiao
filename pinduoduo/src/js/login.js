window.onload=function(){
	var dengluback = document.querySelector('#dengluback')
	var zhuceback = document.querySelector('#zhuceback')
	var denglu = document.querySelector('#denglu')
	var zhuce = document.querySelector('#zhuce')
	var login = document.querySelector('#login')
	var denglubtn = document.querySelector('#denglu-btn')
	var zhucebtn = document.querySelector('#zhuce-btn')
	var zhuceid = document.querySelector('#zhuce-id')
	var dengluid = document.querySelector('#denglu-id')
	var panduan = document.getElementById('panduan')
	
	zhucebtn.onclick=function(){
		denglu.style.display='none'
		zhuce.style.display='block'
	}
	denglubtn.onclick=function(){
		login.style.display='none'
		denglu.style.display='block'
	}
	dengluback.onclick=function(){
		denglu.style.display='none'
		login.style.display='block'
	}
	zhuceback.onclick=function(){
		zhuce.style.display='none'
		denglu.style.display='block'
	}
	zhuceid.onclick=function(){
		var arr=document.cookie.split(';')
		for(var i=0;i<arr.length;i++){
			arr[i]=arr[i].split('=')
			arr[i][0]=arr[i][0].trim()
			if(zhucezhanghao.value==arr[i][0]){
				alert('请输入正确的用户名')
				
				break;
			}
		}
		if(i==arr.length){
			document.cookie = zhucezhanghao.value+ '=' +zhucemima.value
			zhuce.style.display='none'
			denglu.style.display='block'
		}
		zhucezhanghao.value=''
		zhucemima.value=''
	}
	dengluid.onclick=function(){
		var arr=document.cookie.split(';')
		for(var i=0;i<arr.length;i++){
			arr[i]=arr[i].split('=')
			arr[i][0]=arr[i][0].trim()
			console.log(arr)
			if(dengluzhanghao.value==arr[i][0]){
				if(denglumima.value==arr[i][1]){
					alert('登录成功')
					location.href="index.html"
					sessionStorage.setItem("loginm","1")
					
					panduan.innerHTML='1231651'
					break;
				}else{
					alert('密码错误，请重新输入密码')
					denglumima.value=''
					break;
				}
			}
		}
		if(i==arr.length){
			alert('用户未被注册，请注册')
		}
		dengluzhanghao.value=''
		denglumima.value=''
	}
	
	
}