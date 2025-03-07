import { Component } from '@angular/core';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ExperienceInterface {
  periodStart: string;
  periodEnd: string;
  company: string;
  url: string;
  position: string;
  description: string;
  skills?: Array<string>;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public experienceList: Array<ExperienceInterface> = [
    {
      periodStart: '2022',
      periodEnd: 'present',
      company: 'PlentyONE',
      url: 'https://www.plentyone.com/',
      position: 'Front End Developer',
      description: 'Developed and maintained dynamic, responsive web solutions using Angular and GWT (Google Web Toolkit) to enhance user experience and performance. Collaborated with UX/UI designers to implement intuitive user interfaces that align with modern design trends and improve usability. Played a key role in migrating legacy GWT applications to modern Angular architecture, improving overall maintainability and future scalability. Collaborated with backend developers to troubleshoot and resolve complex issues, ensuring smooth data exchange between the frontend and backend systems. Created design mockups using Figma for sharing my design ideas and getting feedback for new solutions before implementing them.',
      skills: ['angular', 'typescript', 'scss', 'html', 'gwt', 'ux/ui', 'figma']
    },
    {
      periodStart: '2021',
      periodEnd: '2022',
      company: 'Webmagnat SRL',
      url: 'https://webmagnat.ro/',
      position: 'Front End Developer',
      description: 'Designed and developed custom, responsive web applications using Vue.js, ensuring an optimal user experience across a variety of devices. Worked closely with clients to understand their needs, translating them custom solutions with intuitive interfaces and efficient functionality.',
      skills: ['vue', 'javascript', 'laravel', 'css', 'html', 'jquery']
    },
    {
      periodStart: '2019 June',
      periodEnd: 'August',
      company: 'Bitdefender',
      url: 'https://www.bitdefender.com/',
      position: 'Data Warehouse Developer Intern',
      description: 'After my 3rd year of university I worked as a data warehouse develoepr intern where I assisted in the management of data warehouse systems, supported the design and implementation on data models that accurately represent business scenarios and contributed to the management of databases. ',
      skills: ['mysql', 'ssms', 'sscm', 'ssdt']
    }
  ];
}
