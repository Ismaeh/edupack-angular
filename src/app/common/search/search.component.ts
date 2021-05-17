import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  input = {
    'placeholder':'Buscar packs...',
    'type':'text',
    'class':'form-control',
    'name' : 'search'
  };

  btn = {
    'class':'btn btn-primary'
  }

  icon = {
    'class':'fas fa-search'
  }
  @Output() newValueEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  getInputValue(value:string)
  {
    this.newValueEvent.emit(value)
  }
}
