import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resourceslist',
  templateUrl: './resourceslist.component.html',
  styleUrls: ['./resourceslist.component.scss']
})
export class ResourceslistComponent implements OnInit {

  @Input() resources;
  constructor() { }

  ngOnInit(): void {
  }

}
