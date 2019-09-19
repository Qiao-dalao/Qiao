	window.onload=function(){
		var gallery = mui('.mui-slider');
		gallery.slider({
			interval:1000
		});
		document.querySelector('.mui-slider').addEventListener('slider',function(){
			console.log("你正在看第" + (event.detail.slideNumber + 1)+ "轮播图")
		})
	}
		
		