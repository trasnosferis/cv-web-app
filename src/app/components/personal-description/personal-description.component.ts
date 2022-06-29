import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-personal-description',
  templateUrl: './personal-description.component.html',
  styleUrls: ['./personal-description.component.scss'],
})
export class PersonalDescriptionComponent implements OnInit {
  widthPlatform = 0;
  isMobileScreen = false;
  constructor(private platform: Platform) { }

  ngOnInit() {
    this.widthPlatform = this.platform.width();
    if(this.widthPlatform >= 850){
      this.isMobileScreen = false;
      document.getElementsByClassName('item-description-close')[0].className = 'item-description';
    } else if (this.widthPlatform < 850){
      this.isMobileScreen = true;
    }
  }

  changeClass(id_a:string, id_b:string){
    if(this.isMobileScreen) {
      let item: any = document.getElementById(id_a);
      let item_b: any = document.getElementById(id_b);
      if(item.className === 'item-description-close'){
        item.className = 'item-description';
        item_b.className = 'item-description-close';
      } else {
        item.className = 'item-description-close';
      }
    }
  }

  @HostListener('window: resize', ['$event'])
  private resize(event) {
    if(event.target.innerWidth >= 850 && this.isMobileScreen){
      this.isMobileScreen = false;
      document.getElementsByClassName('item-description-close')[0].className = 'item-description';
    } else if (event.target.innerWidth < 850 && !this.isMobileScreen){
      document.getElementsByClassName('item-description')[1].className = 'item-description-close';
      this.isMobileScreen = true;
    }
  }
}
