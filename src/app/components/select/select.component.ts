import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export class SelectOption {
  name: string;
  value: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  @Input() model: string;
  @Input() options: SelectOption[];
  @Input() label: string;
  @Input() error: string;

  @Output() modelChange: EventEmitter<string>;

  constructor() {
    this.model = '';
    this.options = [];
    this.label = '';
    this.error = '';

    this.modelChange = new EventEmitter<string>();
  }

  changeModel(value) {
    this.modelChange.emit(value);
  }

}
