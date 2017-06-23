import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes),
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }