import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  
  @Input() options;
  @Input() label;
  @Input() id;
  @Output() newOptionEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectNewOption(op: number, selectId: number)
  {
    let option = {'filter': selectId,
                  'option': op}
    this.newOptionEvent.emit(option);
  }
}
