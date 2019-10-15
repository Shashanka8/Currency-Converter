import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convert"
})
export class ConvertPipe implements PipeTransform {
  transform(value: any): any {
    let newStr: number;

    if (value == "NaN" || value <= 0) {
      newStr = 0;
    } else {
      newStr = value * 71.55;
    }
    return newStr;
  }

}
