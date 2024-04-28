import { Component, inject } from '@angular/core';
import { NameService } from '../Services/name.service';

@Component({
  selector: 'app-subject-observable',
  templateUrl: './subject-observable.component.html',
  styleUrls: ['./subject-observable.component.css']
})
export class SubjectObservableComponent {
  newName:string = '';
  nameService:NameService = inject(NameService);
  getName(name:string){
      console.log(name);
      this.nameService.onCreateTask(this.newName);
      this.newName = '';
  }
}
