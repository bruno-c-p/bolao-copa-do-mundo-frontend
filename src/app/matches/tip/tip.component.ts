import { Component, Input, OnInit } from '@angular/core';
import { TipEvent } from 'src/app/models/tip-event';
import { TipService } from 'src/app/services/tip.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent implements OnInit {
  @Input() tip!: TipEvent;

  constructor(private tipService: TipService) {}

  ngOnInit(): void {}

  confirmTip() {
    const data = {
      match: this.tip.match.id,
      result: this.tip.type,
    };

    this.tipService.insert(data).subscribe((v) => alert('Tip confirmed'));
  }
}
