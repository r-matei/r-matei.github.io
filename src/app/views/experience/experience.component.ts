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
  skills: Array<string>;
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      skills: ['angular', 'javascript', 'typescript', 'scss', 'html', 'gwt', 'ux/ui', 'figma']
    },
    {
      periodStart: '2021',
      periodEnd: '2022',
      company: 'Webmagnat SRL',
      url: 'https://webmagnat.ro/',
      position: 'Front End Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      skills: ['vue', 'javascript', 'laravel', 'css', 'html', 'jquery']
    },
    {
      periodStart: '2019 June',
      periodEnd: 'August',
      company: 'Bitdefender',
      url: 'https://www.bitdefender.com/',
      position: 'Data Warehouse Developer Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      skills: ['mysql', 'ssms', 'sscm', 'ssdt']
    }
  ];
}
