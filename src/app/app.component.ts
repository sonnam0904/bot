import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        console.log('Environment: ' + environment.production); // Logs environment
        console.log('ApiUrlV1 : ' + environment.apiUrlV1); // api url
    }
}
