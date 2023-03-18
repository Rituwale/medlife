import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import  { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TopDealsComponent } from './components/top-deals/top-deals.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MedicineHomeComponent,
        TopDealsComponent
         
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        BrowserAnimationsModule ,
        CarouselModule,
        HttpClientModule,
        FormsModule ,
        
        
        

    ]
})
export class AppModule { }
