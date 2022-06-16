import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUr1: './list.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'My angular example';
    users = [
        {name: "Alex", age :30, gender : "Male"},
        {name: "Suma", age :40, gender : "Female"}
    ]
}