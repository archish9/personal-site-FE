import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [
        RouterModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

}
