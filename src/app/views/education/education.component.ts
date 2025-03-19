import { Component } from '@angular/core';
import { ExperienceInterface } from '../experience/experience.component';
import { ExperienceCardComponent } from '../experience/experience-card/experience-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ExperienceCardComponent, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  public education: ExperienceInterface = {
    periodStart: '2017',
    periodEnd: '2021',
    company: 'Politehnica University of Bucharest',
    url: 'https://www.plentyone.com/',
    position: 'Faculty of Automatic Control and Computer Science',
    description: [
      '<span class="opacity-100!">Bachelor’s Degree in Computer Science</span>',
      '<span class="opacity-100!">Major: Systems Engineering</span>',
      'During my time as a student I participated in multiple coding hackathons, worked on several engineering projects involing software development and electronics.',
      'Contributed as a volunteer for EESTEC LC Bucharest where I gained organizational and teamwork skills by preparing event and working especially with IT and Public Relations departments.'
    ]
  };

}
