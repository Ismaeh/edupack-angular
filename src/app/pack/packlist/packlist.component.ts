import { Component, Input, OnInit } from '@angular/core';
import { PackService } from '@services/packs/pack.service';

@Component({
  selector: 'app-packlist',
  templateUrl: './packlist.component.html',
  styleUrls: ['./packlist.component.scss']
})
export class PacklistComponent implements OnInit {
  per_page: number = 5;
  page: number = 1;
  order_by: string = "order";
  direction: string = "desc";
  @Input() packs;
  @Input() pages;
  isLoaded: boolean = false;

  constructor(private packService: PackService) { }

  ngOnInit(): void 
  {
    this.getPackPerPage(this.page);
  }

  getPackPerPage(page: number)
  {
    this.packService.getAllPacks(this.per_page, page, this.order_by, this.direction).subscribe(
      (res) => {
        console.log(res);
        this.packs = res['data'];
        this.pages = res['meta'];
        this.isLoaded = true;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getPageNew(pageUrl:number)
  {
    this.getPackPerPage(pageUrl);
    console.log(this.pages)
  }

}
