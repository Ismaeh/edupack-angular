import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() src:string;
  @Input() alt:string; 
  @Input() title:string; 
  @Input() class:string;
  constructor() { }

  ngOnInit(): void {
  }

}
