import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from "@angular/forms";
import { ModalModule } from "ngx-modal";

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
  hideMap: boolean;
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  setPosition(position) {
    this.location = position.coords;
    this.latitude=this.location.latitude;
    this.longitude=this.location.longitude;
  }
  ngOnInit() {
    this.hideMap=true;
    //set google maps defaults
    this.zoom = 4;
    // this.latitude = this.location;
    // this.longitude = this.location;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    };

  }
  private setCurrentPosition() {

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  private updateMarkerPos(position){
    this.longitude= position.coords.lng;
    this.latitude = position.coords.lat;
  }
  private staticMapUrl(zoom,size){
    this.staticMap="http://maps.google.com/maps/api/staticmap?zoom="+zoom+"&size="+size+"x"+size+"&markers=color:red|"+this.latitude+","+this.longitude+"&mobile=true&sensor=false"
  }
}
