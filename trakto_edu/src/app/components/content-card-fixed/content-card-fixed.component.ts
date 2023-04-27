import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card-fixed',
  templateUrl: './content-card-fixed.component.html',
  styleUrls: ['./content-card-fixed.component.css']
})
export class ContentCardFixedComponent {

@Input() img = ''
}
