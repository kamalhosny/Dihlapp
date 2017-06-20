import { Component, OnInit, ElementRef, NgZone, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from "@angular/forms";


@Component({
  moduleId: module.id,
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  location: any;
  staticMap: string;
  public hideMap: boolean;
  @ViewChild("search")
  public searchElementRef: ElementRef;

  @ViewChildren('myMap') viewChildren:QueryList<any>;

doTriggerResize() {
  this.viewChildren.toArray().forEach((e) => {
    e.triggerResize();
  });
}

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone

  ) {
    this.mapsAPILoader.load()
  }

  setPosition(position) {
    this.location = position.coords;
    this.latitude=this.location.latitude;
    this.longitude=this.location.longitude;
  }
  ngOnInit() {
    this.hideMap=true;
    this.zoom = 12;
    this.searchControl = new FormControl();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    };
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

  }
  private updateMarkerPos(position){
    this.longitude= position.coords.lng;
    this.latitude = position.coords.lat;
  }
  private staticMapUrl(zoom,size){
    this.staticMap="http://maps.google.com/maps/api/staticmap?zoom="+zoom+"&size="+size+"x"+size+"&markers=color:red|"+this.latitude+","+this.longitude+"&mobile=true&sensor=false"
  }
}
