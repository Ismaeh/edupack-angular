import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  constructor(private http:HttpClient) { }

  getAllPacks(per_page:number, page:number, order_by:string, direction:string)
  {
    return this.http.get(environment.baseUrlService + "packs/?per_page="+ per_page +"&page=" +page+"&order_by="+order_by+ "&direction="+direction)
  }

  getPacksByName(name:string, per_page:number, page:number, order_by:string, direction:string)
  {
    return this.http.get(environment.baseUrlService + "packs/findByName?name="+name+"&per_page="+ per_page +"&page=" +page+"&order_by="+order_by+ "&direction="+direction)
  }

  getPackById(id:number)
  {
    return this.http.get(environment.baseUrlService+"pack/"+id)
  }
}
