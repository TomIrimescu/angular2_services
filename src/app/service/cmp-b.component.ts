import { Component } from '@angular/core';
import { LogService } from "./log.service";
import { DataService } from "./data.service";

@Component({
  moduleId: module.id,
  selector: 'app-cmp-b',
  template: `
    <div>
      <div 
      style="background-color: #c6e746; height:30px; text-align: center; padding-top:7px; margin-bottom:10px;">Component B</div>     
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage:</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value:</h3>
        <p>{{value}}</p>
    </div>
  `
})
export class CmpBComponent {
	value = '';
	items: string[] = [];

	constructor(private logService: LogService, private dataService: DataService) {
	}

	onLog(value: string) {
		this.logService.writeToLog(value);
	}

	onStore(value: string) {
		this.dataService.addData(value);
	}

	onGet() {
		this.items = this.dataService.getData().slice(0);
	}

}
