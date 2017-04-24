import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ipm-header',
  templateUrl: './ipm-header.component.html',
  styleUrls: ['./ipm-header.component.css']
})
export class IpmHeaderComponent implements OnInit {
  private isMenuOpen: Boolean = false;
  private ipmLogo: String;
  private itdpLogo: String;
  private embassyLogo: String;
  private updateColor: String;
  private updateMenuButton: String;
  private whiteLogo: String = './assets/images/logo_ipm_white.png';
  private grayLogo: String = './assets/images/logo_ipm_gray.png';
  private itdpWhiteLogo: String = './assets/images/logo_itdp_mexico_white.png';
  private itdpGrayLogo: String = './assets/images/logo_itdp_mexico_black.png';
  private embassyWhiteLogo: String = './assets/images/logo_embajada_britanica_white.png';
  private embassyGrayLogo: String = './assets/images/logo_embajada_britanica_black.png';

  constructor( private router: Router ) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.updateLogos();
      }
    });
  }
  updateLogos() {
    if (this.router.url === '/') {
      this.ipmLogo = this.whiteLogo;
      this.itdpLogo = this.itdpWhiteLogo;
      this.embassyLogo = this.embassyWhiteLogo;
      this.updateColor = "rgb(255,255,255)";
      this.updateMenuButton = "1px solid #FFFFFF";
    } else {
      this.ipmLogo = this.grayLogo;
      this.itdpLogo = this.itdpGrayLogo;
      this.embassyLogo = this.embassyGrayLogo;
      this.updateColor = "rgb(57, 57, 58)";
      this.updateMenuButton = "1px solid #545454";
    }
  }
  toggleMenu() {
    let _body = document.getElementsByTagName('body');
    if (!this.isMenuOpen) {
      this.isMenuOpen = true;
      _body[0].style.overflowY = "hidden";
    } else {
      this.isMenuOpen = false;
      _body[0].style.overflowY = "initial";
    }
    this.updateLogos();
  }
}
