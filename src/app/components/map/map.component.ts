import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {  } from 'googlemaps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  @Input() data: any;
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
    const mapProperties = {
        center: new google.maps.LatLng(this.data.latitude, this.data.longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(this.mapElement.nativeElement,  mapProperties);
  }

 

}
