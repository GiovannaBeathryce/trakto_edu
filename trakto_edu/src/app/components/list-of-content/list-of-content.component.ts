import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-content',
  templateUrl: './list-of-content.component.html',
  styleUrls: ['./list-of-content.component.css']
})
export class ListOfContentComponent {
  @Input() title!: string;
}
