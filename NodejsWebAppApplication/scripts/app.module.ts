import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }