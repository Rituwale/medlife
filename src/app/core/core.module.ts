import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';





@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        SignInComponent,
        SignUpComponent
       
    ],
    exports: [
        HeaderComponent,
        FooterComponent
       
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
       
})
export class CoreModule { }
