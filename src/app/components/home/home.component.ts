import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LocatorService } from 'src/app/services/locator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Locate IP Address';
  data:any;
  
  isLoading:boolean = false;
  isRemovePlace = false;
  
  constructor(private locator: LocatorService) { }

  ngOnInit() {
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
