//your JS code here. If required.
async function fun1(){
	try {
	const res=await fetch("https://jsonplaceholder.typicode.com/posts/1")
		const data=await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
async function fun2(){
	try {
	const res=await fetch("https://jsonplaceholder.typicode.com/posts/2")
		const data=await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

async function fun3(){
	try {
	const res=await fetch("https://jsonplaceholder.typicode.com/posts/3")
		const data=await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
fun3();
fun2();
fun1();