import { IDesigns } from './../material-didatico/design';
import { Component, Input } from '@angular/core';
import { MaterialService } from './material-didatico.services';

@Component({
  selector: 'app-list-of-content',
  templateUrl: './list-of-content.component.html',
  styleUrls: ['./list-of-content.component.css']
})
export class ListOfContentComponent {
  @Input() title!: string;

  designsList : IDesigns[] = []

  design : IDesigns = {
    id: '',
    cover: '',
    thumbs: '',
    title: '',
  }

  ytImageCover = [
    '../../../assets/images/youtube/youtube1.png',
    '../../../assets/images/youtube/youtube2.png',
    '../../../assets/images/youtube/youtube3.png',
    '../../../assets/images/youtube/youtube4.png',
    '../../../assets/images/youtube/youtube5.png',
  ]

  constructor(private service: MaterialService){}

  ngOnInit(): void {
    this.getDesigns()
  }

  getDesigns(){
     return this.service.listDesigns()
     .subscribe((res)=> {
       const d : Array<IDesigns> = []
       const rest =  (res);
       const values = Object.values(rest);
       const dataDesigns = values[6].data

      for(let i = 0; i <= dataDesigns.length; i++){
        if(i !== dataDesigns.length && dataDesigns[i] !== undefined ){

          let newDisign : any = {
            id : dataDesigns[i].id,
            cover : dataDesigns[i].cover.medium,
            thumbs : dataDesigns[i].thumbs.medium,
            title : dataDesigns[i].title,
          }
          d.push(newDisign)
       }
      }
      this.designsList = d

      })
  }

}
