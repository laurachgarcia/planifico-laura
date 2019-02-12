import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class A2CardComponent {
  @Input() title = '';
  @Input() bgColor = '';
  @Input() customBgColor = '';
  @Input() color = '';
  @Input() customColor = '';
  @Input() bgImage = '';
  @Input() outline = false;
  @Input() indents = '1.57143rem';
  @Input() align = 'left';
}
