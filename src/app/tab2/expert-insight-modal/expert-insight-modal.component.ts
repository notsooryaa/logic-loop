import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-expert-insight-modal',
  templateUrl: 'expert-insight-modal.component.html',
  styleUrls: ['expert-insight-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ExpertInsightModalComponent {
  riddle = {
    title: 'Volume #412',
    difficulty: 'HARD',
    theme: 'Cartography',
    text: '"I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?"',
    answer: 'A Map',
  };

  experts = [
    {
      initials: 'AR',
      name: 'Arjun R.',
      rank: 'Grand Logician',
      color: '#3d4cb7',
      bg: 'rgba(235,229,246,0.9)',
      time: '1m 42s',
      approach:
        'I focused on the pattern of contradictions — each clause names a container without its contents. The answer must be a representation, not a reality.',
      steps: ['Identified the "container without contents" pattern', 'Eliminated physical places', 'Landed on Map'],
    },
    {
      initials: 'ML',
      name: 'Maya L.',
      rank: 'Riddle Sage',
      color: '#cb2d38',
      bg: 'rgba(252,228,228,0.9)',
      time: '2m 05s',
      approach:
        'The word "no" kept jumping out. Nothing physical fits because they all have the missing things. A map is a perfect abstraction.',
      steps: ['Noticed the negation pattern', 'Thought of symbols & abstractions', 'Confirmed with "water, no fish"'],
    },
    {
      initials: 'KP',
      name: 'Kenji P.',
      rank: 'Logic Adept',
      color: '#6a7c14',
      bg: 'rgba(224,233,182,0.8)',
      time: '3m 18s',
      approach:
        'Started with geography, then realised the clue is about representation vs. reality. Maps show cities without housing anyone.',
      steps: ['Tried literal geography first', 'Pivoted to meta-thinking', 'Solved via "representation" lens'],
    },
  ];

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
