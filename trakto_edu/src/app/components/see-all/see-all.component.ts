import { Component } from '@angular/core';
import { IDesigns } from '../material-didatico/design';
import { MaterialService } from '../list-of-content/material-didatico.services';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent {
  designsListAll : IDesigns[] = []

  design : IDesigns = {
    id: '',
    cover: '',
    thumbs: '',
    title: '',
  }

  constructor(private service: MaterialService    ){}

  ngOnInit(): void {
    this.getDesigns()
  }

  getDesigns(){
    return this.service.listAllDesigns()
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
      this.designsListAll = d
      })
  }

}
