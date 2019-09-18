import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjEcF1Qh4JiOg0VZiNw0ZDz2KSaTXKR8o'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
