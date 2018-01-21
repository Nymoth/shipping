import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input() model: string;
  @Input() label: string;
  @Input() error: string;

  @Output() modelChange: EventEmitter<string>;

  constructor() {
    this.model = null;
    this.label = '';
    this.error = '';

    this.modelChange = new EventEmitter<string>();
  }

  changeModel(value) {
    this.modelChange.emit(value);
  }

}
