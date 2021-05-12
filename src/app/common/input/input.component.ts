import { Component, Input, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type;
  @Input() placeholder;
  @Input() label;
  @Input() class;
  @Input() name;
  @Output() newValueEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  modifyValue(data: string) {
    this.newValueEvent.emit(data);
  }
}
