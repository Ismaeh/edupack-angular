import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() actualPage:number;
  @Input() startPage:number = 1;
  @Input() finishPage:number;
  @Output() newPageEvent = new EventEmitter<number>();
  
  pages: number[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = this.startPage; i <= this.finishPage; i++) {
      this.pages.push(i);
    }
    console.log('pages');
    console.log(this.pages);
  }

  getNewPage(pageSelected:number)
  { 
    this.newPageEvent.emit(pageSelected)
  }

}