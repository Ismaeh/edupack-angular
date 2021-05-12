import { Component, Input, OnInit } from '@angular/core';
import { PackService } from '@services/packs/pack.service';

@Component({
  selector: 'app-packlist',
  templateUrl: './packlist.component.html',
  styleUrls: ['./packlist.component.scss']
})
export class PacklistComponent implements OnInit {
  per_page:number = 5;
  page:number = 1; 
  order_by:string = "order"; 
  direction:string = "desc";
  @Input() packs;
  constructor(private packService:PackService) { }

  ngOnInit(): void 
  {
    this.packService.getAllPacks(this.per_page,this.page,this.order_by,this.direction).subscribe(
        (response) => {
          this.packs = response['data'];
        },
        (error) => {
          console.error('Request failed with error');
          console.error(error);
          // this.loading = false;
        }
      )
    }
}
