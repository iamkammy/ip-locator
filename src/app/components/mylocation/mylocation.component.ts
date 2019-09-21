import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylocation',
  templateUrl: './mylocation.component.html',
  styleUrls: ['./mylocation.component.sass']
})
export class MylocationComponent implements OnInit {
lat:any;
long:any;
  constructor() { }

  ngOnInit() {
   this.getLocation();
  }

  getLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          console.log(position, "from position");

        });
      } else {
        console.log('Geolocation is not supported by this browser.');
      }    
  }


}
