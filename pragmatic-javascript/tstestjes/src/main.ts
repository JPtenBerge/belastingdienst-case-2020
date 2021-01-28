import { HydraulicPump } from 'src/pumps/hydraulic-pump'; // relatieve paden
import { PneumaticPump } from 'src/pumps/pneumatic-pump';
import { Reactor } from 'src/reactor';
import { sleep } from 'src/sleep';

async function main() {
	const chernobyl = new Reactor();
	chernobyl.pumps.push(new HydraulicPump());
	chernobyl.pumps.push(new PneumaticPump());

	while (true) {
		chernobyl.split();
		await sleep(500);
	}
}

// IIAFE
(async () => {
	await main();
})();
