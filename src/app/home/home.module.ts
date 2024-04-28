import { NgModule } from "@angular/core";

import { AsyncSubjectComponent } from "../async-subject/async-subject.component";
import { BehaviorSubjectComponent } from "../behavior-subject/behavior-subject.component";
import { CommonModule } from "@angular/common";
import { ContainerComponent } from "../container/container.component";
import { SharedModule } from "../shared.module";

@NgModule({
    declarations : [
      
        AsyncSubjectComponent,
        BehaviorSubjectComponent
    ],
    exports:[
        AsyncSubjectComponent,
        BehaviorSubjectComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HomeModule{

}