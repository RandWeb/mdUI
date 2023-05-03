import {Pipe, PipeTransform} from '@angular/core';
import {PersianCalenderService} from "../services/common/persian-calender.service";

@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  constructor(public persianCalenderService: PersianCalenderService) {
  }

  transform(value: Date): string {
    let date = new Date(value);
    return this.persianCalenderService.PersianCalendar(date);
  }

}
