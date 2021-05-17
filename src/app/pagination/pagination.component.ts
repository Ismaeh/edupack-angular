import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PackService } from '@services/packs/pack.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  per_page:number = 5;
  page:number = 1; 
  order_by:string = "order"; 
  direction:string = "desc";
  @Input() pages;
  @Output() newPageEvent = new EventEmitter<string>();
  previous;
  next;
  constructor(private packService: PackService) { }

  ngOnInit(): void {
    this.packService.getAllPacks(this.per_page,this.page,this.order_by,this.direction).subscribe(
      (response) => {
        this.pages = response['meta']['links'];
        this.previous = this.pages[0]
        this.next = this.pages[this.pages.length-1]
        this.pages.splice(0, 1);
        this.pages.splice(this.pages.length-1, 1);
        console.log(this.pages)

      },
      (error) => {
        console.error('Request failed with error');
        console.error(error);
        // this.loading = false;
      }
    )
  }

  getNewPage(pageSelected:string)
  { 
    this.newPageEvent.emit(pageSelected)
  }

}
