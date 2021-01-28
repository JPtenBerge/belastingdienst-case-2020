import { Pump } from "../pump";
import { Reactor } from "../reactor";

export class HydraulicPump implements Pump {
  cool(reactor: Reactor): void {
    console.log("[hydraulic] cooling!");
    reactor.temperature -= 20;
  }
}
