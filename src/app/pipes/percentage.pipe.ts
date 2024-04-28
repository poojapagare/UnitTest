import { Pipe, PipeTransform } from "@angular/core";
import { retry } from "rxjs";

@Pipe({
    name:'percentage'
})
export class PercentagePipe implements PipeTransform{
    transform(value: any, total:number,decimal:number) {
        return (value / total * 100).toFixed(decimal) + '%';
    }

}