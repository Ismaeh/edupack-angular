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

  getPacksByFilters(options:any,per_page:number, page:number, order_by:string, direction:string)
  {
    return this.http.get(environment.baseUrlService+"packs/findByFilters?per_page="+ per_page 
    +"&page=" +page+"&order_by="+order_by+ "&direction="+direction+"&filter_1="+options[0]+"&filter_2="+options[1]+"&filter_3="
    +options[2]+"&filter_4="+options[3])
  }

  getPackById(id)
  {
    return this.http.get(environment.baseUrlService+"pack/"+id)
  }

  getNewPage(url:string,per_page,order_by,direction)
  {
    return this.http.get(url+ "&per_page="+ per_page +"&order_by="+order_by+ "&direction="+direction)
  }

  addVisits(packId: number)
  {
    return this.http.put(environment.baseUrlService+"pack/addvisit/"+packId, '')
  }
}
