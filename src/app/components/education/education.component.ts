import { Component, OnInit } from '@angular/core';

function eduItem(title, text, icon, date) {
  this.title = title;
  this.text = text;
  this.icon = icon;
  this.date = date;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  schoolItems = [new eduItem('Curso Online', 'Ionic Framework (Avanzado)', 'book-outline', '2019'), new eduItem('Curso Online', 'TypeScript (Intermedio)', 'book-outline', '2019'),
                 new eduItem('Curso Online', 'HTML 5 (Intermedio)', 'book-outline', '2019'), new eduItem('Curso Online', 'CSS (Intermedio)', 'book-outline', '2019'),
                 new eduItem('Platzi', 'Curso de programación básica', 'book-outline', '2018'), new eduItem('Curso Online', 'Modelado 3D Blender (Básico)', 'book-outline', '2017'),
                 new eduItem('Curso Online', 'Unity (Intermedio)', 'book-outline', '2017'), new eduItem('Educación Básica Secundaria', 'Centro de cómputo técnico de Colombia', 'business-outline', '2017'),
                 new eduItem('Curso Online', 'Android Studio (Básico)', 'book-outline', '2016'),];
  constructor() { }

  ngOnInit() {}

}
