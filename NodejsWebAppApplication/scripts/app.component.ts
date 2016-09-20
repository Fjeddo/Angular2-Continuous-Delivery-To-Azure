import { Component } from '@angular/core';

@Component({
    selector: 'the-app',
    template: `
        <h1>The Angular 2 App works like a charm!</h1>
        <nav>
              <a routerLink="/">Home</a>
              <a routerLink="/about">About</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }