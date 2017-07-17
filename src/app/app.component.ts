import { Component } from "@angular/core";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

@Component({
	selector: 'root-app',
	template: `
<router-outlet></router-outlet>
`
})
export class AppComponent {
	constructor() {}

}