//写一个obj.sayName方法，执行obj.sayName()一秒后将obj.name打印出来
let obj = {
	name: "zhufeng",
	sayName: () => {
		var _name = this.name;
		setTimeout(function(){
			console.log(_name);
		},1000);
	}
};

obj.sayName();
