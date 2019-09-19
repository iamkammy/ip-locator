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
          console.log(position);
        });
      } else {
        console.log('Geolocation is not supported by this browser.');
      }    
  }


}
