import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  image = {'src':'assets/img/banner.jpg',
  'alt':'Santillana',
  'title':'Santillana',
  'class':'img-fluid d-none d-sm-flex'};

  title = 'ang-sass';
  constructor() { }

  packs;
  pages;
  ngOnInit(): void {
    
  }

  getPacks(e)
  {
    this.packs = e['data']
    this.pages = e['meta']
  }
}
