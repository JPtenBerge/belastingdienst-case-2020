export function sleep(ms: number) {
	return new Promise((resolve: any, reject: any) => {
		setTimeout(() => {
			resolve(42);
		}, ms);
	});
}
