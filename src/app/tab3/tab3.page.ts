import { Component } from '@angular/core';

type MomentumBar = {
  day: string;
  value: number;
  accent?: 'red' | 'blue';
  isToday?: boolean;
};

type AchievementCard = {
  title: string;
  note: string;
  icon: string;
  accent: 'green' | 'red';
};

type StreakEntry = {
  label: string;
  value: string;
  icon: string;
  accent: 'red' | 'green';
};

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  readonly scholar = 'Julian Thorne';

  readonly title = 'The Perpetual Enigmatist';

  readonly level = 42;

  readonly focus = 'Logic Master';

  readonly mastery = 75;

  readonly momentumBars: MomentumBar[] = [
    { day: 'MON', value: 38 },
    { day: 'TUE', value: 61, accent: 'red' },
    { day: 'WED', value: 34 },
    { day: 'THU', value: 82, accent: 'blue', isToday: true },
    { day: 'FRI', value: 52 },
    { day: 'SAT', value: 22 },
    { day: 'SUN', value: 30 },
  ];

  readonly achievements: AchievementCard[] = [
    {
      title: 'Erana Scholar',
      note: '7-day clarity streak',
      icon: 'ribbon-outline',
      accent: 'green',
    },
    {
      title: 'Unbroken Streak',
      note: 'Daily puzzle solved',
      icon: 'medal-outline',
      accent: 'red',
    },
  ];

  readonly streakHistory: StreakEntry[] = [
    {
      label: 'Longest streak',
      value: '24 Days',
      icon: 'calendar-clear-outline',
      accent: 'red',
    },
    {
      label: 'Current momentum',
      value: '14 Days',
      icon: 'reload-outline',
      accent: 'green',
    },
  ];

}
