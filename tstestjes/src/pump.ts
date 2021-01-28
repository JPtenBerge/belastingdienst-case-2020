import { Reactor } from './reactor';

export interface Pump {
    cool(reactor: Reactor): void;
}
