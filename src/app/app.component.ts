import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit{
  start = false;
  public appPages = [
    { title: 'Descripción personal', url: '/folder/Descripción personal', icon: 'person' },
    { title: 'Educación', url: '/folder/Educación', icon: 'school' },
    { title: 'Experiencias laborales', url: '/folder/Experiencias laborales', icon: 'business' },
    { title: 'Skills', url: '/folder/Skills', icon: 'reader' },
  ];
  public labels = [{text: 'Leer', icon: 'book-outline'}, {text: 'Escuchar música', icon: 'musical-notes-outline'}, {text: 'Viajar', icon: 'map-outline'}, {text: 'Videojuegos', icon: 'game-controller-outline'}];
  constructor(private menuController: MenuController) {}

  ngOnInit(){
    this.start = true;
  }

  menuDesktop(){
    let menu: any = document.getElementById('img-user-container-desktop');
    let icon: any = document.getElementById('incon-menu-desktop');
    let adjust = icon.className;
    if(menu.className === 'open-menu') {
      menu.className = 'close-menu';
      icon.className = 'md ion-color ion-color-primary hydrated icon-close';
    } else {
      menu.className = 'open-menu';
      icon.className = 'md ion-color ion-color-primary hydrated icon-open';
    }
  }

  startPresentation(){
    document.getElementById('back-card').className = 'background-presentation-close';
    setTimeout(() => {      
      this.start = false;
      this.menuDesktop();
      this.menuController.open();
    }, 300);
  }
}
