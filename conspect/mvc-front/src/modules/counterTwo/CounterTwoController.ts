import { Controller } from "../../types/controller";
import { CounterTwoModel } from "./counterTwoModel";
import { Model } from "../../types/model";

export class CounterTwoController implements Controller {
  model: CounterTwoController;

  constructor() {
    this.model = new CounterTwoModel();
  }

  handleIncrement(): void {
    console.log(`increment ${this.model}`);
    return this.model.increment();
  }
  
  handleDecrement(): void {
    console.log('hadleDecrement');
    return this.model.decrement();
  }
  
  handleMultiply(): void {
    console.log('handleMultiply');
    return this.model.multiplyAndDivide();
  }
}