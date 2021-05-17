import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PackService } from '@services/packs/pack.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  image = {'src':'assets/img/santillana_logo.svg',
  'alt':'Santillana',
  'title':'Santillana',
  'class':'headerLogo'};
  icon_class:string = 'search';
  options= 
  [
    {'name':'name1','id':1},
    {'name':'name2','id':2},
    {'name':'name3','id':3},
  ]

  per_page:number = 5;
  page:number = 1; 
  order_by:string = "order"; 
  direction:string = "desc";
  @Output() packs = new EventEmitter<any>();

  constructor(private packService: PackService) { }

  ngOnInit(): void {
  }

  getPacksByName(name:string)
  {
    this.packService.getPacksByName(name, this.per_page,this.page,this.order_by,this.direction).subscribe(
      (response) => {
        console.log('response received')
        this.packs.emit(response);
      },
      (error) => {
        console.error('Request failed with error');
        console.error(error);
      }
    )
  }
}
