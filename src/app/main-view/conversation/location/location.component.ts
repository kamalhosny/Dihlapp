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
  public coords: any = {};
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

// to solve the modal issue :
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

  //
  setPosition(position) {
    this.location = position.coords;
    this.coords.latitude = this.location.latitude;
    this.coords.longitude = this.location.longitude;
  }
  ngOnInit() {

    this.hideMap=true;
    this.zoom = 12;
    this.searchControl = new FormControl();
// initial location "where the user is"
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
          this.coords.latitude = place.geometry.location.lat();
          this.coords.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

// to update the position when the marker draged and droped anywhere :
  private updateMarkerPos(position){
    this.coords.longitude = position.coords.lng;
    this.coords.latitude = position.coords.lat;
  }

  // generates static map :
  private staticMapUrl(zoom,size){
    this.staticMap = "http://maps.google.com/maps/api/staticmap?zoom="+zoom+"&size="+size+"x"+size+"&markers=color:red|"+this.coords.latitude+","+this.coords.longitude+"&mobile=true&sensor=false"

    localStorage.setItem('coords', JSON.stringify(this.coords));
  }

}
