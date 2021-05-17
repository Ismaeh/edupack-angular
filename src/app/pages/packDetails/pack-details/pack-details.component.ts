import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackService } from '@services/packs/pack.service';
import { ResourceService } from '@services/resources/resource.service';

@Component({
  selector: 'app-pack-details',
  templateUrl: './pack-details.component.html',
  styleUrls: ['./pack-details.component.scss']
})
export class PackDetailsComponent implements OnInit {

  id: number;
  pack;
  breadcrumb;
  isReadMore = true;
  resourceType:string = "estudiante"
  resources;

  constructor(private route: ActivatedRoute,
    private packService: PackService,
    private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.packService.getPackById(this.id).subscribe(
      (response) => {
        this.pack = response['data'];
        this.breadcrumb = {
          'routeFirst':'/home',
          'first':'Home',
          'routePrev':"['/pack',"+this.pack['slug']+','+this.pack['id']+"]",
          'prev': 'Pack',
          'actual': this.pack['slug']
        }; 
        console.log(this.breadcrumb['routePrev']);
        
        this.getResourceByType()
      },
      (error) => {
        console.error('Request failed with error');
        console.error(error);
      }
    )
    
    
  }

  showText() {
    this.isReadMore = !this.isReadMore
 }

 changeResourceType(type:string){
    this.resourceType = type;
 }

 getResourceByType()
 {
  this.resourceService.getResourcesInPackByType(this.id,this.resourceType).subscribe(
    (response) => {
      this.resources = response;
      console.log(response);
      console.log(this.resourceType);
      
    },
    (error) => {
      console.error('Request failed with error');
      console.error(error);
    }
  )
 }

}

