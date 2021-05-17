import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IndexComponent } from '@pages/index/index/index.component';
import { PackDetailsComponent } from '@pages/packDetails/pack-details/pack-details.component';

const routes = [
  { path: 'home', component: IndexComponent},
  { path: 'pack/:slug/:id', component: PackDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
