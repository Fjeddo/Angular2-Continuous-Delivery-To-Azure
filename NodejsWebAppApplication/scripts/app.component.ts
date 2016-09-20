﻿import { Component } from '@angular/core';

@Component({
    selector: 'the-app',
    template: `
        <h1><a style="color: #555; text-decoration: none;" routerLink="/">The Angular 2 App works like a charm!</a></h1>
        <nav>
              <a routerLink="/home">Home</a>
              <a routerLink="/about">About</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }