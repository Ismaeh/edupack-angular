import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  @Input() name:string;
  @Input() resource:string;
  @Input() image:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
