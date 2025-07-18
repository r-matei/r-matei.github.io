import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, model, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { debounceTime, Observable, of, share } from 'rxjs';

const darkModeSignal = signal(false);
export const darkMode = darkModeSignal.asReadonly;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public readonly scrolledFragment = input.required<string>();
  public readonly isDarkMode = model.required<boolean | null>();

  protected menuEntries = [
    {
      name: 'ABOUT',
      path: 'about'
    },
    {
      name: 'EXPERIENCE',
      path: 'experience'
    },
    {
      name: 'EDUCATION',
      path: 'education'
    },
    {
      name: 'CONTACT',
      path: 'contact'
    }
  ]

  protected selectedFragment: Observable<string | null> | undefined;

  protected route = inject(ActivatedRoute);

  constructor() {
    this.route.fragment.subscribe(fragment => {
      this.selectedFragment = of(fragment);
    });

    effect(() => {
      this.selectedFragment = of(this.scrolledFragment());
    })

    effect(() => {
      if (this.isDarkMode()) {
        darkModeSignal.set(this.isDarkMode()!);
      }
    }, {
      allowSignalWrites: true
    })
  }

  protected changeTheme(): void {
    this.isDarkMode.update(oldValue => !oldValue);
    this.setLocalStorageVariable();
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
      darkModeSignal.set(true);
      return;
    }

    document.documentElement.classList.remove('dark');
    darkModeSignal.set(false);
  }

  private setLocalStorageVariable(): void {
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode()));
  }
}
