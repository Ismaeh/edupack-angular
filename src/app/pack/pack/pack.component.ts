import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit {
  image = {
    'class':'packImage'
  }
  title = {
    'class':'packTitle'
  }
  @Input() introduction:string;
  @Input() packTitle:string;
  @Input() packImg:string;
  @Input() visits:number;
  @Input() materials:number;
  @Input() created_at:string;
  @Input() slug:string;
  @Input() id:number;

  defaultImg:string = '../../assets/img/packDefault.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
