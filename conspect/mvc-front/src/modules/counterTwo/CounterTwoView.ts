import { View } from "../../types/view";


export class CounterTwoView implements View {
  controller: CounterTwoController;
  root: HTMLElement;

  private title: HTMLElement;
  private incrementButtton: HTMLElement;
  private decrementButtton: HTMLElement;
  private multipleButtton: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.controller = new CounterTwoController();

    this.title = document.createElement('h1');
    this.title.innerHTML = 'Value = 0';

    this.incrementButtton = document.createElement('button');
    this.incrementButtton.innerText = 'increment';
    this.decrementButtton = document.createElement('button');
    this.decrementButtton.innerText = 'decrement';
    this.multipleButtton = document.createElement('button');
    this.multipleButtton.innerText = 'product';

    this.bindListeners();
  }

  private onIncrementClick: () => void = (): void => {
    this.updateTitle(this.controller.handleIncrement());
  }
  private onDecrementClick: () => void = (): void => {
    this.updateTitle(this.controller.handleDecrement());
  }
  private onMultiplyClick: () => void = (): void => {
    this.updateTitle(this.controller.handleMultiply());
  }

  private bindListeners(): void {
    this.incrementButtton.addEventListener('click', this.onIncrementClick);
    this.decrementButtton.addEventListener('click', this.onDecrementClick);
    this.multipleButtton.addEventListener('click', this.onMultiplyClick);

  }

  /**
   * updateTitle – этот метод обновляет заголовок h1
   */
  public updateTitle(value: number): void {
    this.title.innerHTML = `Value = ${value}`
  }

  public mount(): void {
    this.root.appendChild(this.title);
    this.root.appendChild(this.incrementButtton);
    this.root.appendChild(this.decrementButtton);
    this.root.appendChild(this.multipleButtton);
  };
}