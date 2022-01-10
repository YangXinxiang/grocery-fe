


function storeUsedTime() {
	// 参考： https://www.cnblogs.com/champagne/p/4826611.html
	// 需要在manifest.json中配置允许使用存储 "permissions": ["storage"],
	chrome.storage.sync.set({
		"usedTime":666,
	}, function(...args) {
		console.log(`storeUsedTime :: call back, args = `, args);
	})
}

function getUsedTime() {
	// 参考： https://www.cnblogs.com/champagne/p/4826611.html
	// 需要在manifest.json中配置允许使用存储 "permissions": ["storage"],
	const rst = chrome.storage.sync.get("usedTime", function(items) {
		console.log(`getUsedTime call back, items = `, items)
	})
	console.log(`getUsedTime :: end, rst = `, rst)
}
function run() {
	//暂时将程序注入到变更管理页面的登陆页面中
	var url = location.href;
	if(url.indexOf("https://www.baidu.com")>=0){
	// if(url.indexOf("mofaxiao.com")>=0 || url.indexOf("https://bj.lianjia.com")>=0){
		// 很奇怪，会执行两遍。。。。暂时没找到解决方案。
		// 一开始的时候，可能有部分页面信息还没有显示出来，部分字段分析不到，因此，做一个延时
		setTimeout(()=>{
			console.log(`Hello, `, url)
			storeUsedTime()
		},2500)		
	}

	if(url.indexOf("https://www.126.com")>=0){
	// if(url.indexOf("mofaxiao.com")>=0 || url.indexOf("https://bj.lianjia.com")>=0){
		// 很奇怪，会执行两遍。。。。暂时没找到解决方案。
		// 一开始的时候，可能有部分页面信息还没有显示出来，部分字段分析不到，因此，做一个延时
		setTimeout(()=>{
			console.log(`Hello, `, url)
			getUsedTime()
		},2500)		
	}
}
run()

