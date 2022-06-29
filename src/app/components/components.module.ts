import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDescriptionComponent } from './personal-description/personal-description.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [PersonalDescriptionComponent, EducationComponent, WorkExperienceComponent, SkillsComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [PersonalDescriptionComponent, EducationComponent, WorkExperienceComponent, SkillsComponent]
})
export class ComponentsModule { }
