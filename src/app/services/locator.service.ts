import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocatorService {
  url = 'https://apility-io-ip-geolocation-v1.p.rapidapi.com/';
  constructor(private _http: HttpClient) { }

      getLocation(str:String){
          
          const headers = new HttpHeaders({
            "x-rapidapi-host": "apility-io-ip-geolocation-v1.p.rapidapi.com",
            "x-rapidapi-key": "7401012460msh50ab74dd2684bfcp1d5ca5jsnb685fba70aa4",
            "accept": "application/json"
          })
         return this._http.get(this.url + str,{headers});
      }
}
