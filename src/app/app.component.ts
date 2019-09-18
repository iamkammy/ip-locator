import { Component, OnInit } from '@angular/core';
import { LocatorService } from './services/locator.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Locate IP Address';
  data:any;

  
  isLoading:boolean = false;
  isRemovePlace = false;
  constructor(private locator: LocatorService) {}
  ngOnInit(){
    console.log('oninit is called');  
  }


  postval(e){
    this.isLoading = true;
    this.data = null;
    let ip = e.target.value;
    this.findLocation(ip);
  }

  findLocation(ip){
    this.locator.getLocation(ip).subscribe((res) =>{
      if(res){
        this.isLoading = false;
        this.data = res['ip'];
        console.log(this.data, "from data part");
      }
    }, (err) =>{
      this.isLoading = false;
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: `${err.error}`,
      })
      console.log(err.error);
      
    });

  }


}
