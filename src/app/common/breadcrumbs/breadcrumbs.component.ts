import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() actual;
  @Input() prev;
  @Input() first;
  @Input() routePrev;
  @Input() routeFirst;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectToRoute(route)
  {
    this.router.navigate(route)
  }
}
