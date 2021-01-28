import { Pump } from "../pump";
import { Reactor } from "../reactor";

export class PneumaticPump implements Pump {
  cool(reactor: Reactor): void {
    console.log("[pneumatic] ook cooling!");
    reactor.temperature -= 130;
  }
}
