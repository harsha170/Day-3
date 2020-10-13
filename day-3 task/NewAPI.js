var xhr = new XMLHttpRequest()
xhr.open("GET","api.openweathermap.org/data/2.5/weather?q={'london'}&appid={44ae1c38a726765ed56543851ec7fca0}", true)
xhr.send()
xhr.onload=function(){
	var data=JSON.parse(this.response);
	console.log(data);
};