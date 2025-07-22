import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodo {
  isCompleted = input(false);
  el = inject(ElementRef)
  styleEffect = effect(() => {
    if (this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = "#D3F9DB";
      this.el.nativeElement.style.color = "#6C757D";
    }
    else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = "#FFF";
      this.el.nativeElement.style.color = "#000";
    }
  })
}
