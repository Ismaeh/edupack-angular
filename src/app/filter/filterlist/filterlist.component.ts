import { Component, OnInit } from '@angular/core';
import { FilterService } from '@services/filters/filter.service';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.scss']
})
export class FilterlistComponent implements OnInit {
  title:string ="Filtros"
  filters
  btn = {
    'content': 'Buscar',
    'class'  : 'btn btn-primary btn-block' 
  }
  
  constructor(private filterService:FilterService) { }

  ngOnInit(): void 
  {
    this.filterService.getallFilters().subscribe(
        (response) => {
          this.filters = response['data']
        },
        (error) => {
          console.error('Request failed with error');
          console.error(error);
          // this.loading = false;
        }
      )
    }
  
}
