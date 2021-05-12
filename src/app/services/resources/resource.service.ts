import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http:HttpClient) { }

  getResourcesInPackByType(packId:number, type:string)
  {
    return this.http.get(environment.baseUrlService+"resource/"+packId+"/"+type)
  }
}
