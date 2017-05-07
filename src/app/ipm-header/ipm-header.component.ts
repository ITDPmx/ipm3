import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ipm-header',
  templateUrl: './ipm-header.component.html',
  styleUrls: ['./ipm-header.component.css']
})
export class IpmHeaderComponent implements OnInit {
  public isMenuOpen: Boolean = false;
  public ipmLogo: String;
  public itdpLogo: String;
  public embassyLogo: String;
  public updateColor: String;
  public updateMenuButton: String;
  public whiteLogo: String = './assets/images/logo_ipm_white.png';
  public grayLogo: String = './assets/images/logo_ipm_gray.png';
  public itdpWhiteLogo: String = './assets/images/logo_itdp_mexico_white.png';
  public itdpGrayLogo: String = './assets/images/logo_itdp_mexico_black.png';
  public embassyWhiteLogo: String = './assets/images/logo_embajada_britanica_white.png';
  public embassyGrayLogo: String = './assets/images/logo_embajada_britanica_black.png';

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
      _body[0].style.overflowY = "hidden";
      this.isMenuOpen = true;
      
    } else {
      _body[0].style.overflowY = "initial";
      this.isMenuOpen = false;
      
    }
    this.updateLogos();
  }
}
