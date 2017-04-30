import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	constructor( private router: Router ) {
    this.router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe(this._startTransition)

    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(this._endTransition)
    
	}

  ngOnInit() {

  }
  

	_startTransition(event) {
		window.scroll(0, 0);

	}

	_endTransition() {

	}

  updateLogos() {

  }
}
