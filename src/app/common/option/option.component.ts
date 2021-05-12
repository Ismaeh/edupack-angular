import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() name;
  @Input() value;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.name)
    console.log(this.value)
  }

}
