import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlComponent {

  @Input() label: string;
  @Input() error: string;

  constructor() {
    this.label = '';
    this.error = '';
  }
}
