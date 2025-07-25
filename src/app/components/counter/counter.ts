import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  counterValue = signal(0);

  increment(){
    this.counterValue.set( this.counterValue() + 1 )
  }

  decrement(){
    if( this.counterValue() > 0) {
      this.counterValue.set( this.counterValue() - 1 )
    }
  }

  reset(){
    this.counterValue.set(0)
  }
}
