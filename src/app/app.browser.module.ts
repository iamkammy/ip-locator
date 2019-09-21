import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule} from '@agm/core';
import { MylocationComponent } from './components/mylocation/mylocation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AppModule } from './app.module';
@NgModule({
  imports: [
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjEcF1Qh4JiOg0VZiNw0ZDz2KSaTXKR8o'
    }),
    AppModule,
    BrowserTransferStateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
