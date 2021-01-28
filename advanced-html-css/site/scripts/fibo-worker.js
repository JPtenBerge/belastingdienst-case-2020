self.addEventListener("message", (event) => {
	let n = +event.data;
	let result = fibo(n);
	self.postMessage(result);
});

function fibo(n) {
	if (n === 0 || n === 1) {
		return 1;
	}
	return fibo(n - 1) + fibo(n - 2);
}
