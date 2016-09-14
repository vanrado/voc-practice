import {Component} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private http: Http) {
    // let ressp = this.http.get("/node_modules/zone.js/dist/zone.js").map(x => x);
    // ressp.subscribe(x => console.log('value ', x));
    // console.log('object ', ressp);
  }
}
