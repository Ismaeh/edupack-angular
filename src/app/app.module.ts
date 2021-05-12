import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ImgComponent } from './common/img/img.component';
import { SelectComponent } from './common/select/select.component';
import { OptionComponent } from './common/option/option.component';
import { BtnComponent } from './common/btn/btn.component';
import { IconComponent } from './common/icon/icon.component';
import { InputComponent } from './common/input/input.component';
import { TitleComponent } from './common/title/title.component';
import { SocialmediaComponent } from './common/socialmedia/socialmedia.component';
import { HeaderComponent } from './common/header/header.component';
import { SearchComponent } from './common/search/search.component';
import { FilterlistComponent } from './filter/filterlist/filterlist.component';
import { PacklistComponent } from './pack/packlist/packlist.component';
import { PackComponent } from './pack/pack/pack.component';
import { PackinfoComponent } from './pack/packinfo/packinfo.component';
import { TextComponent } from './common/text/text.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BreadcrumbsComponent } from './common/breadcrumbs/breadcrumbs.component';
import { PackdetailsComponent } from './pack/packdetails/packdetails.component';
import { InfoComponent } from './info/info.component';
import { ResourcesComponent } from './resource/resources/resources.component';
import { NavComponent } from './common/nav/nav.component';
import { ResourceslistComponent } from './resource/resourceslist/resourceslist.component';
import { FilterService } from '@services/filters/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    SelectComponent,
    OptionComponent,
    BtnComponent,
    IconComponent,
    TitleComponent,
    SocialmediaComponent,
    HeaderComponent,
    InputComponent,
    SearchComponent,
    FilterlistComponent,
    PacklistComponent,
    PackComponent,
    PackinfoComponent,
    TextComponent,
    PaginationComponent,
    BreadcrumbsComponent,
    PackdetailsComponent,
    InfoComponent,
    ResourcesComponent,
    NavComponent,
    ResourceslistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
