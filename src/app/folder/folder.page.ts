import { Component, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  //UI
  public folder: string;
  isMobile = false;
  //Qr show in mobile
  showQr = false;   elementType: 'url' | 'canvas' | 'img' = 'canvas';
  qrValue = 'https://prep.soyhenry.com/challenge/'
  constructor(private activatedRoute: ActivatedRoute, private menuController: MenuController, private platform: Platform,
              private iab: InAppBrowser, private router: Router) { 
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    const width = this.platform.width();
    if(width >= 850){
      this.menuController.enable(false);
      this.isMobile = false;
      this.router.navigate([`folder/Cv-Proyect`]).then(() => {
        this.folder = 'Descripción personal';
      });
    } else if (width < 850){
      this.menuController.enable(true);
      this.isMobile = true;
    }
  }

  menuNavigate(url){
    console.log(url.detail.value);
    this.folder = url.detail.value;
  }

  qrButton(){
    if(this.showQr){
      document.getElementById('qr-mobile').className = 'qr-close';
      setTimeout(() => {
        this.showQr = false;
      }, 500);
    } else {
      this.showQr = true;
      setTimeout(() => {
        document.getElementById('qr-mobile').className = 'qr-open';
      }, 20);
    }
  }

  openProyectGitHub(){
    this.iab.create('https://www.google.com', '_blank');
  }

  @HostListener('window:resize', ['$event'])
  private size(event) {
    if(event.target.innerWidth >= 850){
      this.menuController.enable(false);
      this.isMobile = false;
    } else if (event.target.innerWidth < 850){
      this.menuController.enable(true);
      this.isMobile = true;
    }
  }
}
