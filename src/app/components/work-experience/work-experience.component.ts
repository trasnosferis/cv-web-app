import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

function proyect(title, text, images) {
  this.title = title;
  this.text = text;
  this.images = images;
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  proyects = [new proyect('Smart Security', 'Es una aplicación móvil orientada a la seguridad comunitaria, cuenta con chat, envío de contenido multimedia, notificaciones push, administración de grupos, encuestas y recaudos con el fin de promover la organización en un frente de acción comunal, el sistema se complementa con un modulo de alarma que posee cornetas y emite diferentes alertas.', 
  ['https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fsmart_security%2FScreenshot_20220623_202158.jpg?alt=media&token=bfcc3b35-d80f-4db5-854c-c1716619e0c2',
  'https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fsmart_security%2FScreenshot_20220624_134214.jpg?alt=media&token=9f421d15-6fab-457d-80b1-e1c337c7955e',
  'https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fsmart_security%2FScreenshot_20220624_100619.jpg?alt=media&token=6a011439-b047-48dd-a9e7-01695705b5d9']),
  new proyect('SBN', ' SBN es una aplicación móvil desarrollada con el fin de mostrar apuestas seguras (surebets) a los usuarios, esto se logra gracias a la comparación de datos de diferentes casas de apuestas en tiempo real.', 
  ['https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fsbn%2FScreenshot_20220517_122056.jpg?alt=media&token=dd06a47d-bb5d-4670-825f-868fa6189518',
  'https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fsbn%2FScreenshot_20220517_141210.jpg?alt=media&token=8e6ab963-8b4b-4202-a4c5-64d464a65851',
  'https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fsbn%2FScreenshot_20220517_141218.jpg?alt=media&token=5f3eb31f-6ba7-45bb-b4c6-5e67849b185e']),
  new proyect('ITS Point of safe', 'ITS Point Of Safe es una aplicación móvil conjunto de una plataforma para contaduría y administración de inventario esta es usada principalmente por asesores, quienes documentan las ventas que han solicitado sus clientes y posterior mente pasan los productos a un sistema de entrega.', 
  ['https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fits_pos%2Frect882.png?alt=media&token=8fe08df8-db2f-4ccf-b14d-4adc758042a1',
  'https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fits_pos%2Frect883.png?alt=media&token=a1dc0355-972b-4f81-9a31-b62f00ca7a34',
  'https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fits_pos%2Frect884.png?alt=media&token=c4943ed8-7d92-4993-90ce-409c993ba79c']),
  new proyect('Ponal Radio', 'Esta aplicación movil tiene el proposito de administrar el inventario de radios que son suministrados como dotación a unidades activas y registrar cambios en la bitácora del dispositivo, mi proposito en este proyecto era instruir, enseñar y orientar a los estudiantes de telématica que debían desarrollar el app móvil.', 
  ['https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fponal%2Frect885.png?alt=media&token=0e082dd4-a449-4e17-9bc2-1592204f62b7',
  'https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fponal%2Frect886.png?alt=media&token=a66b16f4-7edf-465b-b1be-5e5e134c5ae1',
  'https://firebasestorage.googleapis.com/v0/b/cv-web-app-4050d.appspot.com/o/imagenes%2Fproyects%2Fponal%2Frect887.png?alt=media&token=0bb1f215-43ad-4ff2-a48a-e3045ccbc35f'])]
  
  //UI
  initial = true;
  slidePerview = 1;
  constructor(private platform: Platform) { }

  ngOnInit() {
    const width = this.platform.width();
    if(width >= 800){
      this.initial = false;
      this.slidePerview = 3;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scale(undefined);
    }, 200);
  }

  nextSwip(direction) {
    if(direction === 1){
      let swips: any = document.getElementById('principalSwiper');
      if(swips.swiper.activeIndex === (swips.swiper.slides.length -1)) {
        swips.swiper.slideTo(0, 1000, false);
      } else {
        swips.swiper.slideTo((swips.swiper.activeIndex + 1), 600, false);
      }
    } else {
      let swips: any = document.getElementById('principalSwiper');
      swips.swiper.slideTo((swips.swiper.activeIndex - 1), 600, false);
    }
  }

  autoPlay() {
    let swips: any = document.getElementById('principalSwiper');
    swips.swiper.slideTo((swips.swiper.activeIndex + 1), 600, false);
  }

  @HostListener('window:resize', ['$event'])
  private scale(event) {
    if(event !== undefined) {
      const width = event.target.innerWidth;
      if(width >= 800 && this.slidePerview !== 3){
        this.initial = false;
        this.slidePerview = 3;
      } else if(width < 800 && this.slidePerview !== 1){
        this.slidePerview = 1;
      }
    }
    const content: any = document.getElementById('container').offsetHeight;
    const head: any = document.getElementById('descriptions').offsetHeight;
    let cards: any = document.getElementsByClassName('image-card-content');
    for(let i of cards){
      i.style.height = `${(content - head) - 50}px`;
    }
  }
}
