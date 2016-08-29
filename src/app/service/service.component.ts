import { Component } from '@angular/core';
import {DataService} from "./data.service";


@Component({
  moduleId: module.id,
  selector: 'app-service',
	template: `
    <app-cmp-a></app-cmp-a>
    <app-cmp-b></app-cmp-b>
	`,
	providers: [DataService]
})
export class ServiceComponent {

}





