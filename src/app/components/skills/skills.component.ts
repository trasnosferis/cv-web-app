import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

function item(title, titleColor, text, model, url) {
  this.title = title,
  this.titleColor = titleColor,
  this.text = text,
  this.model = model
  this.url = url;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @ViewChild('transform') transform: ElementRef;
  building = [
    new item('Ionic framework', 'ionicColor', 'Ionic es un conjunto de herramientas de interfaz de usuario de código abierto para crear aplicaciones móviles y de escritorio de alta calidad y rendimiento utilizando tecnologías web (HTML, CSS y JavaScript) con integraciones para marcos populares como Angular , React y Vue .', '../../assets/models3d/ionic_icon.glb', 'https://ionicframework.com/'),
    new item('Angular', 'angularColor', 'Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.', '../../assets/models3d/angular_icon.glb', 'https://angular.io/'),
    new item('Capacitor', 'capacitorColor', 'Capacitor es un tiempo de ejecución nativo multiplataforma que facilita la creación de aplicaciones web modernas que se ejecutan de forma nativa en iOS, Android y la Web.','../../assets/models3d/capacitor_icon.glb', 'https://capacitorjs.com/'),
    new item('Firebase', 'firebaseColor', 'Firebase es una plataforma de desarrollo de aplicaciones que lo ayuda a crear y desarrollar aplicaciones y juegos que les encantan a los usuarios. Respaldado por Google y en el que confían millones de empresas de todo el mundo.','../../assets/models3d/firebase_icon.glb', 'https://firebase.google.com/?hl=es-419'),
  ];

  initial = true;
  slidesPerView = 1;
  constructor(private iab: InAppBrowser, private platform: Platform) { }

  ngOnInit() {
    const width = this.platform.width();
    if(width > 1300) {
      this.slidesPerView = 4;
    } else if (width > 950) {
      this.slidesPerView = 3;
    } else if (width > 700) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 1;
    }
  }

  onLoad3Dobject(){
    const x = '0.8'; const y = '0.8'; const z = '0.8';
    this.transform.nativeElement.scale = `${x} ${y} ${z}`;
  }

  dissableSwiper(){
    let swip: any = document.getElementById('principalSwiper');
    swip.swiper.allowTouchMove = false;
  }

  enableSwiper(){
    let swip: any = document.getElementById('principalSwiper');
    swip.swiper.allowTouchMove = true;
  }

  openUrlBrowser(url) {
    this.iab.create(url, '_system');
  }

  @HostListener('window:resize', ['$event'])
  private resize(event) {
    if(event.target.innerWidth > 1300) {
      this.slidesPerView = 4;
    } else if (event.target.innerWidth > 950) {
      this.slidesPerView = 3;
    } else if (event.target.innerWidth > 700) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 1;
    }
  }
}
