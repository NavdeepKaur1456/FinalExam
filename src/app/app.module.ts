
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CollegeComponent } from './college/college.component';

// Services
import { CollegeDataService } from './college-data.service';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    CollegeComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [

    CollegeDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
