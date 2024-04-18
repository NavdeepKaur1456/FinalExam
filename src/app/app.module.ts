// Core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for making HTTP requests

// Routing Module
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule for routing

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; // Make sure the path is correct
import { FooterComponent } from './footer/footer.component'; // Make sure the path is correct
import { CollegeComponent } from './college/college.component'; // Make sure the path is correct

// Services
import { CollegeDataService } from './college-data.service'; // Make sure the path is correct

@NgModule({
  declarations: [
    // Declare components here
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CollegeComponent, // Declare the CollegeComponent
  ],
  imports: [
    // Import Angular modules here
    BrowserModule,
    AppRoutingModule, // Include it in the imports array
    HttpClientModule, // Include HttpClientModule to enable HTTP services
  ],
  providers: [
    // List services here
    CollegeDataService, // Provide the CollegeDataService
  ],
  bootstrap: [AppComponent] // Bootstrapping the AppComponent
})
export class AppModule { }
