import { Component, Input } from '@angular/core';
import { IDesigns } from '../material-didatico/design';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() design : IDesigns = {
    id: '',
    cover: '',
    thumbs: '',
    title: '',
  }
}
