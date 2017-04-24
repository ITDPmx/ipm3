import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ipm-footer',
  templateUrl: './ipm-footer.component.html',
  styleUrls: ['./ipm-footer.component.css']
})
export class IpmFooterComponent implements OnInit {
	private isFooter: Boolean;
  constructor( private router: Router) { }

  ngOnInit() {
		this.router.events.subscribe((val) => {
		  if (val instanceof NavigationEnd) {
		    this.isFooterInView();
		  }
		});
  }

  isFooterInView() {
    if (this.router.url === '/') {
      this.isFooter = true;
    } else {
      this.isFooter = false;
    }
  }

}
