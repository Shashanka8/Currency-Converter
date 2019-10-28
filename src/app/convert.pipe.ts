import { Pipe, PipeTransform } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: "convert"
})
export class ConvertPipe implements PipeTransform {
  conversionRate: any;
  constructor(private http: HttpClient) {
    this.http.get('https://api.exchangeratesapi.io/latest?base=USD').subscribe(rate => {
      this.conversionRate = JSON.stringify(rate["rates"]["INR"])
      console.log(this.conversionRate)
    });
  }

  transform(value: any): any {
    let newStr: number;

    if (value == "NaN" || value <= 0) {
      newStr = 0;
    } else {
      newStr = value * this.conversionRate;
    }
    return newStr;
  }

}

