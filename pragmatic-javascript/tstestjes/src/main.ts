import { HydraulicPump } from "./pumps/hydraulic-pump";
import { PneumaticPump } from "./pumps/pneumatic-pump";
import { Reactor } from "./reactor";
import { sleep } from './sleep';

async function main() {
  let chernobyl = new Reactor();
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


