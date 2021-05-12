import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient) { }

  getallFilters()
  {
    return this.http.get(environment.baseUrlService + "filters");
  }

  getFilterById(id:number)
  {
    return this.http.get(environment.baseUrlService+"filter/"+id)
  }
}
