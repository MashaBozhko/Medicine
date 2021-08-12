import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  selectYear = <HTMLInputElement>(document.getElementById("year"));
  selectMonth = <HTMLInputElement>(document.getElementById("month"));
  monthAndYear = <HTMLInputElement>(document.getElementById("monthAndYear"));
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  today2 = new Date();
  currentMonth2 = this.today.getMonth();
  currentYear2 = this.today.getFullYear();
  selectYear2 = <HTMLInputElement>(document.getElementById("year"));
  selectMonth2 = <HTMLInputElement>(document.getElementById("month"));
  monthAndYear2 = <HTMLInputElement>(document.getElementById("monthAndYear"));
  months2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private router: Router) { }

  ngOnInit(): void {



    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.selectYear = <HTMLInputElement>(document.getElementById("year"));
    this.selectMonth = <HTMLInputElement>(document.getElementById("month"));
    var createYear = this.generate_year_range(1970, 2050);
    /** or
     * createYear = generate_year_range( 1970, currentYear );
     */
    this.monthAndYear = <HTMLInputElement>(document.getElementById("monthAndYear"));

    document.getElementById("year").innerHTML = createYear;
    this.months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    var calendar = document.getElementById("calendar");
    var lang = calendar.getAttribute('data-lang');

    var days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    var dayHeader = "<tr>";
    for (let day in days) {
      dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
    }
    dayHeader += "</tr>";

    document.getElementById("thead-month").innerHTML = dayHeader;


    this.showCalendar(this.currentMonth, this.currentYear);


  }


  generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
      years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
  }

  daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
  showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    let tbl = document.getElementById("calendar-body");


    tbl.innerHTML = "";


    this.monthAndYear.innerHTML = this.months[month] + " " + year;
    this.selectYear.value = year;
    this.selectMonth.value = month;

    // creating all cells
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
      var row = document.createElement("tr");

      for ( var j = 0; j < 7; j++ ) {
        if ( i === 0 && j < firstDay ) {
          let cell = document.createElement( "td" );
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > this.daysInMonth(month, year)) {
          break;
        } else {
          let cell = document.createElement("td");
          cell.setAttribute("data-date", date.toString());
          cell.setAttribute("data-month", month + 1);
          cell.setAttribute("data-year", year);
          cell.setAttribute("data-month_name", this.months[month]);
          cell.className = "date-picker";
          cell.innerHTML = "<span>" + date + "</span>";

          if ( date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth() ) {
            cell.className = "date-picker selected";
          }
          row.appendChild(cell);
          date++;
        }


      }

      tbl.appendChild(row);
    }

  }
  jump() {
    this.currentYear = parseInt(this.selectYear.value);
    this.currentMonth = parseInt(this.selectMonth.value);
    this.showCalendar(this.currentMonth, this.currentYear);
  }
  next() {
    this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  previous() {
    this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
    this.showCalendar(this.currentMonth, this.currentYear);
  }



}
