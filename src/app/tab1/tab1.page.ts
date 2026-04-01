import { Component } from '@angular/core';

type HistoryEntry = {
  title: string;
  duration: string;
  difficulty: string;
  titleIcon: string;
  completed: boolean;
  accent: 'blue' | 'indigo' | 'red';
  badgeText: string;
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  readonly mastery = 84;

  readonly badges = 12;

  readonly averageTime = '46.12m';

  readonly improvement = '+12% quicker this week';

  readonly historyEntries: HistoryEntry[] = [
    {
      title: 'The Clockmaker\'s Cipher',
      duration: 'Solved in 3:45',
      difficulty: 'Difficulty: Scholarly',
      titleIcon: 'bulb-outline',
      completed: true,
      accent: 'blue',
      badgeText: 'DAY 24',
    },
    {
      title: 'Paradox in the Pines',
      duration: 'Solved in 12:10',
      difficulty: 'Difficulty: Sage',
      titleIcon: 'git-compare-outline',
      completed: true,
      accent: 'indigo',
      badgeText: 'DAY 23',
    },
    {
      title: 'The Orchard Equation',
      duration: '“The golden ratio is hidden in the leaves.”',
      difficulty: 'Unfinished challenge',
      titleIcon: 'flower-outline',
      completed: false,
      accent: 'red',
      badgeText: 'DAY 21',
    },
    {
      title: 'Labyrinth of Echoes',
      duration: 'Solved in 8:22',
      difficulty: 'Difficulty: Master',
      titleIcon: 'radio-outline',
      completed: true,
      accent: 'blue',
      badgeText: 'DAY 20',
    },
  ];
}
