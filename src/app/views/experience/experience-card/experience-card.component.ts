import { Component, Input } from '@angular/core';
import { ExperienceInterface } from '../experience.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
    @Input({ required: true })
    public experience!: ExperienceInterface;
}
