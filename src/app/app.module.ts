import { InMemoryCatService } from './mock/in-memory-cat-service';
import { environment } from './../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatBreedComponent } from './cat-breed/cat-breed.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    CatBreedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.production ? 
    [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryCatService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
