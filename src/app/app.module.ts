import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {ServiceComponent} from "./service";
import { CmpAComponent } from "./service";
import { CmpBComponent } from "./service";
import { LogService } from "./service";



@NgModule({
	declarations: [AppComponent, ServiceComponent, CmpAComponent, CmpBComponent],
	imports: [BrowserModule, FormsModule ],
	bootstrap: [AppComponent],
	providers: [LogService]
})

export class AppModule {}