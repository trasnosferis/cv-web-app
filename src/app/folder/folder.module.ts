import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    SwiperModule,
    ComponentsModule,
    NgxQRCodeModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
