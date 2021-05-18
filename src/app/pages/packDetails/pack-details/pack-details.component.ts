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

  isLoaded: boolean = false;
  isLoadedResources: boolean = false;
  id: number;
  pack;
  breadcrumb;
  isReadMore = true;
  resourceType: string = "student"
  resources;
  image;
  defaultImg:string = '../../assets/img/packDefault.jpg';

  constructor(private route: ActivatedRoute,
    private packService: PackService,
    private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.packService.getPackById(this.id).subscribe(
      (response) => {
        this.pack = response['data'];
        this.getResourceByType();
        this.breadcrumb = {
          'routeFirst': '/home',
          'first': 'Home',
          'routePrev': "['/pack'," + this.pack['slug'] + ',' + this.pack['id'] + "]",
          'prev': 'Pack',
          'actual': this.pack['slug']
        };
        this.image = {
          'src':this.pack.image,
          'alt':this.pack.name,
          'title':this.pack.name,
          'class': 'packImg'
        };
        if(!this.image.src) this.image.src = this.defaultImg
        this.isLoaded = true;
        console.log(this.image)
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

  changeResourceType(type: string) {
    this.resourceType = type;
  }

  getResourceByType() {
    this.resourceService.getResourcesInPackByType(this.id, this.resourceType).subscribe(
      (response) => {
        this.resources = response;
        console.log(response);
        if (!this.resources.length) {
          this.isLoadedResources = false;
        } else {
          this.isLoadedResources = true;
        }
      },
      (error) => {
        console.error('Request failed with error');
        console.error(error);
      }
    )
  }

}

