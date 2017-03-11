
//写一个方法count，执行后在N秒后打印N，如在1秒后打印1，一直到10秒后

function count(){
	for(var i = 1; i <= 10; i++){
		(function(j){
			setTimeout(function(){
				console.log(j);
			},j*1000);
		})(i);
	}
}
count();
