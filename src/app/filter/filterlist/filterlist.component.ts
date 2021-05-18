import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from '@services/filters/filter.service';
import { PackService } from '@services/packs/pack.service';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.scss']
})
export class FilterlistComponent implements OnInit {
  title: string = "Filtros";
  filters;
  options: Array<number> = [0, 0, 0, 0];
  @Output() packsByFiltersEvent = new EventEmitter<any>();
  btn = {
    'content': 'Buscar',
    'class': 'btn btn-primary btn-block'
  }

  constructor(private filterService: FilterService,
    private packService: PackService) { }

  ngOnInit(): void {
    this.filterService.getallFilters().subscribe(
      (response) => {
        this.filters = response['data'];
        console.log(this.filters);
      },
      (error) => {
        console.error('Request failed with error');
        console.error(error);
        // this.loading = false;
      }
    )
  }

  getOptions(filterOptions) {
    switch (filterOptions['filter']) {
      case 'filter_0': {
        this.options[0] = parseInt(filterOptions['option'])
        break;
      }
      case 'filter_1': {
        this.options[1] = parseInt(filterOptions['option'])
        break;
      }
      case 'filter_2': {
        this.options[2] = parseInt(filterOptions['option'])
        break;
      }
      case 'filter_3': {
        this.options[3] = parseInt(filterOptions['option'])
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }

  getPacksByFilters() {
    this.packService.getPacksByFilters(this.options, 5, 1, 'order', 'desc').subscribe(
      (response) => {
        this.packsByFiltersEvent.emit(response)
      },
      (error) => {
        console.error('Request failed with error');
        console.error(error);
        // this.loading = false;
      }
    )
  }
}
