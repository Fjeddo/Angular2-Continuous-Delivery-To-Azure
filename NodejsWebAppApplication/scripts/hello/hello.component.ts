import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: '<h1>Hello {{name}}</h1>'
})
export class HelloComponent {
    private name: string;

    constructor(private route: ActivatedRoute) {
        this.name = route.snapshot.params['name'];
    }
}